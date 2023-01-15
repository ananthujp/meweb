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
import useReducer, { AuthProvider } from "./hooks/reducerHook";
import Modal from "react-modal";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Login from "./Components/Login";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
  },
};
const OverlayScreen = () => {
  const { overlay, setOverlay } = useReducer();
  return (
    <div>
      <Modal
        isOpen={overlay.visible}
        //onAfterOpen={afterOpenModal}
        //onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        //contentLabel="Example Modal"
        className=""
      >
        <div className="relative flex flex-col justify-between ">
          <XCircleIcon
            onClick={() => setOverlay({ ...overlay, visible: false })}
            className="absolute w-5 hover:text-blue-400 rounded-full -mt-4 -mr-2 top-2 right-0"
          />
          {/* <div>{overlay.child ? overlay.child : ""}</div> */}
          <div className="">
            <Login />
          </div>
        </div>
      </Modal>
    </div>
  );
};

const AppLayout = () => {
  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col justify-between bg-gray-50">
        {true && <OverlayScreen />}
        <div className=" ">
          <Navbar />
          <div className="mt-24">
            <Outlet />
          </div>
        </div>
        <BottomBar />
      </div>
    </AuthProvider>
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
