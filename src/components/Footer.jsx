import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="border-t-[1px] bg-[#008a24] border-gray-300 py-12  flex  md:flex-row flex-col md:justify-around justify-start px-20 md:items-center gap-8">
        <div className="flex flex-col items-center space-y-1">
          <h1 className="max-w-sm mx-auto text-2xl font-semibold text-center text-white md:text-3xl lg:text-4xl">
            HelpingHand
          </h1>
          <p className="text-sm text-white md:text-base">
            Every donation matters
          </p>
        </div>
        <div className="flex flex-col justify-start gap-10 md:gap-20 md:items-center md:flex-row md:justify-around">
          <div>
            <ul className="space-y-3 text-white">
              <li className="font-semibold cursor-pointer">Home</li>
              <li className="font-semibold cursor-pointer">About</li>
              <li className="font-semibold cursor-pointer">Contact</li>
              <li className="font-semibold cursor-pointer">Email</li>
              <li className="font-semibold cursor-pointer">Services</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-white">
              <li className="font-semibold cursor-pointer">Home</li>
              <li className="font-semibold cursor-pointer">About</li>
              <li className="font-semibold cursor-pointer">Contact</li>
              <li className="font-semibold cursor-pointer">Email</li>
              <li className="font-semibold cursor-pointer">Services</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-white">
              <li className="font-semibold cursor-pointer">Team</li>
              <li className="font-semibold cursor-pointer">Help</li>
              <li className="font-semibold cursor-pointer">Guildlines</li>
              <li className="font-semibold cursor-pointer">Approvels</li>
              <li className="font-semibold cursor-pointer">Support</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-6 ">
              <li className="font-semibold cursor-pointer">
                <FaLinkedinIn size={20} color="white" />
              </li>
              <li className="font-semibold cursor-pointer">
                <FaInstagram size={20} color="white" />
              </li>
              <li className="font-semibold cursor-pointer">
                <FaFacebookF size={20} color="white" />
              </li>
              <li className="font-semibold cursor-pointer">
                <FaTwitter size={20} color="white" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
