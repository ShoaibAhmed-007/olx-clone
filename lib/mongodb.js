// // lib/mongodb.js
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your MongoDB URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;
// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  tls: true, // Explicitly enable TLS
  retryWrites: true,
  w: "majority",
  serverSelectionTimeoutMS: 5000, // 5 seconds timeout for server selection
  socketTimeoutMS: 30000, // 30 seconds socket timeout
  connectTimeoutMS: 30000, // 30 seconds connection timeout
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development, use global variable to preserve connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      ...options,
      tlsAllowInvalidCertificates: true, // Only for development
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, use strict TLS settings
  client = new MongoClient(uri, {
    ...options,
    tlsAllowInvalidCertificates: false, // Strict validation in production
  });
  clientPromise = client.connect();
}

export default clientPromise;
