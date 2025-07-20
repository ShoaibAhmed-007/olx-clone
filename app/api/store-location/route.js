// app/api/store-location/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { latitude, longitude, timestamp } = body;

    const client = await clientPromise;
    const db = client.db("your-db-name");
    const collection = db.collection("locations");

    await collection.insertOne({
      latitude,
      longitude,
      timestamp: new Date(timestamp),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error storing location:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
