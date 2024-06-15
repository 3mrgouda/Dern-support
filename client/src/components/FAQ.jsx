import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const questions = [
  {
    question: "What is BerimboloSecurity?",
    answer:
      "BerimboloSecurity is a comprehensive security solution that uses Machine Learning and AI to detect anomalies and intrusions in your network.",
  },
  {
    question: "How does it work?",
    answer:
      "Our system is trained on real-time network traffic data from our network of sensors. It can detect unusual traffic patterns, network scans, and other suspicious activity.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started with BerimboloSecurity is easy. Simply sign up on our website, and follow the setup instructions to integrate our sensors with your network.",
  },
];

export default function FAQ() {
  const [openStates, setOpenStates] = useState(
    Array(questions.length).fill(false)
  );

  const handleClick = (index) => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = !openStates[index];
    setOpenStates(updatedOpenStates);
  };

  return (
    <div className="container mx-auto px-4 mb-10">
      <h2
        data-aos="fade-up"
        className="max-[350px]:text-lg font-bold text-2xl font-poppins text-center text-red-500 mb-10"
      >
        Frequently asked questions about{" "}
        <span className="border-b-2 border-black">
          Dern
        
        <span className="text-black">Support</span></span>
      </h2>
      {questions.map((item, i) => (
        <div data-aos="fade-up" key={i} className="mb-4">
          <div className="question  flex items-center justify-between p-4 bg-white rounded-lg shadow-md  dark:text-white">
            <h4 className="font-semibold text-gray-900">{item.question}</h4>
            <button
              onClick={() => handleClick(i)}
              className="focus:outline-none text-gray-900"
            >
              {openStates[i] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <div
            className={`answer ${
              openStates[i] ? "block" : "hidden"
            } p-4 bg-gray-50  text-gray-700  rounded-lg shadow-inner mt-2`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
