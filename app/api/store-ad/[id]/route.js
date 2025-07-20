// // api/store-ad/[id]/route.js
// import { MongoClient, ObjectId } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const dbName = process.env.MONGODB_DB;

// export async function GET(request, { params }) {
//   try {
//     // Validate the ID parameter
//     if (!params?.id || !ObjectId.isValid(params.id)) {
//       return new Response("Invalid ID format", { status: 400 });
//     }

//     const client = await MongoClient.connect(uri);
//     const db = client.db("your-db-name");
//     const collection = db.collection("ads");

//     // Find document by ID
//     const result = await collection.findOne({
//       _id: new ObjectId(params.id),
//     });

//     if (!result?.image) {
//       return new Response("Image not found", { status: 404 });
//     }

//     // Extract base64 image data (remove data URL prefix if present)
//     const base64Data = result.image.replace(/^data:image\/\w+;base64,/, "");
//     const imageBuffer = Buffer.from(base64Data, "base64");

//     // Determine content type from the image data
//     const contentType =
//       result.image.match(/^data:(image\/\w+);/)?.[1] || "image/jpeg";

//     await client.close();

//     return new Response(imageBuffer, {
//       headers: {
//         "Content-Type": contentType,
//         "Content-Length": imageBuffer.length.toString(),
//         "Cache-Control": "public, max-age=31536000, immutable",
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching image:", error);
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }

import { MongoClient, ObjectId } from "mongodb";

// Use the connection helper if available, otherwise fallback
let clientPromise;
try {
  clientPromise = import("@/lib/mongodb").then((m) => m.default);
} catch {
  // Fallback connection configuration
  const uri =
    process.env.MONGODB_URI +
    (process.env.NODE_ENV === "production" ? "&tls=true" : "");
  const options = {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 30000,
    connectTimeoutMS: 30000,
    ...(process.env.NODE_ENV === "production" && {
      tls: true,
      tlsAllowInvalidCertificates: false,
    }),
  };
  clientPromise = new MongoClient(uri, options).connect();
}

export async function GET(request, { params }) {
  try {
    // Workaround for Next.js params issue
    await Promise.resolve();

    // Validate the ID parameter
    if (!params?.id || !ObjectId.isValid(params.id)) {
      return new Response("Invalid ID format", { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "your-db-name");
    const collection = db.collection("featuredAds");

    const result = await collection.findOne({
      _id: new ObjectId(params.id),
    });

    if (!result?.image) {
      return new Response("Image not found", { status: 404 });
    }

    // Process image data
    const base64Data = result.image.startsWith("data:")
      ? result.image.split(",")[1]
      : result.image;
    const imageBuffer = Buffer.from(base64Data, "base64");

    const contentType = result.image.startsWith("data:")
      ? result.image.split(";")[0].split(":")[1]
      : "image/jpeg";

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Length": imageBuffer.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
