import React from "react";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Link } from "react-router-dom"
import Leaderboard from '../../img/leaderboard.svg'
import Counter from '../../img/counter.svg'

import {
  faStopwatch,
  faGamepad,
  faRocket,
  faHandPeace,
  faGlobeAfrica,
  faShare,
  faPlus,
  faPoll,
  faListOl,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative flex items-center content-center justify-center pt-16 pb-32"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1533237264985-ee62f6d342bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80')"
              }}>
            <span id="blackOverlay" className="absolute w-full h-full bg-black opacity-75"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 ml-auto mr-auto text-white lg:w-6/12">
                  <div className="text-center">
                    <h1 className="text-5xl font-semibold">
                      Welcome to Metaboard!
                    </h1>
                    <p className="mt-4 text-2xl text-white">
                      Create dead simple real-time boards for FREE!
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 -mt-24 bg-gray-300">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-blue-500 rounded-full shadow-lg">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <h6 className="text-xl font-semibold">Simple</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Clean interface without hassle
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 text-center md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-yellow-500 rounded-full shadow-lg">
                      <FontAwesomeIcon icon={faGlobeAfrica} />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Live
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Always up to date, in real time
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 text-center lg:pt-6 md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-green-500 rounded-full shadow-lg">
                      <FontAwesomeIcon icon={faHandPeace} />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Free
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Forever!
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center lg:mt-32 sm:mt-20">
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <h3 className="mb-2 text-3xl font-semibold leading-normal">
                  Keep track of group leaderboards
                </h3>
                <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
                  Easy to show off everyone's progress. In real time.
                </p>
              </div>

              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white bg-blue-600 rounded-lg shadow-lg">
                  <img
                    alt="..."
                    src={Leaderboard}
                    className="w-full p-10 align-middle bg-gray-200 rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 block w-full"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Suitable for classes, colleagues, friends and families
                      to keep informed about one another.
                    </h4>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4 pt-4 mx-auto lg:pb-16">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                <img
                  alt="..."
                  className="max-w-full p-10 mb-10 bg-gray-200 rounded-lg shadow-lg"
                  src={Counter}
                />
              </div>
              <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    You keep gaining score, we keep showing it
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Get the game on!
                  </p>

                  <ul className="mt-6 list-none">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div className="text-center">
                          <span className="inline-block w-8 px-2 py-1 mr-3 text-xs font-semibold text-blue-600 uppercase bg-blue-200 rounded-full">
                            <FontAwesomeIcon icon={faListOl} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Team Leaderboards
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div className="text-center">
                          <span className="inline-block w-8 px-2 py-1 mr-3 text-xs font-semibold text-blue-600 uppercase bg-blue-200 rounded-full">
                            <FontAwesomeIcon icon={faGamepad} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Game Scoreboards
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div className="text-center">
                          <span className="inline-block w-8 px-2 py-1 mr-3 text-xs font-semibold text-blue-600 uppercase bg-blue-200 rounded-full">
                            <FontAwesomeIcon icon={faStopwatch} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Live Counters
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="relative block pb-20 bg-gray-800">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container px-4 pt-10 pb-12 mx-auto">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold text-white">
                  Try it now!
                </h2>
                <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
                  Just three simple steps
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-12">
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                  <FontAwesomeIcon icon={faPlus} className="text-xl" />
                </div>
                <h6 className="mt-5 text-xl font-semibold text-white">
                  Create
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Choose a board type for your game or event.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                  <FontAwesomeIcon icon={faPoll} className="text-xl" />
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Input
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Manually input score, import batch, or call a simple API.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                  <FontAwesomeIcon icon={faShare} className="text-xl" />
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Share
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Grab the link and share it to your peers!
                </p>
              </div>
            </div>
            <div className="flex content-center justify-center mt-20">
              <Link to="/signup">
                <button
                  className={
                    "bg-blue-600 text-white md:text-xl font-bold uppercase px-8 py-4 rounded-full shadow hover:bg-blue-700 active:bg-blue-500 outline-none focus:outline-none"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <FontAwesomeIcon
                    icon={faRocket}
                    className="mr-1"
                  /> Get started for Free!
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

