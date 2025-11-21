import React from 'react';

const About = () => {

  const handleDownloadClick = () => {
    window.open("https://play.google.com/store/apps/details?id=com.pagarplus.app&pli=1", "_blank");
  };
  return (

    <section className=" about max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="/images/about.jpg"
            alt="Easy Pagar"
            width={600} 
            height={400}
            loading="eager"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <article className="mt-8 md:mt-0 md:w-1/2 md:pl-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">
            About Easy Pagar
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-700">
            Easy Pagar is your solution to the complexities of employee attendance management, leave, and expense management. Track attendance effortlessly, manage leave requests seamlessly, and automate salary calculations for accurate pay.
          </p>
          <p className="mt-4 text-sm sm:text-lg text-gray-700">
            This comprehensive employee management app offers customizable salary structures, ensuring flexibility for your organization's needs. From onboarding to daily operations, Easy Pagar simplifies the entire process.
          </p>
          <p className="mt-4 text-sm sm:text-lg text-gray-700">
            Choose Easy Pagar for a stress-free and efficient solution. Download now and take control of your organization's employee attendance and salary management in a few taps!
          </p>
          <button  onClick={handleDownloadClick} className="mt-6 bg-main-color hover:bg-yellow-300 text-blue-800 font-bold py-2 px-4 rounded">
            Download Now
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
