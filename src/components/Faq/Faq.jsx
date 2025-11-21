import React, { useState } from 'react';
import './Faq.css'; // Ensure this path is correct

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How to register as a admin?",
      answer: "Step into Seamless HR operations , Register as admin with Easy Pagar!",
      steps:" Register as a Admin -> Select plans -> Fill company details -> Submit",
      videoUrl:"https://youtu.be/oXwtcz83P3Q?si=N2gWUxVHtCBf07s9"
    },
    {
      question: "How to add employee?",
      answer: "Expand your team effortlessly – add new employees with Easy Pagar!",
      steps:"My employees -> Enter employee basic details -> KYC -> Salary Details -> Submit",
      videoUrl:"https://youtu.be/P_ibyrFljlc?si=a5a87N6haUZ7upKj"
    },
    {
      question: "How to approve expense?",
      answer: "Fast - track expense approvals – stay on top of business with Easy Pagar",
      steps:"Approve expense -> Select from - to date -> Click on employee request -> View expenses details -> Approve",
      videoUrl:"https://youtu.be/aFZwUKTBTkQ?si=k7HQnC1ItUw2GCpQ"
    },
    {
      question: "How to create message & share?",
      answer: "Effortlessly communicate and Keep your team informed in just one step",
      steps:"Messages -> Select branch -> Select department -> Select employee -> Write message -> Submit",
      videoUrl:"https://youtu.be/t1W79Sk-QY0?si=MgCNChiMnVqj9plo"
    },
    {
      question: "How to reset forgot password ?",
      answer: "Quick, secure, and hassle - free access to get you back on track",
      steps:"Forgot password -> Enter new password -> Submit",
      videoUrl:"https://youtu.be/brZKKWX22rM?si=7X3kH8fyxATCmEyt"
    },
    {
      question: "How to view reports ?",
      answer: "Make informed decisions with comprehensive data at your fingertips",
      steps:"Reports->Select reports -> View details -> Download reports ",
      videoUrl:"https://youtu.be/yCqCa-rqu8g?si=NzrHhVi9r94HfLWn",
    },
    {
      question: "How to login and put attendance? ",
      answer: "Stay on top of your attendance – easily log your hours with Easy Pagar",
      steps:"My attendance -> Check in -> Take selfie -> Submit ",
      videoUrl:"https://youtu.be/8koR0-LzL6Y?si=aUb2YqwbS7c5zrkq"
    },
    {
      question: "How to add expense ?",
      answer: "Submit your expenses in Just a few clicks and keep your finances on track",
      steps:"My expense -> Select Expense type -> Select date -> Enter amount -> Comment ->Submit",
      videoUrl:"https://youtu.be/zni-SECgvqc?si=6ftWNqit-35MinJ5"
    },
    {
      question: "How To Apply for Leave?",
      answer: "Enjoy a smooth, Hassle - free process to request your well - deserved break",
      steps:"Apply leave -> Select leave type -> From date -> Enter No of days -> Comment -> Submit",
      videoUrl:"https://youtu.be/VB3Tw70Q2jU?si=iCMeD20kuQSxFsDA"
    },
  ];

  return (
    <div id="Faq" className="scroll-mt-[100px]"> 
      <h2 className="text-xl font-bold text-customPurple text-center py-10 px-10">FAQ</h2>
      <div className="faq-container">

        <div className="faq-questions rounded">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-question text-xs ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {faq.question}
            </div>
          ))}
        </div>

        <div className="faq-answer text-xs leading-10">
          {faqs[activeIndex].answer}
          <p>{faqs[activeIndex].steps}</p>
          <a
            href={faqs[activeIndex].videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition"
          >
            Watch Now
          </a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
