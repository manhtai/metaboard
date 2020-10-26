import React from 'react'
import {
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Loading() {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-white opacity-75">
      <span
        className="relative block mx-auto my-auto text-5xl text-blue-500 opacity-75"
      >
        <FontAwesomeIcon icon={faCircleNotch} spin={true} />
      </span>
    </div>
  )
}
