import {
  AcademicCapIcon,
  BeakerIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  LinkIcon,
  UsersIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import useReducer from "../hooks/reducerHook";
import logo from "../logo/iitgn.png";
import Login from "./Login";
import Register from "./Register";

import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const LogReg = () => {
  let [categories] = useState({
    Login: [
      {
        id: 1,
        comp: <Login />,
      },
    ],
    Register: [
      {
        id: 1,
        comp: <Register />,
      },
    ],
  });

  return (
    <div className="w-full max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-t-xl bg-indigo-200/40 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-600",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : " text-gray-800 hover:bg-white/[0.12] "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {posts[0].comp}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
function Navbar() {
  const { setOverlay, user, setUser } = useReducer();
  var x = window.matchMedia("(min-width: 700px)");
  const iconTheme =
    "w-4 my-auto mr-1 text-gray-400 group-hover:text-indigo-600";
  const menu = [
    {
      name: "People",
      icon: <UsersIcon className={iconTheme} />,
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
      icon: <AcademicCapIcon className={iconTheme} />,
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
      icon: <BeakerIcon className={iconTheme} />,
      link: "Research+ ",
      dropdown: [
        { name: "Publications", link: "Publications" },
        // { name: "Projects", link: "Projects" },
      ],
    },
    {
      name: "Events",
      icon: <CalendarDaysIcon className={iconTheme} />,
      link: "Events+ ",
      dropdown: false,
    },
    {
      name: "Placements",
      icon: <BriefcaseIcon className={iconTheme} />,
      link: "Placements+ ",
      dropdown: [
        { name: "Industry", link: "/Placements/Industry" },
        { name: "Academia", link: "Academia" },
      ],
    },
    {
      name: "Join US",
      icon: <LinkIcon className={iconTheme} />,
      link: "Join US+ ",
      dropdown: [
        { name: "Prospective faculty", link: "ProspectiveFaculty" },
        { name: "Student", link: "Student" },
      ],
    },
    {
      name: " ",
      link: "",
      icon: <Cog6ToothIcon className={iconTheme} />,
      dropdown: [
        {
          name: (
            <div
              className="w-full"
              onClick={() => setOverlay({ child: <LogReg />, visible: true })}
            >
              {!user ? "Login" : user.name}
            </div>
          ),
          link: "",
        },

        {
          name: user ? (
            <div className="w-full" onClick={() => setUser(null)}>
              Logout
            </div>
          ) : (
            ""
          ),
          link: "",
        },
      ],
    },
  ];
  const WebMenu = () => {
    return (
      <div className="flex-col md:justify-center h-full md:flex-row flex md:space-x-2 my-auto md:text-sm md:font-medium">
        {menu.map((doc, i) => (
          <Menu
            key={`webmenu.${i}`}
            as="div"
            className="relative inline-block text-left p-1 rounded-lg hover:bg-indigo-50"
          >
            <div>
              <Menu.Button className="inline-flex group w-full justify-center rounded-md  px-1 py-2 text-sm font-medium text-gray-700 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {doc.icon}
                {doc.name}
                {doc.dropdown && (
                  <ChevronDownIcon
                    className="ml-0.5 -mr-1 h-5 w-5 text-indigo-300 group-hover:text-indigo-500"
                    aria-hidden="true"
                  />
                )}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {doc.dropdown &&
                    doc.dropdown.map((dic, j) => (
                      <Menu.Item key={`navbar.drop${i + "," + j}`}>
                        {({ active }) => (
                          <Link
                            to={
                              dic.link
                                ? dic.link.split("/").length > 1
                                  ? dic.link
                                  : "pages/" + doc.link + dic.link
                                : null
                            }
                            href="#"
                            className="flex flex-row text-sm cursor-pointer px-4  hover:bg-gray-100 text-gray-700 py-2"
                          >
                            {dic.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ))}
      </div>
    );
  };
  const MobileMenu = () => {
    return (
      <Menu
        as="div"
        className="relative inline-block text-left p-1 rounded-lg hover:bg-indigo-50"
      >
        <div>
          <Menu.Button className="inline-flex group w-full justify-center rounded-md  px-1 py-2 text-sm font-medium text-gray-700 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {menu.map((doc, i) => (
              <Disclosure key={`mobile.menu.${i}`}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full group justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-indigo-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <h1 className="flex flex-row gap-2 p-1">
                        {doc.icon}
                        {doc.name}
                      </h1>
                      {doc.dropdown ? (
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-gray-500`}
                        />
                      ) : (
                        <div></div>
                      )}
                    </Disclosure.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Disclosure.Panel className="px-1 pb-2 text-sm text-gray-500 ">
                        <div className="px-1 py-1 ">
                          {doc.dropdown &&
                            doc.dropdown.map((dic, j) => (
                              <Menu.Item key={`mob.navbar.drop${i + "," + j}`}>
                                {({ active }) => (
                                  <Link
                                    to={
                                      dic.link
                                        ? dic.link.split("/").length > 1
                                          ? dic.link
                                          : "pages/" + doc.link + dic.link
                                        : null
                                    }
                                    href="#"
                                    className="flex flex-row text-sm cursor-pointer px-4 rounded-md overflow-hidden hover:bg-gray-100 text-gray-700 py-2"
                                  >
                                    {dic.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };
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
      {x.matches ? <WebMenu /> : <MobileMenu />}
      {/* <div className="my-auto md:my-0">
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
      </div> */}
    </div>
  );
}

export default Navbar;
