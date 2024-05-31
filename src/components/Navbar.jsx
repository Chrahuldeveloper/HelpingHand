import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [istoggle, setistoggle] = useState(false);

  return (
    <>
      <div className="p-5 border-[1px] rounded-full lg:max-w-5xl mx-auto my-3 hidden  lg:flex justify-between">
        <ul className="flex items-center gap-4 px-4 text-gray-500 text-sm">
          <li className="cursor-pointer">Donate</li>
          <li className="cursor-pointer">FundRaise</li>
        </ul>
        <div>
          <button className="rounded-full border-[1.2px] border-gray-300 px-10 py-1.5 text-sm font-semibold hover:bg-green-500 hover:text-white ease-in-out duration-500">
            Signup
          </button>
        </div>
      </div>

      <div className="p-5 md:hidden flex justify-between">
        <div>
          <h1 className="text-green-700 font-semibold text-lg">HelpingHand</h1>
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
              <li className="cursor-pointer space-y-2 bg-gray-50 p-3 rounded-lg mt-5">
                <h1 className=" text-lg">Donate</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </li>
              <li className="cursor-pointer space-y-2 bg-gray-50 p-3 rounded-lg">
                <h1 className=" text-lg">FundRaise</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </li>
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}
