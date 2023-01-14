import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import BottomBar from "./Components/BottomBar";
import HomeComp from "./Pages/HomeComp";

const router = createBrowserRouter(
  //   [
  //   {
  //     path: "/",
  //     element: <HomeComp />,
  //   },
  // ]
  createRoutesFromElements(<Route path="/" element={<HomeComp />}></Route>)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="w-full h-screen flex flex-col justify-between bg-gray-50">
      <div className=" ">
        <Navbar />
        <div className="mt-24">
          <RouterProvider router={router} />
        </div>
      </div>
      <BottomBar />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
