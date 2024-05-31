import React from "react";
import { Navbar } from "../components";

export default function Start() {
  return (
    <>
      <Navbar />

      <div className="my-10 md:flex items-center justify-center">
        <div className="md:order-2">
          <img
            className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto rounded-lg hover:brightness-75  ease-in-out duration-500"
            src="https://www.gofundme.com/c/wp-content/uploads/2024/05/Stocksy_txp14a275bcIDw300_Large_4574712-aspect-ratio-796-505.jpg"
            alt=""
          />
        </div>
        <div className="space-y-5 p-5 md:translate-x-28 md:bg-white md:rounded-md z-50 border-[1px] border-gray-100">
          <h1 className="text-2xl md:text-4xl md:max-w-md leading-8 font-bold">
            Start fundraising on GoFundMe
          </h1>
          <p className="leading-9 max-w-md text-xl  ">
            Everything you need to help your fundraiser succeed is here. Start
            fundraising on the #1 crowdfunding platform today
          </p>
          <button className="px-9 py-2 rounded-full bg-green-600 text-white font-semibold text-sm">
            Go Donate
          </button>
        </div>
      </div>
    </>
  );
}
