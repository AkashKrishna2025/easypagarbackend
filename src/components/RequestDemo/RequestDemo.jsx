
import React, { useState } from 'react';

const RequestDemo = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "2c0cdd42-4d2b-45bf-9561-e25026607e8d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="request-demo flex flex-col md:flex-row items-center justify-center p-4">
      <div className="image-section md:mr-8 mb-4 md:mb-0 ml-4 md:ml-0">
        <img
          className="cursor-pointer max-w-full md:max-w-xs"
 
          src="/images/epqrcode.png"
          alt="Demo"
        />
      </div>
      <div className="contact-form md:max-w-md bg-gray-100 shadow-md rounded-lg p-4">
        <h3 className="text-2xl mb-2">Discuss business needs, find out pricing or get a demo.</h3>
        <p className="text-sm mb-4">We would love to talk.</p>
        <form onSubmit={onSubmit} className="flex flex-col">
          {/* <input type="hidden" name="access_key" value="2c0cdd42-4d2b-45bf-9561-e25026607e8d" /> */}
          <input type="text" name="name" placeholder="Full Name*" required className="input-field mb-3" />
          <input type="text" name="phone" placeholder="Mobile Number*" required className="input-field mb-3" />
          <input type="email" name="email" placeholder="Business Email*" required className="input-field mb-3" />
          <input type="text" name="company" placeholder="Company Name*" required className="input-field mb-3" />
          <textarea name="message" placeholder="Your Message*" required className="input-field mb-3"></textarea>
          <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Request Demo</button>
        </form>
        {result && <p className="text-sm mt-4">{result}</p>}
      </div>
    </div>
  );
};

export default RequestDemo;
