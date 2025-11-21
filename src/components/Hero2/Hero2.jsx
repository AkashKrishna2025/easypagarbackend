// import bgTriangle from "../../assets/bg-traingle.svg";
// import React, { useRef, useState, useEffect } from "react";
// import pagarfeat from "../../assets/pagarfeat.png";
// import { useForm } from "@formspree/react";

// const Hero2 = () => {
//   const featuresRef = useRef(null);
//   const [state, handleSubmit] = useForm("xrbzngok"); // Use your actual Formspree ID here
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     if (state.succeeded) {
//       setSuccessMessage("Thank you! You will receive a response shortly.");
//       setIsSubmitting(false);
//     }
//   }, [state.succeeded]);

//   useEffect(() => {
//     setIsSubmitting(state.submitting);
//   }, [state.submitting]);

//   const validateForm = (formData) => {
//     let formErrors = {};

//     if (!formData.name) {
//       formErrors.name = "Name is required.";
//     }

//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!formData.email) {
//       formErrors.email = "Email is required.";
//     } else if (!emailPattern.test(formData.email)) {
//       formErrors.email = "Invalid email format.";
//     }

//     const phonePattern = /^\d{10}$/;
//     if (!formData.number) {
//       formErrors.number = "Phone number is required.";
//     } else if (!phonePattern.test(formData.number)) {
//       formErrors.number = "Phone number must be 10 digits.";
//     }

//     if (!formData.comment) {
//       formErrors.comment = "Comment is required.";
//     }

//     return formErrors;
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       number: e.target.number.value,
//       comment: e.target.comment.value,
//     };

//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       setErrors({}); // Clear previous errors
//       await handleSubmit(formData); // Submit form data
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const scrollToFeatures = () => {
//     if (featuresRef.current) {
//       const offset = -77; // Adjust this value for your desired offset
//       const elementPosition = featuresRef.current.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset + offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <>
//       <div
//         className="mx-auto md:py-[65px] py-[100px] bg-blue-900 lg:flex lg:h-screen lg:items-center lg:justify-center"
//         id="hero2"
//       >
//         <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-16">
//           <div className="mb-8 lg:mb-0 animate-up-down">
//             <img
//               src={pagarfeat}
//               alt="EasyPagar Logo"
//               className="h-auto w-full sm:h-40 sm:w-auto md:h-80 md:w-auto lg:h-96 xl:h-[500px] object-cover"
//             />
//           </div>

//           <div className="max-w-3xl w-full lg:w-1/2 bg-white px-10 py-10 rounded-lg ">
//             <div className="p-1 rounded-2xl">
//               <h2 className="text-3xl font-extrabold mb-4">Request Demo</h2>
//               <form onSubmit={onSubmit} className="flex flex-col gap-4">
//                 <div>
//                   {/* <label htmlFor="name" className="block text-sm font-medium">Name</label> */}
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     placeholder="Your name"
//                     required
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                   {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
//                 </div>

//                 <div>
//                   {/* <label htmlFor="email" className="block text-sm font-medium">Email</label> */}
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="Your email"
//                     required
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                   {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
//                 </div>

//                 <div>
//                   {/* <label htmlFor="number" className="block text-sm font-medium">Mobile Number</label> */}
//                   <input
//                     type="tel"
//                     name="number"
//                     id="number"
//                     placeholder="Your phone number"
//                     required
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                   {errors.number && <span className="text-red-500 text-sm">{errors.number}</span>}
//                 </div>

//                 <div>
//                   {/* <label htmlFor="comment" className="block text-sm font-medium">Comment</label> */}
//                   <textarea
//                     name="comment"
//                     id="comment"
//                     placeholder="Your message"
//                     required
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                   {errors.comment && <span className="text-red-500 text-sm">{errors.comment}</span>}
//                 </div>

//                 <button
//                   type="submit"
//                   className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>

//                 {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
//               </form>
//             </div>

//           </div>
//         </div>
//       </div>

//       <div ref={featuresRef} className="features">
//         {/* Your content for the features section goes here */}
//       </div>
//     </>
//   );
// };

// export default Hero2;

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slider1 from "../../assets/banner/slider1.webp";
import slider2 from "../../assets/banner/slider2.webp";
import slider3 from "../../assets/banner/slider3.webp";
import slider4 from "../../assets/banner/slider4.webp";
import slider5 from "../../assets/banner/slider5.webp";
import slider6 from "../../assets/banner/slider6.webp";
import slider7 from "../../assets/banner/slider7.webp";
// import playicon from "../../assets/banner/play-arrow.png";
import playstore from "../../assets/playstore.webp";
import intruductionvideo from "../../assets/videos/ep intruduction.mp4";
import { useEffect } from "react";
import playIcon from "../../assets/banner/play-arrow.webp";
import AttendanceManagement from "../../assets/banner/Attendance Management.mp4";
import LeaveManagement from "../../assets/banner/Leave Management.mp4";
import LoanandAdvanceManagement from "../../assets/banner/Loan and Advance Management .mp4";
import ExpenseManagement from "../../assets/banner/Expense Management.mp4";
import MessagesandBanners from "../../assets/banner/Messages and Banners.mp4";
import Reports from "../../assets/banner/Reports .mp4";
const Hero2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); // State to control transition
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const globalVideoUrl = intruductionvideo;

  const slides = [
    {
      id: 1,
      title: "Welcome to Easy Pagar ",
      subtitle: (
        <>
         <> Smart Solutions for Attendance Payroll and <br/>
          Leave Tracking</>
        </>
      ),
      bgImage: slider1,
      qrImage: playstore,
      playIcon: playIcon,
      videoUrl: intruductionvideo,
    },
    {
      id: 2,
      title: "Simplified Attendance  ",
      subtitle: (
        <>
          Geo-fencing with auto-approval <br></br>attendance using Easy Pagar
        </>
      ),
      bgImage: slider2,
      qrImage: playstore,
      playIcon: playIcon,
      videoUrl: AttendanceManagement,
    },
    {
      id: 3,
      title: "Streamlined Leave",
      subtitle: (
        <>
          Effortlessly track, approve, and <br></br> manage employee leaves with
          ease.
          {/* Easily request and track your leave with Easy Pagar */}
        </>
      ),
      bgImage: slider3,
      playIcon: playIcon,
      qrImage: playstore,
      videoUrl: LeaveManagement,
    },
    {
      id: 4,
      title: "Streamlined Loans",
      subtitle: (
        <>
          Fast approvals, automatic monthly <br></br>deductions, and easy
          repayments
        </>
      ),
      bgImage: slider4,
      playIcon: playIcon,
      qrImage: playstore,
      videoUrl: LoanandAdvanceManagement,
    },
    {
      id: 5,
      title: "Smart Expenses",
      subtitle: (
        <>
          Effortlessly track, manage, and control <br></br> your all expenses
        </>
      ),
      bgImage: slider5,
      playIcon: playIcon,
      qrImage: playstore,
      videoUrl: ExpenseManagement,
    },
    {
      id: 6,
      title: "Smart Connect",
      subtitle: (
        <>
          Seamless communication with messages <br></br> and celebratory
          banners.
        </>
      ),
      bgImage: slider6,
      playIcon: playIcon,
      qrImage: playstore,
      videoUrl: MessagesandBanners,
    },
    {
      id: 7,
      title: "Quick Insights",
      subtitle: (
        <>
          Unlock valuable reports effortlessly <br></br>with Easy Pagar
        </>
      ),
      bgImage: slider7,
      playIcon: playIcon,
      qrImage: playstore,
      videoUrl: Reports,
    },
  ];

  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
      // Disable transition, instantly jump to first slide
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      // Disable transition, instantly jump to last slide
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Re-enable transition after jump
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50); // Small delay to avoid visual issues
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleWatchNowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full h-[250px] sm:h-[500px]" id="home">
        <div className="overflow-hidden h-full w-full">
          <div
            className={`flex ${
              isTransitioning ? "transition-transform duration-500" : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full bg-cover bg-no-repeat bg-center flex items-start justify-start"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <div className="sliderimage bg-opacity-10 text-primary items-start justify-start bg-center sm:px-20 sm:py-10 sm:mx-10 sm:my-20 px-4 py-2 mx-2 my-2">
                  <h1 className="text-3xl font-bold leading-12 mx-4 sm:mx-0 sm:my-10 mt-10 ">
                    {slide.title}
                  </h1>
                  <div className="text-2xl font-bold leading-10 mx-4 sm:mx-0 my-2 pb-4 ">
                    {slide.subtitle}
                  </div>

                  <div className="flex items-center space-x-4 my-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.pagarplus.app&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={slide.qrImage}
                        alt="Easy Pagar QR Code"
                        className="w-40 h-15"
                      />
                    </a>

                    <button
                      onClick={handleWatchNowClick}
                      className="flex items-center mr-4 bg-primary text-white px-4 sm:px-4 py-3 rounded hover:bg-primary whitespace-nowrap"
                    >
                      <img
                        src={slide.playIcon}
                        alt="Easypagar Features"
                        className="w-6 h-6 mr-2"
                      />
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="sm:ml-10 ml-2 absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="sm:mr-10 mr-2 absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg"
        >
          <FaChevronRight/>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full px-4"
              style={{ zIndex: 9999 }}
            >
              X
            </button>

            <video className="w-full max-h-[80vh]" controls>
              <source src={slides[currentIndex].videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      {/* <button
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-pricie-bg text-white px-4 py-2  shadow-lg hover:bg-pricie-bg focus:outline-none"
        onClick={() => alert("Download Started!")}
      >
        Download Now
      </button> */}
    </>
  );
};

export default Hero2;
