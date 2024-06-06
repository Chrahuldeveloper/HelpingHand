import React from "react";
import { Navbar } from "../components";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <>
      <Navbar />

      <div className="items-center justify-center my-10 md:flex">
        <div className="md:order-2">
          <img
            className="max-w-md mx-auto duration-500 ease-in-out rounded-lg md:max-w-xl lg:max-w-2xl hover:brightness-75"
            src="https://www.gofundme.com/c/wp-content/uploads/2024/05/Stocksy_txp14a275bcIDw300_Large_4574712-aspect-ratio-796-505.jpg"
            alt=""
          />
        </div>
        <div className=" p-5 md:translate-x-28 md:bg-white md:rounded-md z-50 border-[1px] border-gray-100">
          <h1 className="text-2xl font-bold leading-8 md:text-4xl md:max-w-md">
            Start fundraising on HelpingHand
          </h1>
          <p className="max-w-md mt-4 text-xl leading-9">
            Everything you need to help your fundraiser succeed is here. Start
            fundraising on the #1 crowdfunding platform today
          </p>
          <Link to={"/Signin"}>
            <button className="py-2 mt-5 text-sm font-semibold text-white bg-green-600 rounded-full px-9">
              Go Donate
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
