import React from "react";
import { imgList } from "../Images";
function Placement() {
  const n = Math.round(Math.random() * (imgList.length - 1 - 0) + 0);
  const imgSrc = imgList[n];

  const gallery_map = [
    {
      title: "Portrait by Jessica Felicio",
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      link: "",
    },
    {
      title: "Portrait by Oladimeji Odunsi",
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      link: "",
    },
    {
      title: "Portrait by Alex Perez",
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      link: "",
    },
    {
      title: "Portrait by Noah Buscher",
      image: "https://source.unsplash.com/AR7aumwKr2s/300x300",
      link: "",
    },
    {
      title: "Portrait by Ivana Cajina",
      image: "https://source.unsplash.com/dnL6ZIpht2s/300x300",
      link: "",
    },
    {
      title: "Portrait by Sam Burriss",
      image: "https://source.unsplash.com/tV_1sC603zA/300x500",
      link: "",
    },
    {
      title: "Portrait by Mari Lezhava",
      image: "https://source.unsplash.com/Xm9-vA_bhm0/300x500",
      link: "",
    },
    {
      title: "Portrait by Ethan Haddox",
      image: "https://source.unsplash.com/NTjSR3zYpsY/300x300",
      link: "",
    },
    {
      title: "Portrait by Amir Geshani",
      image: "https://source.unsplash.com/2JH8d3ChNec/300x300",
      link: "",
    },
    {
      title: "Portrait by Guilian Fremaux",
      image: "https://source.unsplash.com/FQhLLehm4dk/300x300",
      link: "",
    },
    {
      title: "Portrait by Jasmin Chew",
      image: "https://source.unsplash.com/OQd9zONSx7s/300x300",
      link: "",
    },
    {
      title: "Portrait by Dima DallAcqua",
      image: "https://source.unsplash.com/XZkEhowjx8k/300x500",
      link: "",
    },
  ];
  return (
    <div className="w-full flex flex-col -mt-2">
      <div className="relative text-center">
        <img
          src={imgSrc}
          className="w-full h-64 object-cover filter brightness-[40%]"
          alt=""
        />
        <h1 className=" text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          Placement Academics
        </h1>
      </div>
      <div className="flex flex-wrap mx-auto p-1  group transition-all duration-500 ">
        {[0, 1, 2, 3].map((dc) => (
          <div className="flex flex-col w-1/4">
            {gallery_map.map(
              (doc, i) =>
                (i + 4) % (dc + 4) === 0 && (
                  <a
                    href="https://unsplash.com/@jeka_fe"
                    className="m-1 overflow-hidden "
                  >
                    <figure className="relative rounded-md overflow-hidden">
                      <img
                        src={doc.image}
                        alt="Portrait by Jessica Felicio"
                        className="block w-full transition-all filter grayscale  hover:grayscale group-hover:grayscale-0 transform hover:scale-110"
                      />
                      <figcaption className="absolute text-xs md:text-base group-hover:opacity-100 bottom-0 left-0 w-full text-white opacity-0 transition-all">
                        {doc.title}
                      </figcaption>
                    </figure>
                  </a>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Placement;
