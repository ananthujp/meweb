import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import useReducer from "../hooks/reducerHook";
import logo from "../logo/iitgn.png";
import Login from "./Login";
function Navbar() {
  const { overlay, setOverlay, user, setUser } = useReducer();
  const menu = [
    {
      name: "People",
      link: "People+ ",
      dropdown: [
        { name: "Faculty", link: "/People/Faculty" },
        { name: "Staff", link: "Staff" },
        { name: "PhD candidates", link: "/People/PhD-Students" },
        { name: "Visitors", link: "Visitors" },
      ],
    },
    {
      name: "Academics",
      link: "Academics+ ",
      dropdown: [
        { name: "Ph D", link: "PhD" },
        { name: "M Tech", link: "MTech" },
        { name: "B Tech", link: "BTech" },
        { name: "Non-Degree", link: "NonDegree" },
      ],
    },
    {
      name: "Research",
      link: "Research+ ",
      dropdown: [
        { name: "Publications", link: "Publications" },
        { name: "Projects", link: "Projects" },
      ],
    },
    { name: "Events", link: "Events+ ", dropdown: false },
    {
      name: "Placements",
      link: "Placements+ ",
      dropdown: [
        { name: "Industry", link: "Industry" },
        { name: "Academia", link: "Academia" },
      ],
    },
    {
      name: "Join US",
      link: "Join US+ ",
      dropdown: [
        { name: "Prospective faculty", link: "ProspectiveFaculty" },
        { name: "Student", link: "Student" },
      ],
    },
    {
      name: (
        <Cog6ToothIcon
          onClick={() => setOverlay({ ...overlay, visible: true })}
          className="w-5 h-5 my-auto text-gray-700 hover:bg-gray-100 rounded-full cursor-pointer"
        />
      ),
      link: "",
      dropdown: [
        {
          name: (
            <div
              onClick={() => setOverlay({ child: <Login />, visible: true })}
            >
              {!user ? "Login" : user.name}
            </div>
          ),
          link: "",
        },
        {
          name: user ? <div onClick={() => setUser(null)}>Logout</div> : "",
          link: "",
        },
      ],
    },
  ];
  return (
    <div className="left-0 bg-white fixed px-12 md:px-12 lg:px-36 w-full z-50 py-4 flex flex-row justify-between shadow-md">
      <Link to="/" className="flex flex-row">
        <img src={logo} alt="" className="w-12 h-12 my-auto" />
        <div className="flex flex-col ml-2">
          <h1 className="font-bold text-base">Mechcanical</h1>
          <h1 className="font-bold text-base -mt-2">Engineering</h1>
          <h1 className="text-xs">IIT Gandhinagar</h1>
        </div>
      </Link>
      <div className="my-auto md:my-0">
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden md:block w-full h-full md:w-auto"
          id="mobile-menu"
        >
          <div className="flex-col md:justify-center h-full md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            {menu.map((doc, i) => (
              <Link
                to={"pages/" + doc.link}
                key={`navbar${i}`}
                className={doc.dropdown ? "group  mt-4 pt-0.5" : " my-auto"}
              >
                <div className="bg-gray-600 cursor-pointer md:bg-transparent flex flex-row text-white pl-3 pr-4 py-2 md:text-gray-600 md:p-0 rounded focus:outline-none">
                  {doc.name}
                  {doc.dropdown && (
                    <svg
                      className="w-4 h-4 ml-1 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>

                {doc.dropdown && (
                  <div
                    id="dropdownNavbar"
                    className="absolute -ml-2 hidden group-hover:block bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-2"
                  >
                    <div
                      className="py-1 "
                      aria-labelledby="dropdownLargeButton"
                    >
                      {doc.dropdown.map((dic, j) => (
                        <Link
                          to={
                            dic.link
                              ? dic.link.split("/").length > 1
                                ? dic.link
                                : "pages/" + doc.link + dic.link
                              : null
                          }
                          key={`navbar.drop${i + "," + j}`}
                          href="#"
                          className="text-sm cursor-pointer px-4  hover:bg-gray-100 text-gray-700 block py-2"
                        >
                          {dic.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* <div className=" px-2 flex flex-row items-center">
        <h1 className="px-2 text-indigo-900">People</h1>
        <h1 className="px-2 text-indigo-900">Academics</h1>
        <h1 className="px-2 text-indigo-900">Research</h1>
        <h1 className="px-2 text-indigo-900">Events</h1>
        <h1 className="px-2 text-indigo-900">Placement</h1>
        <h1 className="px-2 text-indigo-900">Join us</h1>
      </div> */}
    </div>
  );
}

export default Navbar;
