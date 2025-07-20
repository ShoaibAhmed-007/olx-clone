// // app/api/store-location/route.js
// import clientPromise from "@/lib/mongodb";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { latitude, longitude, timestamp } = body;

//     const client = await clientPromise;
//     const db = client.db("your-db-name");
//     const collection = db.collection("locations");

//     await collection.insertOne({
//       latitude,
//       longitude,
//       timestamp: new Date(timestamp),
//     });

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Error storing location:", error);
//     return new Response(JSON.stringify({ message: "Internal server error" }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }

import clientPromise from "@/lib/mongodb";

// Validate location coordinates
function isValidCoordinate(coord) {
  return typeof coord === "number" && !isNaN(coord) && Math.abs(coord) <= 180;
}

export async function POST(req) {
  try {
    // Validate request
    if (req.headers.get("content-type") !== "application/json") {
      return new Response(JSON.stringify({ message: "Invalid content type" }), {
        status: 415,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const { latitude, longitude, timestamp } = body;

    // Validate required fields
    if (!latitude || !longitude) {
      return new Response(
        JSON.stringify({ message: "Missing latitude or longitude" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate coordinate values
    if (!isValidCoordinate(latitude) || !isValidCoordinate(longitude)) {
      return new Response(JSON.stringify({ message: "Invalid coordinates" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "your-db-name");
    const collection = db.collection("userLocations"); // Consistent naming

    // Prepare document with proper types
    const locationDoc = {
      location: {
        type: "Point",
        coordinates: [
          parseFloat(longitude.toFixed(6)), // GeoJSON format: [long, lat]
          parseFloat(latitude.toFixed(6)),
        ],
      },
      timestamp: timestamp ? new Date(timestamp) : new Date(),
      createdAt: new Date(), // Audit field
    };

    // Insert with write concern
    await collection.insertOne(locationDoc, {
      writeConcern: { w: "majority", j: true },
    });

    return new Response(
      JSON.stringify({
        success: true,
        timestamp: locationDoc.timestamp.toISOString(),
      }),
      {
        status: 201, // 201 Created
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Location tracking error:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        ...(process.env.NODE_ENV === "development" && {
          error: error.message,
        }),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
