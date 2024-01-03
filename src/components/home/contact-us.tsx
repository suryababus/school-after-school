import React from "react";

export const ContactUs: React.FC = () => {
  return (
    <div className="flex items-center flex-col mt-10 pt-10 bg-gray-200">
      <div className="text-3xl mb-10 font-bold">Contact Us</div>
      <div className="flex justify-evenly w-full">
        <div className="contact-us-left">
          <div className="text-lg font-bold">Address:</div>
          <div className="address">456 Park Avenue,</div>
          <div> Metropolis,</div>
          <div>Wonderland.</div>
          <div className="text-lg mt-2 font-bold">Phone:</div>
          <div className="phone-number">+91 9745234125</div>
        </div>
        <div className="grid grid-cols-2 gap-4 grid-rows-3">
          <a href="https://example.com/instagram">
            <img
              className="h-12 w-12"
              src="social-media/instagram.png"
              alt="Instagram"
            />
          </a>
          <a href="https://example.com/facebook">
            <img
              className="h-12 w-12"
              src="social-media/facebook.png"
              alt="Facebook"
            />
          </a>
          <a href="https://example.com/twitter">
            <img
              className="h-12 w-12"
              src="social-media/twitter.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
      <div className="text-sm mt-4 pb-4">
        © 2023 Copyright by us. All rights reserved.
      </div>
    </div>
  );
};
