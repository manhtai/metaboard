import React from "react";

import {
  faBars,
  faChevronLeft,
  faShareSquare,
  faCheckCircle,
  faRocket,
  faUser,
  faSync,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import {useAuth} from '../auth/AuthProvider';
import {useBoards} from './BoardProvider';


type Props = {
  type?: string;
}


export default function Navbar(props: Props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const auth = useAuth()
  const { type } = props
  const { saving, errorMessage, board } = useBoards()

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
              "lg:flex flex-grow items-center lg:bg-transparent text-sm" +
              (navbarOpen ? " block rounded" : " hidden")
            }
          >
            <ul className="flex flex-col mr-auto list-none lg:flex-row hover:text-blue-600">
              <li className="py-4 lg:py-2">
                <Link
                  className="py-4 lg:py-2"
                  to={"/boards"}
                >
                  <FontAwesomeIcon
                    icon={faRocket}
                    className="mr-1"
                  />
                  Boards
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
            {
              type === "list" ? (
              <li className="py-4 cursor-pointer lg:py-2 hover:text-blue-600">
                <Link to={"/me"}>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-1"
                    />
                    <span className="mr-2">{auth.tokens && auth.tokens.email}</span>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-white uppercase bg-blue-500 rounded shadow-xs last:mr-0">
                      free
                    </span>
                </Link>
              </li>
            ) : type === "me" ? (
              <li className="py-4 cursor-pointer lg:py-2 hover:text-blue-600">
                <Link to={"/boards"}>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="mr-1"
                    />
                    Home
                </Link>
              </li>
            ) : (
            <>
              <li className="py-4 mr-8 cursor-pointer lg:py-2 hover:text-blue-600">
                <Link to={"/boards"}>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="mr-1"
                    />
                    Home
                </Link>
              </li>
              <li className="py-4 mr-8 cursor-pointer lg:py-2 hover:text-blue-600">
                <Link target={"_blank"} to={board ? "/s/" + board.code : "/boards"}>
                  <FontAwesomeIcon
                    icon={faShareSquare}
                    className="mr-1"
                  />
                  Share
                </Link>
              </li>

              { !saving && !errorMessage ? <li className="w-16 py-4 text-center text-green-600 lg:py-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-1"
                  />
                  Saved
              </li> : null}

              { saving && <li className="w-16 py-4 text-center text-blue-600 lg:py-2">
                  <FontAwesomeIcon
                    icon={faSync}
                    spin={true}
                    className="mr-1"
                  />
              </li>}

              { !saving && errorMessage ? <li className="w-16 py-4 text-center text-red-600 lg:py-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mr-1"
                  />
                  Error
              </li>: null}
            </>)
            }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


