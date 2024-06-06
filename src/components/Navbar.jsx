import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [istoggle, setistoggle] = useState(false);

  const jwt = localStorage.getItem("jwt");

  return (
    <>
      <div className="p-5 border-[1px] rounded-full lg:max-w-5xl mx-auto my-3 hidden lg:flex justify-between">
        <ul className="flex items-center gap-4 px-4 text-sm text-gray-700">
          <h1 className="text-xl font-semibold text-green-700">HelpingHand</h1>
          <Link to="/Donate">
            <li className="font-semibold cursor-pointer">Donate</li>
          </Link>
          <Link to="/start">
            <li className="font-semibold cursor-pointer">FundRaise</li>
          </Link>
        </ul>
        <div>
          {jwt ? (
            <Link to={"/profile"}>
              <button className="rounded-full border-[1.2px] border-gray-300 px-10 py-1.5 text-sm font-semibold hover:bg-green-500 hover:text-white ease-in-out duration-500">
                Your Account
              </button>
            </Link>
          ) : (
            <Link to={"/Signin"}>
              <button className="rounded-full border-[1.2px] border-gray-300 px-10 py-1.5 text-sm font-semibold hover:bg-green-500 hover:text-white ease-in-out duration-500">
                Signup
              </button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-between p-5 md:hidden">
        <div>
          <h1 className="text-lg font-semibold text-green-700">HelpingHand</h1>
        </div>
        <div>
          <CiMenuFries
            onClick={() => {
              setistoggle(true);
            }}
            size={25}
            className="cursor-pointer"
          />
        </div>
      </div>

      {istoggle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-60 backdrop-blur-md">
          <aside className="w-[75vw] bg-white h-screen absolute right-0 p-10">
            <div className="flex justify-end">
              <RxCross2
                onClick={() => {
                  setistoggle(false);
                }}
                size={25}
                className="cursor-pointer"
              />
            </div>
            <ul className="space-y-5">
              {jwt ? (
                <Link to={"/profile"}>
                  <li className="p-3 space-y-2 rounded-lg cursor-pointer bg-gray-50">
                    <h1 className="text-lg ">Your Account</h1>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                  </li>
                </Link>
              ) : (
                <Link to={"/Signin"}>
                  <li className="p-3 space-y-2 rounded-lg cursor-pointer bg-gray-50">
                    <h1 className="text-lg ">SignUp</h1>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                  </li>
                </Link>
              )}
              <Link to="/Donate">
                <li className="p-3 mt-5 space-y-2 rounded-lg cursor-pointer bg-gray-50">
                  <h1 className="text-lg ">Donate</h1>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>
              </Link>
              <Link to="/start">
                <li className="p-3 space-y-2 rounded-lg cursor-pointer bg-gray-50">
                  <h1 className="text-lg ">FundRaise</h1>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>
              </Link>
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}
