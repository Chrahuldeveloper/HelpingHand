import React from "react";

export default function Footer() {
  return (
    <>
      <div className="border-t-[1px] border-gray-300 p-6 flex md:flex-row flex-col justify-around px-20 items-center gap-8">
        <div>
          <h1 className="max-w-md mx-auto font-semibold text-center md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, vitae?
          </h1>
        </div>
        <div className="flex gap-x-20">
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
            <ul className="space-y-3">
              <li className="font-semibold cursor-pointer">Linkdin</li>
              <li className="font-semibold cursor-pointer">Instgram</li>
              <li className="font-semibold cursor-pointer">Facebook</li>
              <li className="font-semibold cursor-pointer">Youtube</li>
              <li className="font-semibold cursor-pointer">Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
