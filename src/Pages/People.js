import React from "react";
import { useParams } from "react-router-dom";
import { imgList } from "../Images";
const ContactCard = ({ data }) => {
  return (
    <div className="flex flex-col mx-auto w-3/5 md:w-[30%] overflow-hidden rounded-md shadow-md border border-gray-200">
      <img className="w-full h-36 object-cover" src={data.img} alt="" />
      <div className="mx-4 text-left flex flex-col">
        <h1 className="text-lg font-bold mt-4 text-blue-500">{data.name}</h1>
        <h1 className="text-sm font-semibold">{data.post}</h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Research area : </strong>
          {data.Research}
        </h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Office NO : </strong>
          {data.Office}
        </h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Email id : </strong>
          {data.email} -AT- iitgn.ac.in
        </h1>
        <a href={data.webUrl} className="text-sm mb-4">
          Personal Webpage
        </a>
      </div>
    </div>
  );
};
const ContactCardPhD = ({ data }) => {
  return (
    <div className="flex flex-col mx-auto w-3/5 md:w-[30%] overflow-hidden rounded-md shadow-md border border-gray-200">
      <img className="w-full h-36 object-cover" src={data.img} alt="" />
      <div className="mx-4 text-left flex flex-col">
        <h1 className="text-lg font-bold mt-4 text-blue-500">{data.name}</h1>
        <h1 className="text-sm font-semibold">{data.post}</h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Joining Year : </strong>
          {data.jy}
        </h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Advisor : </strong>
          {data.adv}
        </h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Email id : </strong>
          {data.email} -AT- iitgn.ac.in
        </h1>
        <a href={data.webUrl} className="text-sm mb-4">
          Personal Webpage
        </a>
      </div>
    </div>
  );
};

function People({ id }) {
  const params = useParams();
  const n = Math.round(Math.random() * (imgList.length - 1 - 0) + 0);
  const imgSrc = imgList[n];
  console.log(n, imgSrc);

  const data = [
    {
      name: "Anand Sengupta",
      post: "Associate Professor",
      Research: "Gravitational Wave Astronomy",
      Office: "AB 5/326",
      email: "asengupta",
      webUrl: "",
      img: "https://physics.iitgn.ac.in/img/faculty/anand.jfif",
    },
    {
      name: "Anand Sengupta",
      post: "Associate Professor",
      Research: "Gravitational Wave Astronomy",
      Office: "AB 5/326",
      email: "asengupta",
      webUrl: "",
      img: "https://physics.iitgn.ac.in/img/faculty/anand.jfif",
    },
    {
      name: "",
      post: "",
      Research: "",
      Office: "",
      email: "",
      webUrl: "",
      img: "",
    },
  ];
  const dataPhD = [
    {
      name: "Akshat Khanna",
      jy: "2018",
      Research: "Gravitational Wave Astronomy",
      adv: "AB 5/326",
      email: "asengupta",
      webUrl: "",
      img: "https://physics.iitgn.ac.in/img/srs/akshat.jpg",
    },
    {
      name: "Akshat Khanna",
      jy: "2018",
      Research: "Gravitational Wave Astronomy",
      adv: "AB 5/326",
      email: "asengupta",
      webUrl: "",
      img: "https://physics.iitgn.ac.in/img/srs/akshat.jpg",
    },
    {
      name: "",
      jy: "",
      Research: "",
      adv: "",
      email: "",
      webUrl: "",
      img: "",
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
          {id === 1 ? "Faculty" : "PhD Students"}
        </h1>
      </div>
      <div className="flex flex-wrap  mx-auto mt-5 pb-24 gap-5">
        {id === 1
          ? data.map((doc) => <ContactCard data={doc} />)
          : dataPhD.map((doc) => <ContactCardPhD data={doc} />)}
      </div>
    </div>
  );
}

export default People;
