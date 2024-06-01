import React, { useId, useRef, useState } from "react";
import { db, storage } from "../Firebase"; 
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { Loader } from "../components";

export default function Signin() {
  const qrref = useRef(null);
  const userjwt = useId();

  const [data, setData] = useState({
    Name: "",
    email: "",
    Phone: "",
    Password: "",
    Location: "",
    Ngo: "",
    qr: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const getUserlocatiom = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (location, err) => {
          const url = `https://nominatim.openstreetmap.org/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json`;
          const res = await fetch(url);
          const userPosition = await res.json();
          setData({ ...data, Location: userPosition.display_name });
          if (err) {
            alert("Unexpected error. Try again later.");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateAccount = async () => {
    try {
      setIsLoading(true);
      await setDoc(doc(db, "USERS", userjwt), data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleQRUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `qr-codes/${userjwt}-${file.name}`);
      try {
        setIsLoading(true);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setData({ ...data, qr: downloadURL });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && <Loader />}
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
            onChange={(e) => setData({ ...data, Name: e.target.value })}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl"
            placeholder="Email Address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Phone Number"
            value={data.Phone}
            onChange={(e) => setData({ ...data, Phone: e.target.value })}
          />
          <input
            type="password"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Password"
            value={data.Password}
            onChange={(e) => setData({ ...data, Password: e.target.value })}
          />
          <input
            type="text"
            onClick={getUserlocatiom}
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Location"
            value={data.Location}
            onChange={(e) => setData({ ...data, Location: e.target.value })}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Ngo Name"
            value={data.Ngo}
            onChange={(e) => setData({ ...data, Ngo: e.target.value })}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl "
            placeholder="Upload QRCODE"
            onClick={() => qrref.current.click()}
            value={data.qr ? "QR Code Uploaded" : ""}
            readOnly
          />
          <input
            type="file"
            className="hidden"
            ref={qrref}
            onChange={handleQRUpload}
          />
        </div>
        {data.qr && (
          <div className="mt-4">
            <p className="text-center">QR Code Preview:</p>
            <img src={data.qr} alt="QR Code Preview" className="mx-auto mt-2" />
          </div>
        )}
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
