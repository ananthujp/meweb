import React from "react";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import CalendarIcon from "react-calendar-icon";
import { ThemeProvider } from "@emotion/react";

// const CalendarIcon = ({ date }) => {
//   return (
//     <svg
//       id="Layer_1"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 122.88 121"
//       className="w-20 h-20"
//     >
//       <defs>
//         <style>
//           {".cls-5{fill-rule:evenodd}.cls-4{fill:#1a1a1a}.cls-5{fill:#c72b20}"}
//         </style>
//       </defs>
//       <title>{"calender-date-12"}</title>
//       <text>16</text>
//       <path
//         d="M11.52 6.67h99.84a11.57 11.57 0 0 1 11.52 11.52v26.75H0V18.19A11.56 11.56 0 0 1 11.52 6.67Zm24.79 9.75A9.31 9.31 0 1 1 27 25.73a9.31 9.31 0 0 1 9.31-9.31Zm49.79 0a9.31 9.31 0 1 1-9.31 9.31 9.31 9.31 0 0 1 9.31-9.31Z"
//         style={{
//           fillRule: "evenodd",
//           fill: "#ef4136",
//         }}
//       />
//       <path
//         d="M111.36 121H11.52A11.57 11.57 0 0 1 0 109.48V40h122.88v69.46A11.56 11.56 0 0 1 111.36 121Z"
//         style={{
//           fill: "gray",
//         }}
//       />
//       <path
//         d="M12.75 117.31h97.38a9.1 9.1 0 0 0 9.06-9.06V40H3.69v68.23a9.09 9.09 0 0 0 9.06 9.06Z"
//         style={{
//           fill: "#e6e6e6",
//           fillRule: "evenodd",
//         }}
//       />

//       <path
//         className="cls-5"
//         d="M86.1 14.63a11.11 11.11 0 1 1-7.85 3.26l.11-.1a11.06 11.06 0 0 1 7.74-3.16Zm0 1.79a9.31 9.31 0 1 1-9.31 9.31 9.31 9.31 0 0 1 9.31-9.31ZM36.31 14.63a11.11 11.11 0 1 1-7.85 3.26l.11-.1a11.08 11.08 0 0 1 7.74-3.16Zm0 1.79A9.31 9.31 0 1 1 27 25.73a9.31 9.31 0 0 1 9.31-9.31Z"
//       />
//       <path
//         className="cls-4"
//         d="M80.54 4.56C80.54 2 83 0 86.1 0s5.56 2 5.56 4.56v21.21c0 2.51-2.48 4.56-5.56 4.56s-5.56-2-5.56-4.56V4.56ZM30.75 4.56C30.75 2 33.24 0 36.31 0s5.56 2 5.56 4.56v21.21c0 2.51-2.48 4.56-5.56 4.56s-5.56-2-5.56-4.56V4.56Z"
//       />
//     </svg>
//   );
// };
const EventsComp = ({ date, url, title }) => {
  const dateOptions = {
    header: { month: "short" },
    footer: { month: "short" },
    value: { day: "2-digit" },
  };
  const theme = {
    calendarIcon: {
      textColor: "white", // text color of the header and footer
      //primaryColor: "#0da472", // background of the header and footer
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
    },
  };
  return (
    <div className="p-5 w-[45%] flex flex-row gap-4 bg-white shadow-md rounded-lg">
      <div className="transform scale-75 flex items-start w-1/4">
        <ThemeProvider theme={theme}>
          <CalendarIcon date={date} options={dateOptions} />
        </ThemeProvider>
      </div>
      <div className="flex gap-1 flex-col w-[65%]">
        <h1 className="flex flex-row text-xs text-gray-400">
          <ClockIcon className="w-4 mr-1 text-red-800" />
          {date.toLocaleString().split(",")[1].slice(0, 6)}
        </h1>
        <h1 className="flex flex-row text-xs text-gray-400">
          <MapPinIcon className="w-4 mr-1 text-red-800" />
          {url.length > 40 ? url.slice(0, 40) + ".." : url}
        </h1>
        <h1 className="text-base text-blue-900">{title}</h1>
      </div>
    </div>
  );
};
function Events() {
  const Items = [
    {
      title: "Stochastic Pre-ignition in Turbocharged Spark Ignited Engines",
      url: "https://iitgn-ac-in.zoom.us/j/96338863467?pwd=R1o3Vnpwa0lvN1JWVHNVeElGTjR1Zz09",
      date: new Date("March 12, 2021 11:00:00"),
    },
    {
      title: "Structural acoustics of perforated panels",
      url: "https://iitgn-ac-in.zoom.us/j/96338863467?pwd=R1o3Vnpwa0lvN1JWVHNVeElGTjR1Zz09",
      date: new Date("March 19, 2021 05:00:00"),
    },
    {
      title:
        "Experimental Characterization and Health Estimation of Lithium-ion Batteries",
      url: "https://iitgn-ac-in.zoom.us/j/96338863467?pwd=R1o3Vnpwa0lvN1JWVHNVeElGTjR1Zz09",
      date: new Date("March 25, 2021 09:00:00"),
    },
    {
      title:
        "Modeling elasticity and flexoelectricity in one-dimensional nanostructures using Cosserat rods",
      url: "https://iitgn-ac-in.zoom.us/j/96338863467?pwd=R1o3Vnpwa0lvN1JWVHNVeElGTjR1Zz09",
      date: new Date("April 6, 2021 10:30:00"),
    },
  ];
  return (
    <div className="flex flex-col py-10">
      <h1 className="my-1 font-bold text-xl">Events</h1>
      <div className="flex flex-wrap w-full overflow-x-auto mt-4 gap-6">
        {Items.map((doc, i) => (
          <EventsComp
            key={`Events.comp${i}`}
            title={doc.title}
            date={doc.date}
            url={doc.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
