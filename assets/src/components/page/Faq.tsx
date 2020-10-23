import React from 'react';

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function Faq({question, answer}: {question: string, answer: string}) {
  return (
    <>
      <div className="p-4 mb-2 border-b">
        <button className="flex w-full text-left">
          <span className="flex-grow font-semibold">
            {question}
          </span>
        </button>
        <p className="mt-1">
          {answer}
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
      question: "How do you pay for its costs?",
      answer: "We pay with our own money for now. If you want to support us, upgrade to a Pro account will compensate us best.",
    },
    {
      question: "Is this open source?",
      answer: "Yes it is!",
    },
    {
      question: "Who are behind this?",
      answer: "I am an one-man developer from Vietnam. Glad to meet you, too!",
    },
  ]

  return (
    <>
      <Navbar />
      <section className="relative flex items-center content-center justify-center pt-16 pb-32">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mt-10 mb-4 text-4xl text-center font-heading">Frequently Asked Questions</h2>
          { data.map(d => <Faq question={d.question} answer={d.answer} /> )}
        </div>
      </section>
      <Footer />
    </>
  )
}
