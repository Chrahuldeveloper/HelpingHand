import React from "react";

export default function Footer() {
  return (
    <>
      <div className="border-t-[1px] border-gray-300 p-6 flex md:flex-row flex-col justify-around px-20 items-center">
        <div>
          <h1 className="max-w-lg text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, vitae?
          </h1>
        </div>
        <div className="flex gap-x-20">
          <div>
            <ul className="space-y-3">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Home</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
