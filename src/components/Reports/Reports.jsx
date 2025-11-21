import React from "react";
import "./Reports.css"; // Make sure to create this CSS file
import reportsmain from "../../assets/reportsmain.webp"; // Replace with your actual image path

const Expense = () => {
  const features = [
    "Simplify your workflow with easy access to essential reports",
    "Track employee attendance, covering late entries, absences, and overtime",
    "Detailed salary reports, including wages, deductions, and net pay",
    "Access reports for employee leave, expenses, loans, and advances.",
  ];

  return (
    <div className="container flex flex-col items-center justify-start">
      <h2 className="text-xl font-bold text-customPurple mb-10">Reports</h2>

      <div className="flex justify-between w-full">
        <div className="featurereport top-left text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl" role="region"
  aria-label="Feature 1">
          {features[0]}
        </div>
        <div className="featurereport top-right text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl"   role="region"
  aria-label="Feature 2">
          {features[1]}
        </div>
      </div>

      <img
        src={reportsmain}
        alt="Easy Pagar Reports overview"
        width={400}
        height={450}
       fetchPriority="high"
        className="mobile-imagereport sm:w-[400px] sm:h-[450px] my-20"
        srcSet={`
          ${reportsmain} 300w,
          ${reportsmain} 400w
        `}
        sizes="(max-width: 768px) 300px, 400px"
      />

      <div className="flex justify-between w-full">
        <div className="featurereport bottom-left text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl"  role="region"
  aria-label="Feature 3">
          {features[2]}
        </div>
        <div className="featurereport bottom-right text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl"  role="region"
  aria-label="Feature 4">
          {features[3]}
        </div>
      </div>
    </div>
  );
};

export default Expense;
