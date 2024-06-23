import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import supportImg from "../../assets/support.jpg";
import { GiCheckMark } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { useAuth } from "../../contexts/auth";
import Loading from "../../components/Loading";

export default function ServiceByID() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [service, setService] = useState({});
  const email = localStorage.getItem("Email");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchServiceById() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/services/${id}`
        );
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchServiceById();
  }, [id]);

  const { user } = useAuth();

  const request = () => {
    if (user) {
      Swal.fire({
        title: "Thank you for choosing DernSupport",
        text: `We will contact you on: ${email}`,
        icon: "success",
      });
    } else {
      navigate("/login");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-full w-4/5 mx-auto my-16 p-8 bg-white rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="lg:w-1/2">
          <img
            className="w-full h-auto rounded-lg"
            src={supportImg}
            alt="Support Services"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col gap-5">
          <h2 className="text-3xl font-bold mb-4">
            We are always at your service
          </h2>
          <p className="text-xl text-gray-700 mb-6 flex items-center justify-center lg:justify-start">
            Price: ${service.price}
            <span className="ml-4 flex items-center">
              <AiFillStar className="text-yellow-500" />
              <span className="ml-2">{service.rate}/10</span>
            </span>
          </p>
          <ul className="text-lg text-gray-600 space-y-10">
            <li className="flex items-center">
              <GiCheckMark className="text-green-500 mr-2" /> Diagnose &
              troubleshoot issues
            </li>
            <li className="flex items-center">
              <GiCheckMark className="text-green-500 mr-2" /> Additional onsite
              services may incur extra charges
            </li>
            <li className="flex items-center">
              <GiCheckMark className="text-green-500 mr-2" /> Instant support
              available via DernSupport Now! online assistance
            </li>
          </ul>
          <button
            onClick={request}
            className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600 transition-colors duration-300"
          >
            Add request
          </button>
        </div>
      </div>
      <div className="serviceInformation mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            className="w-full lg:w-1/2 h-auto rounded-lg"
            src={service.img}
            alt={service.name}
          />
          <p className="w-full lg:w-1/2 text-left text-lg text-gray-700">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
