import React, { useId, useRef, useState } from "react";
import { db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Signin() {
  const qrref = useRef(null);

  const [data, setdate] = useState({
    Name: "",
    email: "",
    Phone: "",
    Password: "",
    Location: "",
    Ngo: "",
    qr: "",
  });

  const userjwt = useId();

  const getUserlocatiom = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (location, err) => {
          const url = `https://nominatim.openstreetmap.org/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json`;
          const res = await fetch(url);
          const userPosition = res.json();
          userPosition.then((position) => {
            setdate({ ...data, Location: position.display_name });
          });
          if (err) {
            alert("unexpected error Try again later");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateAccount = async () => {
    try {
      await setDoc(doc(db, "USERS", userjwt), data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="px-8 mx-auto py-7 md:max-w-md">
        <p className="text-sm ">Welcome to HelpingHand!</p>
        <div className="my-3.5">
          <h1 className="text-xl font-semibold">Create an account or Login</h1>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Name"
            value={data.Name}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl"
            placeholder="Email Address"
            value={data.email}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Phone Number"
            value={data.Phone}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Password"
            value={data.Password}
          />
          <input
            type="text"
            onClick={getUserlocatiom}
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Location"
            value={data.Location}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Ngo Name"
            value={data.Ngo}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Upload QRCODE"
            onClick={() => {
              qrref.current.click();
            }}
          />
          <input
            type="file"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl hidden"
            placeholder="qr"
            ref={qrref}
          />
        </div>
        <p className="mt-3 font-semibold text-center text-slate-500">OR</p>
        <p className="max-w-sm pl-3 mt-3 text-sm font-semibold">
          By clicking the Sign Up button below, you agree to the GoFundMe Terms
          of Service and acknowledge the Privacy Notice.
        </p>
        <button
          onClick={handleCreateAccount}
          className="w-full py-3 mt-5 font-semibold text-white rounded-lg bg-zinc-800"
        >
          Signup
        </button>
      </div>
    </>
  );
}
