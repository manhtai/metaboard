import React from 'react';

import Navbar from "./BoardNav";


export default function BoardDetail() {
  const data = {
    id: "abcd",
    name: "Class of 2020 leaderboard very long name without and end, now what",
    code: "2020class",
    type: "leaderboard",
    updated_at: 1603460198000,
    created_at: 1603460198,
  };

  return (
    <>
      <Navbar />
      <section className="relative flex items-center content-center justify-center pt-8 pb-16">
        <div className="w-full mt-16 max-w-screen-md">
          <div>
            { data.name }
          </div>
        </div>
      </section>
    </>
  )
}

