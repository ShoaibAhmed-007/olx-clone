// app/api/store-ad/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { tier, location, image, timestamp } = body;

    const client = await clientPromise;
    const db = client.db("your-db-name"); // Change this to your DB name
    const collection = db.collection("ads");

    const result = await collection.insertOne({
      tier,
      location,
      image, // base64 image
      timestamp: new Date(timestamp),
    });

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error storing ad:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
