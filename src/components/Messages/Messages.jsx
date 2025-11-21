// import React from 'react';
// import './Messages.css';
// import MessageImg from "../../assets/messagingmain.png";

// const serviceData = [
//   {
//     id: 1,

//     title: 'One-on-One Chat',
//     description: 'Enables direct, real-time messaging between an employer and an individual employee for  work-related discussions.',
//   },

//   {
//     id: 2,

//     title: 'Branch/Department Messaging',
//     description: ' Send messages to specific branches or departments to ensure relevant information reaches the right group.',
//   },
// ];

// const Messages = () => {
//   return (
//     <div className="Message-card bg-custom-bg mb-10 mt-10 pb-10">
//         <h4 className=" text-xl font-bold text-customPurple text-center  py-10 px-10">Messages</h4>
//        <div className="Message-container">

//      <div className="image-section">
//        <img src={MessageImg} alt="Messaging Service" />
//      </div>

//      <div className="content-section">
//        {serviceData.map((service) => (
//          <div key={service.id} className={`service-box ${service.id % 2 === 0 ? 'right-align' : 'left-align'}`}>

//            <div className="content">
//              <h3 className='text-sm font-bold pb-2'>{service.title}</h3>
//              <p className='text-xs leading-10'>{service.description}</p>
//            </div>
//          </div>
//        ))}
//      </div>
//    </div>

//     </div>

//   );
// };

// export default Messages;
import React from "react";
import "./Messages.css";
import MessageImg from "../../assets/messagingmain.webp";

// Sample data for services
const serviceData = [
  {
    id: 1,
    title: "Celebratory Banners",
    description:
      "Send customized banners for Employee of the Month, birthdays, and work anniversaries to celebrate achievements and boost workplace culture",
  },
  {
    id: 2,
    title: "Branch/Department Messaging",
    description:
      "Send messages to branches or departments to ensure relevant information reaches the right employees efficiently",
  },
  // You can add more services here, and it will render automatically
];

const Messages = () => {
  // Split services into left and right sections around the image
  const midIndex = Math.ceil(serviceData.length / 2);
  const leftServices = serviceData.slice(0, midIndex);
  const rightServices = serviceData.slice(midIndex);

  return (
    <section
      className="Message-card bg-custom-bg mb-10 mt-10"
      role="region"
      aria-labelledby="messages-heading"
    >
      <h2
        id="messages-heading"
        className="text-xl font-bold text-customPurple text-center py-10 px-10"
      >
        Messaging
      </h2>

      <div className="Message-container flex flex-col md:flex-row items-start justify-between px-10 gap-6">
        {/* Left Services */}
        <div className="content-section flex-1 space-y-6 ">
          {leftServices.map((service) => (
            <article key={service.id} className="service-box left-align">
              <h3 className="text-sm font-bold pb-2">{service.title}</h3>
              <p className="text-xs leading-8">{service.description}</p>
            </article>
          ))}
        </div>

        {/* Center Image */}
        <figure className="image-messection flex-shrink-0">
          <img
            src={MessageImg}
            alt="Easy Pagar Messaging Service"
            width="600"
            height="400"
            loading="lazy"
            srcSet={`${MessageImg} 300w, ${MessageImg} 600w`}
            sizes="(max-width: 768px) 300px, 600px"
          />
        </figure>

        {/* Right Services */}
        <div className="content-section flex-1 space-y-6">
          {rightServices.map((service) => (
            <article key={service.id} className="service-box right-align">
              <h3 className="text-sm font-bold pb-2 leading-8">
                {service.title}
              </h3>
              <p className="text-xs leading-8">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;
