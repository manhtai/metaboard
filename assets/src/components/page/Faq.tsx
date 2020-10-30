import React from 'react';

import Navbar from "../common/Navbar";

type Faq = {
  question: string,
  answer: string,
}

function Faq(props: Faq) {
  return (
    <>
      <div className="p-4 mb-2 border-b">
        <div className="flex w-full text-left">
          <span className="flex-grow font-semibold text-blue-900">
            {props.question}
          </span>
        </div>
        <p className="mt-1 text-blue-800">
          {props.answer}
        </p>
      </div>
    </>
  )
}

export default function FaqPage() {
  const data = [
    {
      question: "Is this service really free?",
      answer: "Yes it is, for as long as you like.",
    },
    {
      question: "Is this open source?",
      answer: "Yes it is!",
    },
  ]

  return (
    <>
      <Navbar />
      <section className="relative flex items-center content-center justify-center pt-16 pb-32">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mt-10 mb-4 text-4xl text-center font-heading">Frequently Asked Questions</h2>
          { data.map(d => <Faq {...d} key={d.question} /> )}
        </div>
      </section>
    </>
  )
}
