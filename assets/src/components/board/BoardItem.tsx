import React from 'react'
import {formatDateAgo} from "../../util";
import {Link} from 'react-router-dom';
import {Board} from "../../types"


export default function BoardItem(props: Board) {

  return (
    <>
      <Link
        className="block px-6 py-3 mx-3 my-4 bg-gray-100 rounded-lg shadow cursor-pointer hover:shadow-lg hover:bg-gray-200"
        to={"/boards/" + props.id}
      >
        <div className="flex flex-row justify-between">
          <div className="w-7/12 md:w-10/12 lg:w-10/12">
            <h2 className="overflow-hidden text-xl font-semibold truncate">{props.name}</h2>
          </div>
          <div className="self-center px-2 font-semibold text-white capitalize bg-blue-600 shadow-inner rounded-2xl">
            {props.type}
          </div>
        </div>

        <div className="w-full mb-2 text-xs text-gray-700 uppercase truncate">
          {props.code}
        </div>

        <div className="flex flex-row flex-wrap justify-between my-1">
          <div className="text-xs text-gray-700">
            Updated <span>{formatDateAgo(props.updated_at)}</span>
          </div>
        </div>
      </Link>
    </>
  )
};
