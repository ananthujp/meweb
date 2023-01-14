import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import BottomBar from "./Components/BottomBar";
import HomeComp from "./Pages/HomeComp";
import GeneralComp from "./Pages/GeneralComp";
import People from "./Pages/People";

const AppLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-gray-50">
      <div className=" ">
        <Navbar />
        <div className="mt-24">
          <Outlet />
        </div>
      </div>
      <BottomBar />
    </div>
  );
};
const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomeComp />} />
        <Route path="/pages/:title" element={<GeneralComp />} />
        <Route path="/People/Faculty" element={<People id={1} />} />
        <Route path="/People/PhD-Students" element={<People id={2} />} />
      </Route>
    </>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
