import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

export async function GET(request, { params }) {
  try {
    // Validate the ID parameter
    if (!params?.id || !ObjectId.isValid(params.id)) {
      return new Response("Invalid ID format", { status: 400 });
    }

    const client = await MongoClient.connect(uri);
    const db = client.db("your-db-name");
    const collection = db.collection("ads");

    // Find document by ID
    const result = await collection.findOne({
      _id: new ObjectId(params.id),
    });

    if (!result?.image) {
      return new Response("Image not found", { status: 404 });
    }

    // Extract base64 image data (remove data URL prefix if present)
    const base64Data = result.image.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, "base64");

    // Determine content type from the image data
    const contentType =
      result.image.match(/^data:(image\/\w+);/)?.[1] || "image/jpeg";

    await client.close();

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Length": imageBuffer.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
