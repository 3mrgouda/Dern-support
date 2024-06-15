import React from "react";
import Explain from "./Explain";
import image1 from "../assets/banner/3.jpg";
import image2 from "../assets/banner/1.jpg";
import image3 from "../assets/banner/2.jpeg";

const ExplainList = () => {
  return (
    <div className="container mx-auto my-28">
      <Explain
        id="1"
        title="How does Dern-Support resolve computer system issues?"
        text="Dern-Support is an IT technical support company that repairs computer systems for businesses and individual customers. Our skilled technicians handle a wide range of issues, including hardware repairs, software troubleshooting, and system optimization. Whether it's a malfunctioning printer, a slow computer, or Wi-Fi connectivity problems, we've got you covered."
        image={image1}
      />
      <Explain
        id="2"
        title="What services does Dern-Support offer?"
        text="At Dern-Support, we provide comprehensive support for printers, computers, and Wi-Fi networks. Our services include diagnosing and fixing hardware issues, setting up and configuring software, and ensuring seamless connectivity. We pride ourselves on efficient problem-solving and personalized assistance."
        image={image2}
      />
      <Explain
        id="3"
        title="Why choose Dern-Support for your IT needs?"
        text="Customers choose Dern-Support because of our expertise, quick response times, and commitment to customer satisfaction. Whether it's a printer glitch, a computer crash, or Wi-Fi troubles, we're dedicated to keeping your systems running smoothly."
        image={image3}
      />
    </div>
  );
};

export default ExplainList;
