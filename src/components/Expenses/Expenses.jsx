import React from "react";
import "./Expenses.css";
import expensesmain from "../../assets/expensesmain.webp";

const Expense = () => {
  const features = [
    "Review employee expenses daily across various categories for better oversight",
    "Monitor expenses for local visit, travel, lodging, and daily allowances",
    "Obtain in-depth reports for better insights into every expense.",
    "Improve financial management with organized expense tracking",
  ];

  return (
    <section className="container flex flex-col items-center justify-start">
      {/* Main Heading */}
      <header>
        <h2 className="text-xl font-bold text-customPurple mb-10">
          Track and Manage Employee Expenses with Ease
        </h2>
      </header>

      {/* Top Features */}
      <div className="flex justify-between w-full">
        <article className="featureexp top-left text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl">
          {features[0]}
        </article>
        <article className="featureexp top-right text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl">
          {features[1]}
        </article>
      </div>

      {/* Main Image */}
      <figure className="my-10">
        <img
          src={expensesmain}
          alt="Employee expense tracking dashboard"
          width={400}
          height={420}
          fetchpriority="high"   
          decoding="async"
          style={{ aspectRatio: "400/420" }} 
          className="mobile-imageexp w-full h-auto sm:w-[400px] sm:h-[420px]"
        />
        <figcaption className="sr-only">
          Screenshot of the employee expense tracking dashboard
        </figcaption>
      </figure>

      {/* Bottom Features */}
      <div className="flex justify-between w-full">
        <article className="featureexp bottom-left text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl">
          {features[2]}
        </article>
        <article className="featureexp bottom-right text-xs leading-6 sm:leading-10 bg-custom-bg rounded-xl">
          {features[3]}
        </article>
      </div>
    </section>
  );
};

export default Expense;
