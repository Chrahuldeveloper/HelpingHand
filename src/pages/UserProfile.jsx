import React from "react";
import { Footer, FundRaiseModel } from "../components";

export default function UserProfile() {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-16">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
          className="object-cover w-48 h-48 duration-500 ease-in-out rounded-full cursor-pointer hover:brightness-75"
          alt=""
        />
        <div className="max-w-xs mt-2 space-y-2 text-center">
          <h1 className="text-lg font-bold">Rahul</h1>
          <p className="max-w-md text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            sint deserunt numquam!
          </p>
        </div>
        <div className="mt-5 space-x-5">
          <button className="border-[1px] px-10 py-2.5 font-semibold text-sm hover:bg-green-500 hover:text-white ease-in-out duration-500">
            Edit Profile
          </button>
          <button className="border-[1px] px-10 py-2.5 font-semibold text-sm hover:bg-green-500 hover:text-white ease-in-out duration-500">
            FundRaise
          </button>
        </div>
      </div>
      <FundRaiseModel/>
      <Footer/>
    </>
  );
}
