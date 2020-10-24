import React from 'react';

import Navbar from "../board/BoardNav";
import {useAuth} from "./AuthProvider"

import {
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Me() {
  const auth = useAuth()

  return (
    <>
      <Navbar type={"list"} />
      <section className="container relative flex items-center content-center justify-center pt-8 pb-16 mx-auto">
        <div className="w-full mt-16 max-w-screen-md">
          <div className="block px-6 py-3 mx-3 my-4 bg-blue-100 rounded-lg shadow">
            <div className="mb-2">
              <span className="inline-block w-16">
                Email:
              </span>
              <span className="font-bold break-words">
                {auth.tokens && auth.tokens.email}
              </span>
            </div>
            <div>
              <span className="inline-block w-16">
                Plan:
              </span>
              <span className="px-2 py-1 text-xs font-semibold text-white uppercase break-words bg-blue-500 rounded shadow-xs last:mr-0">
                free
              </span>
            </div>
          </div>

          <span
            className="inline-block px-6 mx-3 mt-16 cursor-pointer hover:opacity-75"
            onClick={auth.logout}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
            /> Log Out
          </span>
        </div>
      </section>
    </>
  )
}
