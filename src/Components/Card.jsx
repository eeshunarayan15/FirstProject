import React from "react";

const Card = () => {
    const data = [
      {
        url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTSHdohHVA2ks3BzI7ycpFtf7JVSYpjE51_rxCyVDf9d7wFZAcGUCDxa7I_dfPE7JVC1UdU2zqY4I0xB9HHlmT4E9j29cW2EDvpQQZttgBfNzR9_pbCvC8pw",
        name: "Vivo Mobile Phone",
        description: "A high-quality mobile phone from Vivo.",
      },
      {
        url: "https://www.mobiledokan.com/media/vivo-x200-white-official-image.webp",
        name: "Nokia HMD Vibe",
        description: "A prepaid smartphone locked to Simple Mobile.",
      },
      {
        url: "https://www.sony.co.in/image/2391ae5de6d0a34c41b28c03905f2ddc?fmt=png-alpha&resMode=bisharp&wid=384",
        name: "Simple Mobile Phones",
        description: "A variety of mobile phones available at Walmart.",
      },
      {
        url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/7/c/t/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah3nhecpzsx3g9.jpeg?q=20&crop=false",
        name: "Business Phones",
        description: "Phones suitable for business use available at Walmart.",
      },
      {
        url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/e/x/110-dual-sim-keypad-phone-with-fm-radio-auto-call-recording-original-imah35z5zjsszbyz.jpeg?q=90&crop=false",
        name: "Chennai Mobiles",
        description: "A mobile phone available at Chennai Mobiles.",
      },
    ];

    return (
      // Changed to min-h-screen and added overflow-x-hidden to prevent horizontal scrolling
      <div className="min-h-screen w-full bg-gradient-to-br from-red-800 to-gray-300 p-8 overflow-x-hidden">
        {/* Added flex-wrap and proper spacing/alignment */}
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((val, key) => (
            // Changed card wrapper to be more responsive
            <div key={key} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              {/* Improved card structure with consistent spacing */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full flex flex-col transition-transform hover:scale-105">
                {/* Image container with fixed height */}
                <div className="h-48 w-full bg-gray-100 overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={val.url}
                    alt={val.name}
                  />
                </div>

                {/* Content section with flex-grow to push button to bottom */}
                <div className="flex flex-col flex-grow p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {val.name}
                  </h2>
                  <p className="text-gray-600 flex-grow">{val.description}</p>

                  {/* Button container */}
                  <div className="mt-4">
                    <button
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md 
                    transition-colors duration-200 hover:bg-blue-600 
                    focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Card;
