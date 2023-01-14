import React from "react";
import { useParams } from "react-router-dom";
import { imgList } from "../Images";
import logo from "../logo/icon-300px.png";
function GeneralComp() {
  const params = useParams();
  const n = Math.round(Math.random() * (imgList.length - 1 - 0) + 0);
  const imgSrc = imgList[n];
  console.log(n, imgSrc);

  return (
    <div className="w-full flex flex-col -mt-2">
      <div className="relative text-center">
        <img
          src={imgSrc}
          className="w-full h-64 object-cover filter brightness-[40%]"
          alt=""
        />
        <h1 className=" text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          {params.title.split("+")[0] + " " + params.title.split("+")[1]}
        </h1>
      </div>
      <div className="flex flex-col  mx-auto pb-24">
        <img className="w-72 opacity-[25%]" src={logo} alt="" />
        <h1 className=" text-gray-400 text-xs text font-bold uppercase text-center">
          This page is under
        </h1>
        <h1 className=" text-gray-400 text-base -mt-2 text font-bold uppercase text-center">
          Construction
        </h1>
      </div>
    </div>
  );
}

export default GeneralComp;
