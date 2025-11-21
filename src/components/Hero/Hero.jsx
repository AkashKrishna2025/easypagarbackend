// import React from "react";
// import "./Hero.css";

// import darkarrow from '../../../public/images/darkarrow.png'
// const Hero = () => {
//   return (
//     <div className="hero maincont">
//       <div className="hero-text">
//         <h1>EASY PAGAR</h1>
//         <p>
//         EasyPagar Simplifies Employee Management, ESI Management, Expense Tracking , Loan/Advance Management and more for Businesses of all Sizes through its User-Friendly Mobile App, Ensuring a Seamless Experience from Start to Finish.
//         </p>
//         <button className="btn">Explore More <img src={darkarrow}/></button>
//       </div>

//     </div>
//   );
// };

// export default Hero;
// import React from "react";

// import darkarrow from '../../../public/images/darkarrow.png';
// import heroImage from '../../../public/images/pagarfeat.png';

// const Hero = () => {
//   return (
//     <div className="hero maincont">
//       <div className="hero-content">
//         <div className="hero-text">
//           <h1>Easy Pagar</h1>
//           <p>
//             EasyPagar Simplifies Employee Management, ESI Management, Expense Tracking, Loan/Advance Management and more for Businesses of all Sizes through its User-Friendly Mobile App, Ensuring a Seamless Experience from Start to Finish.
//           </p>
//           <button className="btn">Explore More <img src={darkarrow} alt="Arrow Icon" /></button>
//         </div>
//         <div className="hero-image">
//           <img src={heroImage} alt="Hero" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import React from "react";
// import darkarrow from "../../../public/images/darkarrow.png";
// import heroImage from "../../../public/images/HERONEW.png";

// const Hero = () => {
//   return (
//     <div className="hero py-22 md:py-28 mt-16 md:mt-0 min-h-screen flex items-center">
//       <div className="maincont mx-auto flex flex-col md:flex-row items-center justify-between px-4 max-w-screen-xl">
//         <div className="hero-content max-w-lg md:max-w-2xl text-center md:text-left">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
//             Easy Pagar
//           </h1>
//           <p className="text-lg md:text-xl text-gray-800 mb-6">
//             EasyPagar simplifies Employee Management, ESI Management, Expense
//             Tracking, Loan/Advance Management, and more for businesses of all
//             sizes through its user-friendly mobile app, ensuring a seamless
//             experience from start to finish.
//           </p>
//           <button className="btn bg-primary text-white hover:bg-primary-dark py-2 px-6 rounded-full inline-flex items-center">
//             Explore More{" "}
//             <img src={darkarrow} alt="Arrow Icon" className="ml-2 w-4" />
//           </button>
//         </div>
//         <div className="hero-image mt-6 md:mt-0">
//           <img
//             src={heroImage}
//             alt="Hero"
//             style={{ width: '300px', maxWidth: '900px', height: 'auto', background: 'none' }}
//             className=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import React from "react";
// import darkarrow from "../../../public/images/darkarrow.png";
// import heroImage from "../../../public/images/HERONEW.png";

// const Hero = () => {
//   return (
//     <div className="hero py-22 md:py-28 mt-16 md:mt-0 min-h-screen flex items-center bg-gray-50">
//       <div className="maincont mx-auto flex flex-col md:flex-row items-center justify-between px-4 max-w-screen-xl">
//         <div className="hero-content max-w-lg md:max-w-xl lg:max-w-2xl text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
//             Easy Pagar
//           </h1>
//           <p className="text-lg md:text-xl text-gray-800 mb-6">
//             EasyPagar simplifies Employee Management, ESI Management, Expense
//             Tracking, Loan/Advance Management, and more for businesses of all
//             sizes through its user-friendly mobile app, ensuring a seamless
//             experience from start to finish.
//           </p>
//           <button className="btn bg-yellow-500 text-black hover:bg-yellow-600 py-2 px-6 rounded-full inline-flex items-center">
//             Explore More{" "}
//             <img src={darkarrow} alt="Arrow Icon" className="ml-2 w-4" />
//           </button>
//         </div>
//         <div className="hero-image mt-6 md:mt-0">
//           <img
//             src={heroImage}
//             alt="Hero"
//             className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
//             style={{ height: 'auto', background: 'none' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import heroimg from '../../../public/images/heroEasy.png';

const Hero = () => {
  return (
    <section
      className="hero min-h-screen flex items-center justify-center py-24 md:py-20 lg:py-28 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>   
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Easy Pagar
        </h1>
        <p className="mt-4 text-lg text-gray-300 sm:text-xl lg:text-2xl">
          Effortlessly manage employee attendance, leave, and payroll with Easy Pagar’s all-in-one solution.
        </p>
        <div className="mt-6">
          <a
            href="/get-started"
            className="px-8 py-3 bg-yellow-400 text-blue-900 text-base font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
