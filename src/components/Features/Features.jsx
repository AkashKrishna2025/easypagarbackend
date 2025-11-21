
import React, { useState } from "react";

const Fatures = () => {
  const [showAll, setShowAll] = useState(false);
  const handleDownloadClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.pagarplus.app&pli=1",
      "_blank"
    );
  };

  const features = [
    {
      title: "Seamless Multi-Branch Management",
      description: [
        "Manage multiple branches from a single platform.",
        "Centralized control with local autonomy.",
        "Streamline operations across your organization.",
      ],
      tagline: "One Platform. Infinite Branches.",
    },
    {
      title: "Streamlined Department Management",
      description: [
        "Easily create and manage departments.",
        "Organize your workforce by roles and functions.",
        "Improve efficiency and clarity across teams.",
      ],
      tagline: "Departments Made Simple.",
    },
    {
      title: "Effortless Employee Onboarding",
      description: [
        "Quickly add and manage employee records.",
        "Simplify onboarding with an intuitive system.",
        "Secure and accessible employee information.",
      ],
      tagline: "Onboard with Ease.",
    },
    {
      title: "Accurate Attendance Tracking",
      description: [
        "Track attendance with real-time updates.",
        "Reduce administrative workload with precision.",
        "Multiple recording methods for accuracy.",
      ],
      tagline: "Never Miss a Beat.",
    },
    {
      title: "Simplified Leave Requests",
      description: [
        "Manage leave requests and approvals easily.",
        "Employees apply through the app; managers approve.",
        "Keep track of leave balances in real-time.",
      ],
      tagline: "Leave Management, Upgraded.",
    },
    {
      title: "Transparent Expense Management",
      description: [
        "Handle expense submissions and approvals digitally.",
        "Promote transparency and accountability.",
        "Efficiently manage employee expenses.",
      ],
      tagline: "Expenses Made Clear.",
    },
    {
      title: "Flexible Loan & Advance Processing",
      description: [
        "Process loan and advance requests with ease.",
        "Offer financial flexibility to employees.",
        "Manage repayment schedules and tracking.",
      ],
      tagline: "Financial Flexibility at Your Fingertips.",
    },
    {
      title: "Optimized Shift Scheduling",
      description: [
        "Assign and manage shifts effortlessly.",
        "Ensure optimal staffing levels.",
        "Improve productivity and satisfaction.",
      ],
      tagline: "Shifts Managed Smartly.",
    },
    {
      title: "Automated Salary Calculations",
      description: [
        "Automate salary and overtime calculations.",
        "Reduce errors and administrative burdens.",
        "Ensure accurate and timely payroll processing.",
      ],
      tagline: "Pay Right, Every Time.",
    },
    {
      title: "Customizable Holiday Management",
      description: [
        "Define and manage company-wide holidays.",
        "Ensure clear communication across all branches.",
        "Adapt holidays for different departments.",
      ],
      tagline: "Holidays, Tailored for You.",
    },
    {
      title: "Adaptable Settings & Grace Time",
      description: [
        "Customize app settings to match policies.",
        "Include grace periods and other rules.",
        "Align the system with internal processes.",
      ],
      tagline: "Customization to Fit Your Needs.",
    },
    {
      title: "Insightful Reporting",
      description: [
        "Generate detailed regular and annual reports.",
        "Gain valuable insights for decision-making.",
        "Comprehensive analysis for your business.",
      ],
      tagline: "Reports That Drive Decisions.",
    },
    {
      title: "Flexible Subscription Plans",
      description: [
        "Choose from various subscription plans.",
        "Explore add-ons to suit your business needs.",
        "Scale with your organization’s growth.",
      ],
      tagline: "Grow with Us.",
    },
  ];

  const visibleFeatures = showAll ? features : features.slice(0, 3);

  return (
    <div className="bg-custom-bg features123 ">
      <div className="maincont mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-main-color mb-8">
          Discover How EasyPagar Transforms Employee Management
        </h2>
        <p className="text-center text-gray-600 mb-12">
          EasyPagar is designed to simplify complex HR tasks, streamline
          operations, and enhance productivity. Experience a comprehensive
          solution that grows with your business.
        </p>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleFeatures.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              description={feature.description}
              tagline={feature.tagline}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="btn dark-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="md:w-1/2 text-center">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Transform Your Workforce Management Today
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              EasyPagar offers a suite of features designed to enhance
              productivity and streamline HR processes. From real-time tracking
              to automated calculations, it’s the ultimate tool for modern
              workforce management.
            </p>
            <p className="text-lg text-gray-800">
              Download now and experience the future of seamless HR management
              with EasyPagar!
            </p>
            <div className="flex justify-center">
            <button
  onClick={handleDownloadClick}
  className="mt-6 bg-main-color hover:bg-yellow-300 hover:text-main-color text-white font-bold py-2 px-4 rounded"
>
  Download Now
</button>
            </div>
          </div>
          <div className="md:w-1/2  md:mt-0 md:pl-8 text-center">
            <img
              src="/images/easy gif.gif"
              alt="App Screenshot"
              className="mx-auto w-1/2 md:w-2/3 lg:w-1/3 xl:w-1/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fatures;
const FeatureCard = ({ title, description, tagline }) => (
  <div className="bg-white  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-yellow-400 text-center">
    <h3 className="text-2xl font-semibold mb-2 text-blue-600">{title}</h3>
    <div className="text-gray-700 mb-4">
      {description.map((pointx, idx) => (
        <p key={idx} className="mb-2 flex items-start">
          <svg
            className="w-4 h-4 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="flex-1 text-left">{pointx}</span>
        </p>
      ))}
    </div>
    <p className="text-yellow-500 font-semibold">{tagline}</p>
  </div>
);
