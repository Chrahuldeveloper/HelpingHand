import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="border-t-[1px] border-gray-300 p-6 flex  md:flex-row flex-col md:justify-around justify-start px-20 md:items-center gap-8">
        <div>
          <h1 className="max-w-sm mx-auto text-xl font-semibold text-center text-green-800 md:text-3xl lg:text-4xl">
            HelpingHand
          </h1>
        </div>
        <div className="flex flex-col justify-start gap-10 md:gap-20 md:items-center md:flex-row md:justify-around">
          <div>
            <ul className="space-y-3">
              <li className="font-semibold cursor-pointer">Home</li>
              <li className="font-semibold cursor-pointer">About</li>
              <li className="font-semibold cursor-pointer">Contact</li>
              <li className="font-semibold cursor-pointer">Email</li>
              <li className="font-semibold cursor-pointer">Services</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 ">
              <li className="font-semibold cursor-pointer">Home</li>
              <li className="font-semibold cursor-pointer">About</li>
              <li className="font-semibold cursor-pointer">Contact</li>
              <li className="font-semibold cursor-pointer">Email</li>
              <li className="font-semibold cursor-pointer">Services</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-6 ">
              <li className="font-semibold cursor-pointer">
                <FaLinkedinIn size={20} />
              </li>
              <li className="font-semibold cursor-pointer">
                <FaInstagram size={20} />
              </li>
              <li className="font-semibold cursor-pointer">
                <FaFacebookF size={20} />
              </li>
              <li className="font-semibold cursor-pointer">
                <FaTwitter size={20} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
