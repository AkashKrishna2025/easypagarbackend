import React from 'react';
import mwb from '../../assets/mwblogo.png';
import logo from '../../assets/easylogo.png';
import { IoMail } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; 
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const nav = useNavigate();

  return (
    <div className="w-full bg-custom-bg text-black grid grid-cols-2  max-sm:grid-cols-1 text-center justify-between p-4 py-10 gap-10 ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-500 font-medium text-xs leading-10 max-w-[350px]">
          CTS 122/141A, W B Plaza, New Cotton Market, Opp Traffic Police Station, Hubli, Dharwad, Karnataka, 580029
        </p>
        <p className="text-gray-500 font-medium text-xs flex gap-2 items-center hover:underline cursor-pointer">
          <IoMail className="w-4 h-4" />
          <a href="mailto:reachus@wbtechindia.com"  className="text-xs leading-10">reachus@wbtechindia.com</a>
        </p>
        <div className="flex gap-4 mt-4">
     <p className='text-gray-500 text-xs mt-1'>Follow us on</p>
<a
    href="https://www.instagram.com/easy_pagar/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:underline"
  >
    <FaInstagram className="w-6 h-6" style={{ color: 'rgb(30, 58, 138)' }}/>
  </a>
  <a
    href="https://www.linkedin.com/company/easy-pagar/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:underline"
  >
    <FaLinkedin className="w-6 h-6" style={{ color: 'rgb(30, 58, 138)' }}/>
  </a>
  <a
    href="https://www.facebook.com/Easypagars" // Replace with your actual Facebook page link
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:underline"
  >
    <FaFacebook className="w-6 h-6"  style={{ color: 'rgb(30, 58, 138)' }} />
  </a>

  </div>
      </div>
      <div className="flex flex-col items-center  text-sm gap-2">
        <div className="w-full flex justify-center divide-x-2 ">
          <div className="w-12 pr-2">
            <img src={logo} alt="Easy Pagar logo" className="w-12 " />
          </div>
          <div className="w-12 pl-2">
            <img src={mwb} alt="mwb logo" className="w-12 " />
          </div>
        </div>
        <p className="text-gray-500 font-medium text-xs leading-10">
          An app by{" "}
          <a
            href="https://wbtechindia.com/#/"
            className="hover:underline text-teal-600 text-xs leading-10 "
            target="_blank"
          >
            MWB Technologies India Pvt Ltd.
          </a>
        </p>
        <p className='text-xs text-gray-500'>  © {year} MWB Technologies India Pvt Ltd. All rights reserved. </p>
        <div className='flex  items-center  text-sm gap-2 leading-10'>
        <a
          onClick={() => {
            nav("/privacy");
          }}
          className="underline cursor-pointer text-xs leading-10 text-gray-500"
        >
          Privacy Policy
        </a>
        <a
          onClick={() => {
            nav("/terms");
          }}
          className="text-xs underline cursor-pointer leading-10 text-gray-500"
        >
          Terms and Conditions 
        </a>

        </div>
       
      </div>
    </div>
  );
};

export default Footer;
