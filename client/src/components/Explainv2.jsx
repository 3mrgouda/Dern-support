import React from "react";

const Explainv2 = ({ id, title, text, image }) => {
  return (
    <div className={`container mx-auto  my-28 flex flex-col  items-center p-5`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-6 mx-auto">
        {title}
      </h2>
      <div
        className={`flex flex-col-reverse  justify-center items-center lg:gap-8 *: ${
          id === "2" ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Text Section */}
        <div className="lg:w-1/2 lg:order-1 flex flex-col justify-center items-center lg:items-start  lg:px-0">
          <p className="text-left text-lg lg:text-xl leading-loose tracking-[2px]">
            {text}
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 lg:order-2">
          <img
            src={image}
            alt="Network Security"
            className="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  );
};

export default Explainv2;
