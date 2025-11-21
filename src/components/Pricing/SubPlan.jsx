
// // import React, { useState } from "react";
// // import { IoCheckmarkCircleSharp, IoRemoveCircleSharp } from "react-icons/io5";

// // const SubPlan = ({ subplanData }) => {
// //   const [accentColor, setAccentColor] = useState("gray-400");

// //   // Sorting features based on status: true first, false later
// //   const sortedFeatures = subplanData?.Features?.sort((a, b) => {
// //     if (a.status && !b.status) return -1;
// //     if (!a.status && b.status) return 1;
// //     return 0;
// //   });

// //   return (
// //     <div className="flex flex-col text-black p-4 min-w-[220px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[300px] items-start card gap-2 md:gap-3 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
// //       <span className="text-xl md:text-2xl font-bold self-center bg-yellow-400 text-white w-full rounded-md text-center py-2">
// //         {subplanData?.Name}
// //       </span>
// //       {/* Features displayed in two columns */}
// //       <ul className="list-none w-full grid grid-cols-2 gap-x-2 gap-y-1">
// //         {sortedFeatures?.map((feature, idx) => (
// //           <li className="flex justify-between items-center gap-1 md:gap-2 font-medium mb-1" key={idx}>
// //             <div className="flex items-center gap-1 md:gap-2">
// //               {feature.status ? (
// //                 <IoCheckmarkCircleSharp className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
// //               ) : (
// //                 <IoRemoveCircleSharp className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
// //               )}
// //               <span className="text-xs sm:text-sm md:text-base text-gray-700">{feature.FeatureName}</span>
// //             </div>
// //             <span className="text-xs md:text-sm text-gray-500">{feature.Count}</span>
// //           </li>
// //         ))}
// //       </ul>
// //       {/* Pricing section with larger, bold font */}
// //       <div
// //         className="w-full text-center py-2 rounded-md"
// //         style={{ backgroundColor: accentColor }}
// //       >
// //         <span className="text-lg md:text-xl font-bold">
// //           ₹ {subplanData?.Amount}
// //         </span>
// //         <span className="text-base md:text-lg ml-1">for</span>
// //         <span className="text-sm md:text-base ml-1">{subplanData?.Duration} Days</span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SubPlan;
// // import React, { useState } from "react";
// // import { IoCheckmarkCircleSharp, IoRemoveCircleSharp } from "react-icons/io5";

// // const SubPlan = ({ subplanData }) => {
// //   const [accentColor, setAccentColor] = useState("gray-400");

// //   // Sorting features based on status: true first, false later
// //   const sortedFeatures = subplanData?.Features?.sort((a, b) => {
// //     if (a.status && !b.status) return -1;
// //     if (!a.status && b.status) return 1;
// //     return 0;
// //   });

