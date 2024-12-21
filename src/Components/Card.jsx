import React from 'react';

const Card = () => {
const data = [
  {
    url: "https://api.thechennaimobiles.com/1719121334790.webp",
    name: "Vivo Mobile Phone",
    description: "A high-quality mobile phone from Vivo."
  },
//   {
//     url: "https://www.mobiledokan.com/media/vivo-x200-white-official-image.webp",
//     name: "Nokia HMD Vibe",
//     description: "A prepaid smartphone locked to Simple Mobile."
//   },
//   {
//     url: "https://www.sony.co.in/image/2391ae5de6d0a34c41b28c03905f2ddc?fmt=png-alpha&resMode=bisharp&wid=384",
//     name: "Simple Mobile Phones",
//     description: "A variety of mobile phones available at Walmart."
//   },
//   {
//     url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/7/c/t/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah3nhecpzsx3g9.jpeg?q=20&crop=false",
//     name: "Business Phones",
//     description: "Phones suitable for business use available at Walmart."
//   },
//   {
//     url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/e/x/110-dual-sim-keypad-phone-with-fm-radio-auto-call-recording-original-imah35z5zjsszbyz.jpeg?q=90&crop=false",
//     name: "Chennai Mobiles",
//     description: "A mobile phone available at Chennai Mobiles."
//     }
//   ,  {
//     url: "https://api.thechennaimobiles.com/1719121334790.webp",
//     name: "Vivo Mobile Phone",
//     description: "A high-quality mobile phone from Vivo."
//   },
//   {
//     url: "https://www.mobiledokan.com/media/vivo-x200-white-official-image.webp",
//     name: "Nokia HMD Vibe",
//     description: "A prepaid smartphone locked to Simple Mobile."
//   },
//   {
//     url: "https://www.sony.co.in/image/2391ae5de6d0a34c41b28c03905f2ddc?fmt=png-alpha&resMode=bisharp&wid=384",
//     name: "Simple Mobile Phones",
//     description: "A variety of mobile phones available at Walmart."
//   },
//   {
//     url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/7/c/t/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah3nhecpzsx3g9.jpeg?q=20&crop=false",
//     name: "Business Phones",
//     description: "Phones suitable for business use available at Walmart."
//   },
//   {
//     url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/e/x/110-dual-sim-keypad-phone-with-fm-radio-auto-call-recording-original-imah35z5zjsszbyz.jpeg?q=90&crop=false",
//     name: "Chennai Mobiles",
//     description: "A mobile phone available at Chennai Mobiles."
//   },  {
//     url: "https://api.thechennaimobiles.com/1719121334790.webp",
//     name: "Vivo Mobile Phone",
//     description: "A high-quality mobile phone from Vivo."
//   },
//   {
//     url: "https://www.mobiledokan.com/media/vivo-x200-white-official-image.webp",
//     name: "Nokia HMD Vibe",
//     description: "A prepaid smartphone locked to Simple Mobile."
//   },
//   {
//     url: "https://www.sony.co.in/image/2391ae5de6d0a34c41b28c03905f2ddc?fmt=png-alpha&resMode=bisharp&wid=384",
//     name: "Simple Mobile Phones",
//     description: "A variety of mobile phones available at Walmart."
//   },
//   {
//     url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/7/c/t/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah3nhecpzsx3g9.jpeg?q=20&crop=false",
//     name: "Business Phones",
//     description: "Phones suitable for business use available at Walmart."
//   },
//   {
//     url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/e/x/110-dual-sim-keypad-phone-with-fm-radio-auto-call-recording-original-imah35z5zjsszbyz.jpeg?q=90&crop=false",
//     name: "Chennai Mobiles",
//     description: "A mobile phone available at Chennai Mobiles."
//   },  {
//     url: "https://api.thechennaimobiles.com/1719121334790.webp",
//     name: "Vivo Mobile Phone",
//     description: "A high-quality mobile phone from Vivo."
//   },
//   {
//     url: "https://www.mobiledokan.com/media/vivo-x200-white-official-image.webp",
//     name: "Nokia HMD Vibe",
//     description: "A prepaid smartphone locked to Simple Mobile."
//   },
//   {
//     url: "https://www.sony.co.in/image/2391ae5de6d0a34c41b28c03905f2ddc?fmt=png-alpha&resMode=bisharp&wid=384",
//     name: "Simple Mobile Phones",
//     description: "A variety of mobile phones available at Walmart."
//   },
//   {
//     url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/7/c/t/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah3nhecpzsx3g9.jpeg?q=20&crop=false",
//     name: "Business Phones",
//     description: "Phones suitable for business use available at Walmart."
//   },
//   {
//     url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/e/x/110-dual-sim-keypad-phone-with-fm-radio-auto-call-recording-original-imah35z5zjsszbyz.jpeg?q=90&crop=false",
//     name: "Chennai Mobiles",
//     description: "A mobile phone available at Chennai Mobiles."
//   }
];
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-red-800 to-gray-300 flex ">
     {data.map((val,key)=> <div className="px-6 py-6 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105">
        {/* Image Section */}
        <div className="bg-gray-200 w-full h-40 rounded-md overflow-hidden flex justify-center items-center">
          <img
            className="object-contain h-full w-full"
        src={val.url}
            alt="Amazon Basics"
          />
        </div>

        {/* Content Section */}
        <div className="w-full px-4 py-4">
             <h2 className="font-semibold text-lg text-gray-800">{ val.name}</h2>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
           `    {val.description}   `
          </p>
        </div>

        {/* Action Button */}
        <div className="px-4 pb-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Buy Now
          </button>
        </div>
      </div>)}
    </div>
  );
};

export default Card;
