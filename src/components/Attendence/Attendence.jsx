import React, { useState } from "react";
import "./Attendence.css";
import biometric from "../../assets/attendence/biometric.webp";
import facescan from "../../assets/attendence/facescan.webp";
import geoselfie from "../../assets/attendence/geoselfie.webp";
import card from "../../assets/attendence/card.webp";
import hikvision from "../../assets/attendence/hikvision.webp"

const TabbedContent = () => {
  const tabs = [
    {
      id: 1,
      name: "GeoSelfie",
      subtitle:"GeoSelfie",
      content: [
        "Users can mark attendance by taking a selfie in specified locations",
        "Verifies user location in real time when marking attendance",
        "User-friendly interface guides users with clear instructions for taking selfies",
       ],
      imageUrl: geoselfie, 
    },
    {
      id: 2,
      name: "Face Scan",
      subtitle:"Face Scan",
      content: [
        "Advanced facial recognition helps  accurately identify users and simplify attendance tracking",
        "Easy to use, enabling users to quickly and intuitively mark their attendance",
      
      ],
      imageUrl: hikvision,
    },
   
   
    {
      id: 3,
      name: "Biometric",
      subtitle:"Biometric",
      content: [
        "Uses thumbprint and facial recognition for secure attendance marking",
        "Seamlessly connects with biometric devices for fast and accurate verification",
        "Provides real-time attendance updates as users log in with biometric data",
      

       ],
      imageUrl: biometric
    },
    {
      id: 4,
      name: "Smart Card",
      subtitle:"Smart Card",
      content: [
        "Users can quickly and securely mark attendance by tapping their magnetic card, ensuring fast and reliable logging",
        "With RFID technology, attendance is automatically marked when users bring their card near the reader for a touch-free experience",
    
       ],
      imageUrl: card
    },
  ];

  const [activeTabId, setActiveTabId] = useState(tabs[0].id); // Set the default active tab

  const renderContent = () => {
    const activeTab = tabs.find((tab) => tab.id === activeTabId);
    return (
      <div className="flex flex-col md:flex-row items-center mt-4">
      <img
        src={activeTab.imageUrl}
        alt={activeTab.name}
        width={200} height={250} loading="lazy"
        className="mr-10 ml-10 tab-image  w-[150px] h-[150px] sm:w-[200px] sm:h-[250px]" // Adjust width and height as needed
      />
      <div className="w-3/2 ml-4"> {/* Wrap content in a div for better structure */}
        <h2 className="text-lg text-center font-bold text-customPurple mb-4">{activeTab.subtitle}</h2> {/* Title with underline */}
        <ul className="custom-list  text-xs px-10 leading-10">
            {Array.isArray(activeTab.content) ? (
              activeTab.content.map((item, index) => (
                <li key={index}>{item}</li> // Render each item as a list item
              ))
            ) : (
              <p className="text-sm px-10 leading-10">{activeTab.content}</p> // Fallback for non-array content
            )}
          </ul>
        
      </div>
    </div>
    );
  };

  return (
    <div className="card bg-custom-bg mt-10 mb-10 mx-auto scroll-mt-[100px]" id="attendence" >
      <div className="text-xl font-bold my-10 font-bold leading-12 my-10 text-center text-text-secondary">
        <h4 className="text-xl ">Mark attendance in multiple ways</h4>
        <h5 className="text-md mt-10">
          4 types of Attendance modes in One Easy Pagar
        </h5>
      </div>

      <div className="tabs text-sm font-bold ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={activeTabId === tab.id ? "active" : ""}
          >
            {tab.name}
          </button>
        ))}
      </div>
       <div className="content" style={{ minHeight: "350px" }}>
        {renderContent()}
      </div>

    

    </div>
    
    
  );
};

export default TabbedContent;