// //   return (
// //     <div
// //       className="flex  mb-0 flex-col text-black p-4 min-w-[270px] sm:min-w-[500px] md:min-w-[280px] lg:min-w-[300px] items-start 
// //      gap-2 md:gap-3 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
// //     >
// //       <span className="text-xl md:text-2xl font-bold self-center bg-yellow-400 text-white w-full rounded-md text-center py-2">
// //         {subplanData?.Name}
// //       </span>
// //       {/* Features displayed in a responsive grid */}
// //       <ul className="list-none w-full md:grid grid-cols-1 sm:grid-cols-2 gap-2">
// //         {sortedFeatures?.map((feature, idx) => (
// //           <li
// //             className="flex justify-between items-center  md:gap-2 font-medium mb-1"
// //             key={idx}
// //           >
// //             <div className="flex items-center gap-3 md:gap-2 h-3">
// //               {feature.status ? (
// //                 <IoCheckmarkCircleSharp className="w-4 gap-1 h-4 md:w-5 md:h-5 text-green-500" />
// //               ) : (
// //                 <IoRemoveCircleSharp className="w-4 gap-1 h-4 md:w-5 md:h-5 text-red-500" />
// //               )}
// //               <span className="text-xs sm:text-sm md:text-base text-gray-700">
// //                 {feature.FeatureName}
// //               </span>
// //             </div>
// //             <span className="text-xs md:text-sm text-gray-500">
// //               {feature.Count}
// //             </span>
// //           </li>
// //         ))}
// //       </ul>
// //       {/* Pricing section with larger, bold font */}
// //       <div
// //         className="w-full text-center py-2 rounded-md"
// //         style={{ backgroundColor: accentColor }}
// //       >
// //         {/* Update price text size to be 3 times larger */}
// //         <span className="text-lg sm:text-2xl md:text-3xl font-bold">
// //           ₹ {subplanData?.Amount}
// //         </span>
// //         {/* Update duration text size to be 1 time larger */}
// //         <span className="text-base sm:text-lg md:text-xl ml-1">for</span>
// //         <span className="text-sm sm:text-base md:text-lg ml-1">
// //           {subplanData?.Duration} Days
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SubPlan;
// import React, { useState } from "react";
// import {
//   IoCheckmarkCircleSharp,
//   IoRemoveCircleSharp,
//   IoPeopleSharp,
//   IoBusinessSharp,
//   IoDocumentTextSharp,
//   IoChatbubblesSharp,
//   IoMegaphoneSharp,
//   IoWalletSharp,
//   IoCalendarSharp,
//   IoClipboardSharp,
//   IoNotificationsSharp,
//   IoBriefcaseSharp,
//   IoLocationSharp,
//   IoGitBranchSharp,
//   IoPersonAddSharp
// } from "react-icons/io5";

// // Map feature keys to icons
// const featureIcons = {
//   employee: IoPeopleSharp,
//   branch: IoBusinessSharp,
//   rolecreation: IoDocumentTextSharp,
//   messages: IoChatbubblesSharp,
//   banner: IoMegaphoneSharp,
//   expense: IoWalletSharp,
//   annualreports: IoCalendarSharp,
//   attendance: IoClipboardSharp,
//   reports: IoDocumentTextSharp,
//   notification: IoNotificationsSharp,
//   loan: IoBriefcaseSharp,
//   leave: IoCalendarSharp,
//   locationtracking: IoLocationSharp,
//   multibranch: IoGitBranchSharp,
//   validatecreateemployee: IoPersonAddSharp,
// };

// const SubPlan = ({ subplanData }) => {
//   const [accentColor, setAccentColor] = useState("gray-400");

//   // Sorting features based on status: true first, false later
//   const sortedFeatures = subplanData?.Features?.sort((a, b) => {
//     if (a.status && !b.status) return -1;
//     if (!a.status && b.status) return 1;
//     return 0;
//   });

