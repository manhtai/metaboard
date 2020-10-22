import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-gray-300">
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
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="mt-0 mb-2 text-lg text-gray-700">
                Drop us an email at hi@metaretro.com
              </h5>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full mt-4 ml-auto lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold text-gray-600 uppercase">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/">About Us
                      </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/">Team
                      </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/">Blog
                      </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/">Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full mt-4 lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold text-gray-600 uppercase">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/">FAQ
                    </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/">Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/">Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/">Contact Us
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-gray-600">
                Copyright &copy; {new Date().getFullYear()}{" "}Metaboard
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

