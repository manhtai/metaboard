import React from "react";

import {
  faBars,
  faSignInAlt,
  faRocket,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import {useAuth} from '../auth/AuthProvider';


export default function Navbar() {
  const auth = useAuth();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav
        className={
            "top-0 bg-blue-500 shadow-sm absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-no-wrap"
              to="/"
            >
              Metaboard
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="text-white"
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
          >
            <ul className="flex flex-col mr-auto list-none lg:flex-row">
              <li className="flex items-center">
                <Link
                  className="flex items-center px-3 py-4 text-sm font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
                  to={"/faq"}
                >
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="mr-1"
                  />
                  Faq
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="flex items-center">
                <Link to={!auth.isAuthenticated ? "/login" : "/boards"}>
                  <button
                    className={
                      "bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-md hover:bg-gray-200 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                    }
                    type="button"
                  >
                      <FontAwesomeIcon
                        icon={!auth.isAuthenticated ? faSignInAlt : faRocket}
                        className="mr-1"
                      /> {!auth.isAuthenticated ? "Log In" : "Your Boards"}
                    </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

