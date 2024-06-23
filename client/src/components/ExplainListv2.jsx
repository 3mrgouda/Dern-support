import React from "react";
import networkImg from "../assets/explainv2/Network-Security.png";
import supportImg from "../assets/explainv2/support.jpg";
import backupImg from "../assets/explainv2/Data-Backup-and-Recovery.webp";
import Explainv2 from "./Explainv2";

export default function ExplainListv2() {
  return (
    <div className="container mx-auto px-4 my-28">
      <h1 className="text-4xl font-bold text-center mb-12">
        Welcome to
        <span className="text-red-600 border-b-2 border-black">
          Dern-Support
        </span>
      </h1>

      <Explainv2
        id="1"
        title="How does Dern-Support manage network security?"
        text="Dern-Support offers advanced network security solutions for businesses. Our services include setting up firewalls, monitoring network traffic, and responding to security incidents to ensure your network is protected against threats."
        image={networkImg}
      />
      <Explainv2
        id="2"
        title="Customer Support and Service"
        text="Our customer support team is available 24/7 to assist with any IT issues you may encounter. We offer remote support, on-site visits, and a helpdesk to ensure all your technical problems are resolved quickly."
        image={supportImg}
      />
      <Explainv2
        id="3"
        title="Data Backup and Recovery"
        text="Dern-Support provides robust data backup and recovery solutions. We ensure that your critical data is backed up regularly and can be recovered quickly in the event of data loss or system failure."
        image={backupImg}
      />
    </div>
  );
}
