import React, { useState, useEffect } from "react";
import expenseImage from "../../assets/expense.webp";
import leaveImage from "../../assets/leave.webp";
import loanImage from "../../assets/loan.webp";
import messageImage from "../../assets/message.webp";
import reportsImage from "../../assets/reports.webp";
import attendanceImage from "../../assets/attendance.webp";
import NavigateButton from "./NavigationButton"; // Import the NavigateButton component
import giffy from "../../assets/easy gif.gif";
import epQRCode from "../../assets/epqrcode.webp";
import Attendencemain from "../../assets/Attendencemain.webp";
import loanMain from "../../assets/loanimage.webp";
import leavemain from "../../assets/leaveimage.webp";
import expensesmain from "../../assets/expensesmain.webp"
import messagemain from '../../assets/messagingmain.webp'
import reportsmain from '../../assets/reportsmain.webp'

const imagesData = [
  {
    id: 1,
    src: attendanceImage,
    altSrc: Attendencemain,
    heading: "Attendance",
    tagline: "Accurately Track Attendance and Reduce Administrative Workload",
    description: [
      "Track employee attendance with precision using our real-time attendance management system.",
      "Supports multiple attendance recording methods.",
      "Ensures accuracy and reduces administrative workload.",
    ],
  },
  {
    id: 2,
    src: leaveImage,
    altSrc: leavemain,
    heading: "Leave",
    tagline: "Streamline Leave Requests and Approvals Seamlessly",
    description: [
      "Streamline leave requests and approvals with our integrated leave management system.",
      "Apply for leave through the app.",
      "Managers can approve or deny requests, all while keeping track of leave balances.",
    ],
  },
  {
    id: 3,
    src: loanImage,
    altSrc: loanMain,
    heading: "Loan",
    tagline: "Provide Financial Flexibility with Easy Loan Management",
    description: [
      "Offer financial flexibility to your employees with our loan and advance management feature.",
      "Easily process employee requests for loans or salary advances.",
      "Clear tracking and repayment schedules.",
    ],
  },
  {
    id: 4,
    src: expenseImage,
    altSrc: expensesmain,
    heading: "Expense",
    tagline: "Effortlessly Manage Employee Expenses and Ensure Transparency",
    description: [
      "Manage employee expenses efficiently with EasyPagar.",
      "Submit expense claims digitally.",
      "Review and approve expenses, ensuring transparency and accountability.",
    ],
  },
  {
    id: 5,
    src: messageImage,
    altSrc: messagemain,
    heading: "Messaging",
    tagline: "Enhance Internal Communication and Collaboration",
    description: [
      "Communicate effectively within your organization.",
      "Send and receive messages instantly.",
      "Ensure quick and efficient communication between teams and departments.",
    ],
  },
  {
    id: 6,
    src: reportsImage,
    altSrc: reportsmain,
    heading: "Reports",
    tagline: "Make Data-Driven Decisions with Comprehensive Reports",
    description: [
      "Generate regular and annual reports effortlessly.",
      "Access comprehensive reports on various HR aspects.",
      "Ensure data-driven decision making.",
    ],
  },
];

