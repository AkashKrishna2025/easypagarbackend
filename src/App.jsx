import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Title from "./components/Title/Title";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Hero2 from "./components/Hero2/Hero2";
import Features2 from "./components/ImageGallery/Features2";
import MoreApps from "./components/MoreApps/MoreApps";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndCondition/TermsAndCondition";
import Faq from "./components/Faq/Faq";
import Attendence from "./components/Attendence/Attendence";
import Leave from "./components/Leave/Leave";
import Loan from "./components/Loan/Loan";
import Expenses from "./components/Expenses/Expenses";
import Messages from "./components/Messages/Messages";
import Reports from "./components/Reports/Reports";
import Testimonials from "./components/Testimonials/Testimonials";
import Partners from "./components/Partners/Partners";
import FloatingQRCode from "./components/FloatingQRCode/FloatingQRCode";
import LeadForm from "./components/LeadForm/LeadForm";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  // Open lead form on component mount and every 10 seconds if not filled
  useEffect(() => {
    // Check if the user has already submitted the form
    const hasSubmittedForm = localStorage.getItem("leadFormSubmitted");
    if (hasSubmittedForm) {
      return; // Don't show if already submitted
    }

    // Show form after 1.5 seconds on first load
    const initialTimer = setTimeout(() => {
      setIsLeadFormOpen(true);
    }, 1500);

    // Then show every 10 seconds if form is closed without submission
    const intervalTimer = setInterval(() => {
      const formSubmitted = localStorage.getItem("leadFormSubmitted");
      if (!formSubmitted) {
        setIsLeadFormOpen(true);
      }
    }, 10000); // 10 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const handleButtonClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="maincont">
                  <Hero2 />
                  <Attendence />
                  <Leave />
                  <Loan />
                  <Expenses />
                  <Messages />
                  <Reports />

                  {/* <Features2 /> */}
                  <Title />

                  <Pricing />
                  <Partners />

                  <Testimonials />
                  <Faq />
                  <Contact />
                  <MoreApps />
                  <FloatingQRCode
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onButtonClick={handleButtonClick}
                  />
                  <LeadForm
                    isOpen={isLeadFormOpen}
                    onClose={() => setIsLeadFormOpen(false)}
                  />
                  {/* <FloatingQRCode link="https://play.google.com/store/apps/details?id=com.pagarplus.app&pcampaignid=web_share" /> */}
                </div>
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />{" "}
          {/* Define the route for PrivacyPolicy */}
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
