import React from 'react';

import LeaderBoard from "./LeaderBoard";


export default function BoardSharing() {
  const data = {
    id: "abcd",
    name: "Class of 2020 leaderboard very long name without and end, now what",
    code: "2020class",
    type: "leaderboard",
    updated_at: 1603460198000,
    created_at: 1603460198000,
    items: [
      {
        id: "0",
        index: 0,
        name: "Noal Lauren",
        score: 150,
      },
      {
        id: "1",
        index: 1,
        name: "David Ronaldo",
        score: 100,
      },
      {
        id: "2",
        index: 2,
        name: "David Ronaldo",
        score: 99,
      },
      {
        id: "3",
        index: 3,
        name: "David Ronaldo",
        score: 98,
      },
      {
        id: "4",
        index: 4,
        name: "David Ronaldo",
        score: 97,
      },
      {
        id: "5",
        index: 5,
        name: "David Ronaldo",
        score: 96,
      },
      {
        id: "6",
        index: 6,
        name: "David Ronaldo",
        score: 95,
      },
      {
        id: "7",
        index: 7,
        name: "David Ronaldo",
        score: 94,
      },
      {
        id: "8",
        index: 8,
        name: "David Ronaldo",
        score: 93,
      },
      {
        id: "9",
        index: 9,
        name: "David Ronaldo",
        score: 92,
      },
      {
        id: "10",
        index: 10,
        name: "David Ronaldo",
        score: 91,
      },
      {
        id: "323",
        index: 323,
        name: "Golia Beckham",
        score: 50,
      },
    ],
    max_score: 150,
  };

  return (
    <>
      <LeaderBoard {...data} />
    </>
  )
}
