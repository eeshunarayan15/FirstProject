import React from 'react'
import Card from './Components/Card'
const App = () => {
 const data = [
  {
    url: "https://api.thechennaimobiles.com/1719121334790.webp",
    name: "Vivo Mobile Phone",
    description: "A high-quality mobile phone from Vivo."
  },
  {
    url: "https://www.mobiledokan.com/media/vivo-x200-white-official-image.webp",
    name: "Nokia HMD Vibe",
    description: "A prepaid smartphone locked to Simple Mobile."
  },
  {
    url: "https://www.sony.co.in/image/2391ae5de6d0a34c41b28c03905f2ddc?fmt=png-alpha&resMode=bisharp&wid=384",
    name: "Simple Mobile Phones",
    description: "A variety of mobile phones available at Walmart."
  },
  {
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/7/c/t/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah3nhecpzsx3g9.jpeg?q=20&crop=false",
    name: "Business Phones",
    description: "Phones suitable for business use available at Walmart."
  },
  {
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/e/x/110-dual-sim-keypad-phone-with-fm-radio-auto-call-recording-original-imah35z5zjsszbyz.jpeg?q=90&crop=false",
    name: "Chennai Mobiles",
    description: "A mobile phone available at Chennai Mobiles."
  }
];
  return (
    <div>
      <Card />
  
      
      {/* {data.map((val,key) => <h1 key={key} className='' >{val.description}</h1>)}
      <h1 className=''></h1> */}
    </div>
  )
}

export default App