const Features2 = () => {
  const [selectedImageId, setSelectedImageId] = useState(imagesData[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageId((prevId) => {
        const currentIndex = imagesData.findIndex(
          (image) => image.id === prevId
        );
        const nextIndex = (currentIndex + 1) % imagesData.length;
        return imagesData[nextIndex].id;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const selectedImage = imagesData.find(
    (image) => image.id === selectedImageId
  );

  return (
    <section className="maincont  features mx-auto  scroll-mt-20" id="features">
      {/* Introductory Section */}
      <div className="pt-10 pb-10 shadow-md flex justify-center items-center flex-col mx-auto bg-blue-bg rounded-lg text-center">
        <h2 className="text-xl md:text-4xl font-bold text-main-color mb-6">
          Discover How EasyPagar Transforms Employee Management
        </h2>
        <p className="text-sm md:text-base text-center text-gray-600 mb-6">Wide Ranges  of Products especially  designed  to support your  Unique  business  Needs </p>

        <p className="text-sm md:text-base text-center text-gray-600 mb-6">
          EasyPagar is designed to simplify complex HR tasks, streamline
          operations, and enhance productivity. Experience a comprehensive
          solution that grows with your business.
        </p>
     
      </div>

      {/* Features Heading */}
      <div className="text-center">
        <h2 className="text-xl md:text-3xl mt-5 font-bold text-main-color">
          Our Features
        </h2>
      </div>

      {/* Features Section */}
      <section className="grid md:p-10 p-5 grid-cols-2 md:flex flex-wrap justify-center gap-6 md:gap-4 md:gap-10 lg:gap-x-10">
        {imagesData.map((image) => (
          <article
            onClick={() => setSelectedImageId(image.id)}
            key={image.id}
            className={`flex shadow-md border border-black  rounded-md sm:justify-center cursor-pointer items-center text-center transition-all hover:underline duration-[.5s] min-w-[130px] ease-in-out px-5 py-5 ${
              selectedImageId === image.id ? "bg-slate-200 rounded-md" : ""
            }`}
            style={{ border: "1px solid rgba(30, 58, 138, 0.76)" }}
          >
            {/* Left side - Logo */}
            <img
              src={image.src}
              alt={image.heading}
              width={40}
              height={40} // Prevent CLS
              loading="lazy"
              className="h-10 w-auto object-cover cursor-pointer"
            />
            {/* Right side - Heading */}
            <h2 className="ml-4 text-sm md:text-lg font-semibold">
              {image.heading}
            </h2>
          </article>
        ))}
      </section>
      {selectedImage && (
        <section className="mt-4 flex gap-4 md:gap-0 flex-col md:flex-row justify-center items-center">
          <div className="block md:block">
            <img
              src={selectedImage.altSrc}
              alt={selectedImage.heading}
              width={600}
              height={400} // Fixed dimensions to prevent CLS
              loading="eager"
              className="object-cover h-auto md:h-[400px] md:max-w-[600px] max-w-full" // Increased max-width for the image
            />
          </div>
          <div className="md:ml-8 md:mb-10 md:mt-0 p-6 text-center md:text-left min-w-[150px] md:min-w-[200px]">
            {" "}
            {/* Reduced min-width for content */}
            <h2 className="sm:text-md md:text-xl font-semibold">
              {selectedImage.tagline}
            </h2>
            <ul className="mt-2 min-w-[100px]">
              {selectedImage.description.map((point, index) => (
                <li key={index} className="flex text-left items-center mt-2">
                  <div className="w-4 h-4 md:w-6 md:h-6 mr-2">
                    <svg
                      className="w-4 h-4 md:w-6 md:h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M21.707 5.293a1 1 0 00-1.414 0L9 15.586 4.707 11.293a1 1 0 00-1.414 1.414l5.5 5.5a1 1 0 001.414 0l11-11a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="sm:text-md md:text-lg font-light">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Download Section */}
      <section className="flex py-200 mx-auto rounded-xl bg-blue-bg mb-20 shadow-xl md:p-6 p-2 flex-col md:flex-row items-center mt-12">
        <div className="md:w-1/3 bg-blue-bg rounded-xl text-center p-6 md:p-10 max-w-[600px] mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-main-color mb-4">
            Transform Your Workforce Management Today
          </h3>
          <p className="text-sm md:text-lg text-gray-800 mb-6 md:mb-10">
            EasyPagar offers a suite of features designed to enhance
            productivity and streamline HR processes. From real-time tracking to
            automated calculations, it’s the ultimate tool for modern workforce
            management.
          </p>
         
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 text-center">
          <img src={epQRCode} alt="QR Code"   
           width={200}
            height={200}
            loading="eager"
           className="w-1/2 mx-auto" />
          <p className="text-sm md:text-lg text-gray-800 mb-6">
            Download now and experience the future of seamless HR management
            with EasyPagar!
          </p>
          <div className="flex justify-center">
            <NavigateButton
              url="https://play.google.com/store/apps/details?id=com.pagarplus.app&hl=en"
              text="Download Now"
            />
          </div>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 text-center">
          <img
            src={giffy}
            alt="App Screenshot"
            width={500}
            height={400}
            loading="lazy"
            className="mx-auto w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2"
          />
        </div>
      </section>
    </section>
  );
};

export default Features2;
