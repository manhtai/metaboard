import React from "react";

import {
  faBars,
  faChevronLeft,
  faShareSquare,
  faCloudDownloadAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import {useAuth} from '../auth/AuthProvider';


export default function Navbar({ type }: { type?: string }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const auth = useAuth()

  return (
    <>
      <nav
        className={
            "top-0 bg-white border-b border-gray-300 shadow-sm absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3"
        }
      >
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-blue-600 uppercase whitespace-no-wrap"
              to="/"
            >
              Metaboard
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none text-blue-600 bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon
                icon={faBars}
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-transparent" +
              (navbarOpen ? " block rounded" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
            {
              type === "list" ? (
              <li className="flex items-center cursor-pointer">
                <Link to={"/me"}>
                    <span className="mr-2 font-semibold">{auth.tokens && auth.tokens.email}</span>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-white uppercase bg-blue-500 rounded shadow-xs last:mr-0">
                      free
                    </span>
                </Link>
              </li>
              ) : (
            <>
              <li className="flex items-center mr-8 cursor-pointer hover:text-blue-600">
                <Link to={"/boards"}>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="mr-1"
                    />
                    Home
                </Link>
              </li>
              <li className="flex items-center mr-8 cursor-pointer hover:text-blue-600">
                  <FontAwesomeIcon
                    icon={faShareSquare}
                    className="mr-1"
                  />
                  Share
              </li>
              <li className="flex items-center mr-8 cursor-pointer hover:text-blue-600">
                  <FontAwesomeIcon
                    icon={faCloudDownloadAlt}
                    className="mr-1"
                  />
                  Data
              </li>
              <li className="flex items-center mr-8 text-green-600">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-1"
                  />
                  Saved
              </li>
              <li className="flex items-center text-red-600">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-1"
                  />
                  Error
              </li>
            </>)
            }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


