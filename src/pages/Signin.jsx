import React from "react";

export default function Signin() {
  return (
    <>
      <div className="py-7 px-8 md:max-w-md mx-auto">
        <p className="text-sm ">Welcome to HelpingHand!</p>
        <div className="my-6">
          <h1 className="text-xl font-semibold">Create an account or Login</h1>
          <p className=" my-3">Already have an account</p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Name"
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Password"
          />
        </div>
        <p className="text-center text-slate-500 font-semibold">OR</p>
        <div className="flex justify-center items-center mt-4">
          <button className="bg-green-500 py-2.5 w-full text-white font-semibold rounded-full">
            Google
          </button>
        </div>
        <p className="text-sm max-w-sm mt-5 pl-3">
          By clicking the Sign Up button below, you agree to the GoFundMe Terms
          of Service and acknowledge the Privacy Notice.
        </p>
        <button className="bg-zinc-800 mt-5 py-2.5 w-full text-white font-semibold rounded-full">
          Signup
        </button>
      </div>
    </>
  );
}
