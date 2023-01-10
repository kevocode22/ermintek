import React from "react";
import './home.css'

const Banner = () => {

  return (
    <div className="videobanner flex justify-start items-center w-full my-7 -z-50 sm:max-h-32">
<video autoPlay muted loop className="w-full h-screen object-cover -z-10">
<source src='https://i.imgur.com/dlRhXlM.mp4' className="-z-30"/> 
</video>
<div className="flex flex-col items-center" >
  <h2 className="textBanner sm:text-sm">Nuevo Iphone 14 Pro</h2>
</div>
</div>
  ) 
};

export default Banner;
