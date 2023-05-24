


import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { useState } from "react";
import image1 from "../../../src/img/slide1.jpg"

export default function SliderImage() {
  const [imageNum, setImageNum] = useState(1)
   const sliderImages = [
      {
         url: {image1},
         
      },
      {
        url: "https://images.pexels.com/photos/16377800/pexels-photo-16377800.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      },
      {
        url: "https://images.pexels.com/photos/16377800/pexels-photo-16377800.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      },
      {
        url: "https://images.pexels.com/photos/16377800/pexels-photo-16377800.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",      },
      {
        url: "https://images.pexels.com/photos/16377800/pexels-photo-16377800.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",      },
      {
        url: "https://images.pexels.com/photos/16377800/pexels-photo-16377800.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",      },
      {
        url: "https://images.pexels.com/photos/16377800/pexels-photo-16377800.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",      },
   ];
   return (
      <div>
         <h3>
            {" "}
            Creating the image slider using the react-simple-image-slider
         </h3>
         <SimpleImageSlider
         style={{marginLeft:"106px",backgroundColor:"red"}}
            width={"85%"}
            height={"70%"}
            images={sliderImages}
            showNavs={true}
            autoPlay={true} 
            showBullets={true}
            />
      </div>
   );
}