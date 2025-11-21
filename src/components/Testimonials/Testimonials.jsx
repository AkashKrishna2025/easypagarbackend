import React, { useState, useRef, useEffect } from 'react';
import './Testimonials.css';  
import mwbtestimonial from "../../assets/videos/Easypagar.mp4";
import school from "../../assets/videos/school.mp4";
import Renuka from "../../assets/videos/Renuka.mp4";
import yoga from  "../../assets/videos/yoga.mp4";
import aryanspublicschool from "../../assets/Aaryans-school-logo.png";
import yogalogo from "../../assets/Yoga Logo.png";
import tvslogo from "../../assets/tvslogo.png";
import dafsonlogo from "../../assets/dafsonlogo.png";
import shrusthilgo from "../../assets/shrusthilgo.jpg";
import NaraLogo from "../../assets/NaraLogo.png";
import sarormot from "../../assets/Sarur motors.png" ;

// Import other videos here

const Testimonials = () => {
    const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide
    const videoRef = useRef(null); // Ref for the video element

    // Testimonial content data for each video (with IDs)
    const testimonials = [
        {
            id: 1,
            // title: 'MWB Technologies',
            content: "EasyPagar has transformed how MWB Technologies manages attendance. The app's geoselfie and biometric fingerprint scanning features provide us with secure, real-time tracking, improving our HR processes and employee accountability",
            videoSrc: mwbtestimonial,
            feedbackname: 'MWB Technologies',
        },
        {
            id: 2,
            // title: 'Aaryans Public school',
            content:"EasyPagar has streamlined our attendance and payroll processes with real-time tracking and automated features. The improved leave management makes it an essential asset for ensuring accountability in our school",
            videoSrc: school,
            feedbackname: 'Dr. Sireesha E',
            designation: 'Prinicipal, Aaryans Public school'

        },
        {
            id: 3,
            // title: 'Renuka Education & Walfare Society Hubli',
            content:"We've been using Easy Pagar Mobile app and Biometric Software for over a year, and it has made managing attendance, salary, expenses, shifts, and overtime effortless. The app and desktop portal are user-friendly, and the support has been great",
            videoSrc: Renuka,
                feedbackname: 'Mrs Sunita L Divate',
            designation: 'President, Renuka Education & Walfare Society Hubli'
        },
        {
            id: 4,
            // title: 'Patanjali Wellness Hubballi, Karnataka',
            content:"Using Easy Pagar for the past year has streamlined our HR tasks like attendance, payroll, and expenses. It's easy to use, both on mobile and desktop, and the customer support is excellent. We're extremely satisfied with the experience!",
            videoSrc: yoga,
               feedbackname: 'Madhusudan Das ',
            designation: 'General Manager , Patanjali Wellness Hubballi, Karnataka'
        },
       
    ];
    const customerLogos = [
        { id: 1, src: aryanspublicschool, alt: "Easy Pagar clients - aryanspublicschool" },
     
        { id: 2, src: tvslogo, alt: "Easy Pagar clients -  tvslogo" },
        { id: 3, src: yogalogo, alt: "Easy Pagar clients - yogalogo" },
        { id: 4, src: shrusthilgo, alt: "Easy Pagar clients - shrusthilgo" },
        { id: 5, src: dafsonlogo, alt: "Easy Pagar clients - dafsonlogo" },
        { id: 6, src: NaraLogo, alt: "Easy Pagar clients - NaraLogo" },
        { id: 7, src: sarormot, alt: "Easy Pagar clients - sarormot" },
      ];

    // Effect to update the video source when activeSlide changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // Reload the video element to recognize the new source
        }
    }, [activeSlide]); // Dependency on activeSlide

    return (
        <div className="card scroll-mt-[100px]" id="testimonials">
            <h4 className="text-xl font-bold text-customPurple text-center py-10 px-10">Happy Customers, Proven Results!</h4>

            <div className="testimonial-container">
                {/* Left Box: Title and Content */}
                <div className="left-box">
                    <h2 className="text-sm font-bold leading-10">{testimonials[activeSlide].title}</h2>
                    <p className="text-xs leading-10">{testimonials[activeSlide].content}</p>
                    <p className="text-xs leading-10 font-bold">{testimonials[activeSlide].feedbackname}</p>
                    <p className="text-xs leading-10 font-bold">{testimonials[activeSlide].designation}</p>
                    {/* Dots under the content */}
                    <div className="custom-dots-container">
                        <ul style={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
                            {testimonials.map((testimonial, index) => (
                                <li key={index}>
                                    <button
                                        className={`dot ${index === activeSlide ? 'active' : ''}`}
                                        onClick={() => {
                                            console.log(`Changing to slide: ${index}`);
                                            setActiveSlide(index); // Change slide on click
                                        }}
                                    ></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Box: Video Player */}
                <div className="right-box">
                    <video ref={videoRef} width="100%" height="auto" controls>
                        <source src={testimonials[activeSlide].videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

     

            </div>

            <div className="max-w-7xl flex flex-wrap justify-center ">
        {customerLogos.map((logo) => (
          <div
            key={logo.id}
            className=" px-4 py-2 flex items-center justify-center "
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-[135px] max-h-[150px] object-cover"
            />
          </div>
        ))}
      </div>
        </div>
    );
}

export default Testimonials;
