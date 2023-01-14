import React from "react";
import logo from "../logo/iitgn.png";
function Navbar() {
  const menu = [
    {
      name: "People",
      link: "",
      dropdown: [
        { name: "Faculty", link: "" },
        { name: "Staff", link: "" },
        { name: "PhD candidates", link: "" },
        { name: "Visitors", link: "" },
      ],
    },
    {
      name: "Academics",
      link: "",
      dropdown: [
        { name: "Ph D", link: "" },
        { name: "M Tech", link: "" },
        { name: "B Tech", link: "" },
        { name: "Non-Degree", link: "" },
      ],
    },
    {
      name: "Research",
      link: "",
      dropdown: [
        { name: "Publications", link: "" },
        { name: "Projects", link: "" },
      ],
    },
    { name: "Events", link: "", dropdown: false },
    {
      name: "Placements",
      link: "",
      dropdown: [
        { name: "Industry", link: "" },
        { name: "Academia", link: "" },
      ],
    },
    {
      name: "Join US",
      link: "",
      dropdown: [
        { name: "Prospective faculty", link: "" },
        { name: "Student", link: "" },
      ],
    },
  ];
  return (
    <div className="left-0 bg-white fixed px-36 w-full z-50 py-4 flex flex-row justify-between shadow-md">
      <div className="flex flex-row">
        <img src={logo} alt="" className="w-12 h-12 my-auto" />
        <div className="flex flex-col ml-2">
          <h1 className="font-bold text-base">Mechcanical</h1>
          <h1 className="font-bold text-base -mt-2">Engineering</h1>
          <h1 className="text-xs">IIT Gandhinagar</h1>
        </div>
      </div>
      <div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden md:block w-full h-full md:w-auto" id="mobile-menu">
          <div class="flex-col md:justify-center h-full md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            {menu.map((doc, i) => (
              <div
                key={`navbar${i}`}
                className={doc.dropdown ? "group mt-4 pt-0.5" : " my-auto"}
              >
                <div class="bg-gray-600 cursor-pointer md:bg-transparent flex flex-row text-white pl-3 pr-4 py-2 md:text-gray-600 md:p-0 rounded focus:outline-none">
                  {doc.name}
                  {doc.dropdown && (
                    <svg
                      class="w-4 h-4 ml-1 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>

                {doc.dropdown && (
                  <div
                    id="dropdownNavbar"
                    class="absolute -ml-2 hidden group-hover:block bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-2"
                  >
                    <div class="py-1 " aria-labelledby="dropdownLargeButton">
                      {doc.dropdown.map((dic, j) => (
                        <div
                          key={`navbar.drop${i + "," + j}`}
                          href="#"
                          class="text-sm cursor-pointer px-4  hover:bg-gray-100 text-gray-700 block py-2"
                        >
                          {dic.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* <div className="group px-4 mt-4">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
              >
                Dropdown
                <svg
                  class="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                class="absolute px-4 -ml-2 hidden group-hover:block bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4"
              >
                <ul class="py-1 " aria-labelledby="dropdownLargeButton">
                  <li>
                    <div
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block py-2"
                    >
                      Dashboard
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div> */}
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