//   return (
//     <div
//       className="flex  mb-0 flex-col text-black p-4 min-w-[270px] sm:min-w-[500px] md:min-w-[280px] lg:min-w-[300px] items-start 
//      gap-2 md:gap-3 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
//     >
//       <span className="text-xl md:text-2xl font-bold self-center bg-yellow-400 text-white w-full rounded-md text-center py-2">
//         {subplanData?.Name}
//       </span>
//       {/* Features displayed in a responsive grid */}
//       <ul className="list-none     w-full md:grid grid-cols-1 sm:grid-cols-2 gap-2">
//         {sortedFeatures?.map((feature, idx) => {
//           const Icon = featureIcons[feature.FeatureKey] || IoCheckmarkCircleSharp;
//           return (
//             <li
//               className="flex justify-between items-center  md:gap-2 font-medium mb-1"
//               key={idx}
//             >
//               <div className="flex items-center gap-4 md:gap-2 h-3">
//                 {feature.status ? (
//                   <Icon className="w-4 gap-1 h-4 md:w-5 md:h-5 text-green-500" />
//                 ) : (
//                   <IoRemoveCircleSharp className="w-4 gap-1 h-4 md:w-5 md:h-5 text-red-500" />
//                 )}
//                 <span className="text-xs gap-4 sm:text-sm md:text-base text-gray-700">
//                   {feature.FeatureName}
//                 </span>
//               </div>
//               <span className="text-xs md:text-sm text-gray-500">
//                 {feature.Count}
//               </span>
//             </li>
//           );
//         })}
//       </ul>
//       {/* Pricing section with larger, bold font */}
//       <div
//         className="w-full text-center py-2 rounded-md"
//         style={{ backgroundColor: accentColor }}
//       >
//         {/* Update price text size to be 3 times larger */}
//         <span className="text-lg sm:text-2xl md:text-3xl font-bold">
//           ₹ {subplanData?.Amount}
//         </span>
//         {/* Update duration text size to be 1 time larger */}
//         <span className="text-base sm:text-lg md:text-xl ml-1">for</span>
//         <span className="text-sm sm:text-base md:text-lg ml-1">
//           {subplanData?.Duration} Days
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SubPlan;
import React, { useState } from "react";
import {
  IoCheckmarkCircleSharp,
  IoRemoveCircleSharp,
  IoPeopleSharp,
  IoBusinessSharp,
  IoDocumentTextSharp,
  IoChatbubblesSharp,
  IoMegaphoneSharp,
  IoWalletSharp,
  IoCalendarSharp,
  IoClipboardSharp,
  IoNotificationsSharp,
  IoBriefcaseSharp,
  IoLocationSharp,
  IoGitBranchSharp,
  IoPersonAddSharp,
} from "react-icons/io5";

// Map feature keys to icons
const featureIcons = {
  employee: IoPeopleSharp,
  branch: IoBusinessSharp,
  rolecreation: IoDocumentTextSharp,
  messages: IoChatbubblesSharp,
  banner: IoMegaphoneSharp,
  expense: IoWalletSharp,
  annualreports: IoCalendarSharp,
  attendance: IoClipboardSharp,
  reports: IoDocumentTextSharp,
  notification: IoNotificationsSharp,
  loan: IoBriefcaseSharp,
  leave: IoCalendarSharp,
  locationtracking: IoLocationSharp,
  multibranch: IoGitBranchSharp,
  validatecreateemployee: IoPersonAddSharp,
};

const SubPlan = ({ subplanData }) => {
  const [accentColor, setAccentColor] = useState("#FFD700"); // Gold color

  // Sorting features based on status: true first, false later
  const sortedFeatures = subplanData?.Features?.sort((a, b) => {
    if (a.status && !b.status) return -1;
    if (!a.status && b.status) return 1;
    return 0;
  });

  return (
    <div className="flex  flex-col items-center bg-blue-50 border border-gray-200 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl min-w-[320px] sm:min-w-[500px] md:min-w-[280px] lg:min-w-[300px] md:p-6">
      <div className="w-full text-center py-1 rounded-t-lg bg-slate-500 text-white">
        <span className="text-xl md:text-xl lg:text-2xl font-bold">{subplanData?.Name}</span>
      </div>
      <ul className="list-none w-full grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4 mt-4 text-xs md:text-sm lg:text-base">
        {sortedFeatures?.map((feature, idx) => {
          const Icon = featureIcons[feature.FeatureKey] || IoCheckmarkCircleSharp;
          return (
            <li className="flex items-center justify-between mb-2 " key={idx}>
              <div className="flex items-center gap-1">
                {feature.status ? (
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                ) : (
                  <IoRemoveCircleSharp className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                )}
                <span className="">{feature.FeatureName}</span>
              </div>
              <span className="mr-4">{feature.Count}</span>
            </li>
          );
        })}
      </ul>
      <div className="w-full text-center py-4 mt-4 rounded-b-lg" style={{ backgroundColor: accentColor }}>
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold">₹ {subplanData?.Amount}</span>
        <span className="text-lg md:text-xl lg:text-2xl ml-1">for</span>
        <span className="text-md md:text-lg lg:text-xl ml-1">{subplanData?.Duration} Days</span>
      </div>
    </div>
  );
};

export default SubPlan;
