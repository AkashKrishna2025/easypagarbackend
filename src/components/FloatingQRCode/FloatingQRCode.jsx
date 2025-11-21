import React from "react";
import easypagarqrcode from "../../assets/ep.png";
import easypagarios from "../../assets/Easypagarios.png";
import "./FloatingQRCode.css";
export default function ModalComponent({ isOpen, onClose, onButtonClick }) {
  return (
    <>
      {/* Fixed Download Button */}
      {/* <button
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-pricie-bg text-white px-4 py-2 shadow-lg hover:bg-pricie-bg focus:outline-none"
        onClick={onButtonClick}
      >
        Download <br /> Now
      </button> */}
      <button
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-pricie-bg text-white px-4 py-2 hover:bg-pricie-bg focus:outline-none rounded-l-xl transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={onButtonClick}
      >
        Download <br /> Now
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-6 sm:px-10 sm:py-8 md:px-20 md:py-10 rounded-lg shadow-lg relative max-w-full sm:max-w-lg md:max-w-2xl">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              ✕
            </button>
            {/* QR Code */}
            <h2 className="text-sm font-bold mb-4 text-center text-primary">
              Scan the QR Code
            </h2>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
              <a
                href="https://play.google.com/store/apps/details?id=com.pagarplus.app&pcampaignid=web_share"
                target="_blank"
                className="flex flex-col items-center"
              >
                <img
                  className="mx-auto w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
                  src={easypagarqrcode} // Replace with your QR code image URL
                  alt="QR Code"
                />
                <p className="pt-4 text-xs font-bold mb-4 text-center text-blue-700">
                  Get it on Google Play Store
                </p>
              </a>

              <a
                href="https://apps.apple.com/in/app/easy-pagar/id6739873841"
                target="_blank"
                className="flex flex-col items-center"
              >
                <img
                  className="mx-auto w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
                  src={easypagarios} // Replace with your QR code image URL
                  alt="QR Code"
                />
                <p className="pt-4 text-xs font-bold mb-4 text-center text-blue-700">
                  Get it on App Store
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
