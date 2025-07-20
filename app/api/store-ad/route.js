// // app/api/store-ad/route.js
// import clientPromise from "@/lib/mongodb";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { tier, location, image, timestamp } = body;

//     const client = await clientPromise;
//     const db = client.db("your-db-name"); // Change this to your DB name
//     const collection = db.collection("ads");

//     const result = await collection.insertOne({
//       tier,
//       location,
//       image, // base64 image
//       timestamp: new Date(timestamp),
//     });

//     return new Response(
//       JSON.stringify({ success: true, id: result.insertedId }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error storing ad:", error);
//     return new Response(JSON.stringify({ message: "Internal server error" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    // Validate request body
    const body = await req.json();
    console.log("Received body:", body);
    // if (!body || !body.tier || !body.location || !body.image) {
    //   return new Response(
    //     JSON.stringify({ message: "Missing required fields" }),
    //     { status: 400, headers: { "Content-Type": "application/json" } }
    //   );
    // }

    const { tier, location, image, timestamp } = body;

    // Validate and process image data
    let processedImage = image;
    if (image.startsWith("data:")) {
      // Remove metadata if present
      processedImage = image.split(",")[1];
    }

    // Process timestamp
    const processedTimestamp = timestamp ? new Date(timestamp) : new Date();

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "your-db-name");
    const collection = db.collection("featuredAds"); // Consistent collection name

    // Insert document with proper data types
    const result = await collection.insertOne({
      tier: {
        title: tier.title,
        price: tier.price,
        discountPrice: tier.discountPrice || null,
        duration: tier.duration,
        features: tier.features || [],
      },
      location: {
        latitude: parseFloat(location.latitude),
        longitude: parseFloat(location.longitude),
      },
      image: processedImage,
      timestamp: processedTimestamp,
      createdAt: new Date(), // Additional audit field
    });

    return new Response(
      JSON.stringify({
        success: true,
        id: result.insertedId,
        timestamp: processedTimestamp.toISOString(),
      }),
      {
        status: 201, // 201 Created for successful resource creation
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store", // Prevent caching of sensitive data
        },
      }
    );
  } catch (error) {
    console.error("Error storing ad:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        ...(process.env.NODE_ENV === "development" && {
          error: error.message,
          stack: error.stack,
        }),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
