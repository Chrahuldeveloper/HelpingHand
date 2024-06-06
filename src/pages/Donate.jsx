import React, { useState } from "react";
import { DonateModel, Navbar } from "../components";
import { useLocation } from "react-router-dom";

export default function Donate() {
  const [istoggle, setistoggle] = useState(false);

  const data = useLocation();

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-3 mx-auto md:max-w-xl">
        <h1 className="order-2 px-6 text-lg font-semibold">
          {data.state.title}
        </h1>
        <div>
          <img
            src={data.state.img}
            alt=""
            className="max-w-md mx-auto mt-5 duration-500 ease-in-out rounded-lg md:max-w-xl hover:brightness-75"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 mx-3 mt-5 md:max-w-xl md:mx-auto">
        <button className="py-3 font-semibold rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-500 md:hidden">
          Share
        </button>
        <button
          onClick={() => {
            setistoggle(true);
          }}
          className="py-3 font-semibold rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 md:hidden"
        >
          Donate Now
        </button>
        <div className="my-1 mb-5">
          <p className="px-3">{data.state.story}</p>
          <div className="flex items-center justify-center gap-4 mt-3 ">
            <button
              onClick={() => {
                setistoggle(true);
              }}
              className="border-[1px] px-20 py-2 rounded-xl border-gray-500 md:hidden"
            >
              Donate
            </button>
            <button className="border-[1px] px-20 py-2 rounded-xl border-gray-500 md:hidden">
              Share
            </button>
            <button className="hidden px-24 py-3 font-semibold rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-500 md:block">
              Share
            </button>
            <button
              onClick={() => {
                setistoggle(true);
              }}
              className="hidden px-24 py-3 font-semibold rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 md:block"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
      {istoggle && <DonateModel setistoggle={setistoggle} />}
    </>
  );
}
