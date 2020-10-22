import React from 'react'

import {
  faLock,
  faEnvelope,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Login() {
  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div className="container h-full px-4 mx-auto">
            <div className="flex items-center content-center justify-center h-full">
              <div className="w-full max-w-md">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words">
                  <h1 className="flex-auto p-2 text-3xl text-center">
                    Create your account
                  </h1>
                  <p className="text-center">
                    {"Metaboard is free and always will be!"}
                  </p>
                  <div className="flex-auto px-4 py-10 lg:px-10">
                    <form>
                      <div className="relative flex flex-row items-center content-center justify-center w-full mb-4">
                        <div className="flex-none px-4 py-3 text-gray-700 bg-gray-100 border-t border-b border-l border-gray-400 rounded-l-sm">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input
                          type="email"
                          className="flex-1 w-full px-3 py-3 text-gray-700 placeholder-gray-700 bg-white border border-gray-400 rounded-r-sm focus:outline-none focus:border-blue-500"
                          placeholder="Email"
                        />
                      </div>

                      <div className="relative flex flex-row items-center content-center justify-center w-full mb-4">
                        <div className="flex-none px-4 py-3 text-gray-700 bg-gray-100 border-t border-b border-l border-gray-400 rounded-l-sm">
                          <FontAwesomeIcon icon={faLock} />
                        </div>
                        <input
                          type="password"
                          className="flex-1 w-full px-3 py-3 text-gray-700 placeholder-gray-700 bg-white border border-gray-400 rounded-r-sm focus:outline-none focus:border-blue-500"
                          placeholder="Password"
                        />
                      </div>

                      { true && (
                        <div className="mb-4 text-sm text-red-500">
                          <FontAwesomeIcon icon={faExclamationTriangle} />
                              <span className="ml-1">Invalid</span>
                          </div>
                      )}

                      <div className="text-center">
                        <button
                          className="w-full px-6 py-3 mb-1 mr-1 font-bold text-white bg-blue-600 rounded-full outline-none active:bg-blue-500 hover:bg-blue-700 focus:outline-none"
                          type="button"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                  <p className="text-center">
                    {"Already have an account?"}
                    <Link
                      to="/login"
                      className="ml-1 font-bold text-blue-600 hover:text-blue-700"
                    >
                      Log In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
