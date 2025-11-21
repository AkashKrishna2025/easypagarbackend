import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LeadForm.css";

const LeadForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    companyName: "",
    email: "",
    captcha: "",
    ipAddress: "",
  });

  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [captchaError, setCaptchaError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  // Fetch IP address on component mount
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setFormData((prev) => ({
          ...prev,
          ipAddress: response.data.ip,
        }));
      } catch (error) {
        console.log("IP fetch error:", error);
        // Fallback if IP fetch fails
        setFormData((prev) => ({
          ...prev,
          ipAddress: "Unknown",
        }));
      }
    };

    fetchIpAddress();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setCaptchaError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate captcha
    if (formData.captcha.toUpperCase() !== captchaCode) {
      setCaptchaError(true);
      return;
    }

    setLoading(true);

    try {
      // Submit to backend
      await axios.post("http://localhost:5000/api/leads/submit", {
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        companyName: formData.companyName,
        email: formData.email,
        ipAddress: formData.ipAddress,
      });

      // Show success message
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          fullName: "",
          mobileNumber: "",
          companyName: "",
          email: "",
          captcha: "",
          ipAddress: formData.ipAddress,
        });
        setCaptchaCode(generateCaptcha());
        setSubmitted(false);
        // Mark form as submitted so it won't appear again
        localStorage.setItem("leadFormSubmitted", "true");
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setFormData({ ...formData, captcha: "" });
    setCaptchaError(false);
  };

  if (!isOpen) return null;

  return (
    <div className="lead-form-overlay" onClick={onClose}>
      <div className="lead-form-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="form-header">
              <h2 className="form-title">Get Free Demo</h2>
              <p className="form-subtitle">
                Join thousands of businesses using EasyPagar
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lead-form">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Mobile Number */}
              <div className="form-group">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="+91 98765 43210"
                  pattern="[0-9+\s\-]{10,}"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Company Name */}
              <div className="form-group">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Your Company"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Captcha */}
              <div className="form-group captcha-group">
                <div className="captcha-wrapper">
                  <label className="form-label">Verify CAPTCHA</label>
                  <div className="captcha-box">
                    <span className="captcha-code">{captchaCode}</span>
                    <button
                      type="button"
                      className="refresh-captcha-btn"
                      onClick={handleRefreshCaptcha}
                      title="Refresh CAPTCHA"
                    >
                      🔄
                    </button>
                  </div>
                </div>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Enter CAPTCHA code"
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                  className={`form-input ${captchaError ? "error" : ""}`}
                />
                {captchaError && (
                  <span className="error-message">
                    Invalid CAPTCHA. Please try again.
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Get Free Demo"}
              </button>
            </form>

            <p className="form-footer">
              We never share your information. No spam, promise!
            </p>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>We'll contact you shortly with your demo details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadForm;
