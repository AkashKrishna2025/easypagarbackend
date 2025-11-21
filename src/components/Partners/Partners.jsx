// Partner.js
import React, { useState, useEffect } from "react";
import "./Partners.css";
import { useForm } from "@formspree/react";
import partners from "../../assets/partners.webp";

const Partner = () => {
  const [state, handleSubmit] = useForm("mdovkgeq");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div
      className="partner-container card bg-custom-bg mt-10 mb-10 scroll-mt-[100px]"
      id="partners"
    >
      <div className="partner-content text-xl font-bold my-10 leading-[3rem] text-center text-text-secondary">
        <h2 className="px-10 partner-title text-xl">
          Empowering Success Together:
        </h2>
        <h3 className="partner-subtitle text-lg mt-10 mb-6 text-customPurple sm:whitespace-nowrap sm:ml-10">
          Join the Easy Pagar Channel Partner Network!
        </h3>
        <button
          type="button"
          className="partner-button bg-primary text-white text-xs py-4 px-4"
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now
        </button>
      </div>

      <div className="partner-image min-h-[400px] flex justify-center">
        <img
          src={partners}
          alt="Easy Pagar Partnership"
          width={600}
          height={400}
           loading="lazy"
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 w-full">
          <div className="bg-white p-10 rounded-lg shadow-lg relative w-[400px] min-h-[200px]">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              X
            </button>
            <h2 className="text-md font-bold mb-10 text-primary">
              Become a Partner
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  pattern="^[A-Za-z]+( [A-Za-z]+)*$"
                  required
                  className="block w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <label
                  htmlFor="name"
                  className="text-xs absolute left-2 -top-2.5 text-gray-500 transition-all duration-200 transform scale-75 origin-top-left"
                >
                  Name
                </label>
              </div>

              <div className="relative mb-6">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  pattern="^[6-9][0-9]{9}$"
                  required
                  className="block w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <label
                  htmlFor="mobile"
                  className="text-xs absolute left-2 -top-2.5 text-gray-500 transition-all duration-200 transform scale-75 origin-top-left"
                >
                  Mobile
                </label>
              </div>

              <div className="relative mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <label
                  htmlFor="email"
                  className="text-xs absolute left-2 -top-2.5 text-gray-500 transition-all duration-200 transform scale-75 origin-top-left"
                >
                  Email
                </label>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  id="place"
                  name="place"
                  pattern="^[A-Za-z]+( [A-Za-z]+)*$"
                  required
                  className="block w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <label
                  htmlFor="place"
                  className="text-xs absolute left-2 -top-2.5 text-gray-500 transition-all duration-200 transform scale-75 origin-top-left"
                >
                  Place
                </label>
              </div>

              <div className="relative mb-6">
                <textarea
                  id="description"
                  name="description"
                  required
                  className="block w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 min-h-[50px]"
                ></textarea>
                <label
                  htmlFor="description"
                  className="text-xs absolute left-2 -top-2.5 text-gray-500 transition-all duration-200 transform scale-75 origin-top-left"
                >
                  Description
                </label>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>

              {state.succeeded && (
                <p className="text-green-600 mt-4 text-xs leading-6">
                  Your enquiry has been submitted successfully. Our executive
                  will get back to you shortly
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner;
