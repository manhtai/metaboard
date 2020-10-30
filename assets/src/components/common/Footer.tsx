import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-gray-300">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="mt-0 mb-2 text-lg text-gray-700">
                Drop us an email at <a href="mailto:hi@metaboard.net">hi@metaboard.net</a>
              </h5>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full mt-4 ml-auto lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold text-gray-600 uppercase">
                    Company
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/faq">FAQ
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
                    Product
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href="/">Security
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

