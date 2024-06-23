import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const questions = [
  {
    question: "What types of support does Dern-Support offer?",
    answer:
      "Dern-Support provides on-site technical support for businesses and offers repair services for individual customers. We specialize in diagnosing and troubleshooting computer systems.",
  },
  {
    question: "How do I submit a support request?",
    answer:
      "You can submit a support request through our website or by contacting our customer service. We will schedule a technician to assist you at your location.",
  },
  {
    question: "What should I do if I need additional services beyond the original request?",
    answer:
      "If additional services are required during the on-site visit, our technician will inform you about the options available and any extra charges that may apply.",
  },
  {
    question: "Can I get remote support for my computer issues?",
    answer:
      "Yes, Dern-Support offers remote assistance through our DernSupport Now! online service. An agent can securely connect to your computer to troubleshoot issues in real-time.",
  },
  {
    question: "How can I manage my customer account with Dern-Support?",
    answer:
      "You can manage your customer account by logging into our website. From there, you can update your contact information, view service history, and more.",
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
      <h2 className="max-w-3xl text-2xl font-bold text-center text-red-500 mb-10">
        Frequently Asked Questions about{" "}
        <span className="border-b-2 border-black">Dern-Support</span>
      </h2>
      {questions.map((item, i) => (
        <div key={i} className="mb-4">
          <div className="question flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
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
            } p-4 bg-gray-50 text-gray-700 rounded-lg shadow-inner mt-2`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
