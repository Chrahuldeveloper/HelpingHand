import React, { useState, useEffect } from "react";
import { DonateModel, Footer, Navbar, Loader } from "../components";
import { useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export default function Donate() {
  const [istoggle, setistoggle] = useState(false);
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const data = useLocation();

  useEffect(() => {
    const fetchUserQRCode = async () => {
      try {
        setLoading(true);
        const jwt = localStorage.getItem("jwt");
        const docRef = doc(db, "USERS", jwt);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setQrCode(userData.qr || null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserQRCode();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-3 mx-auto md:max-w-xl">
        <h1 className="order-2 px-3 text-lg font-semibold">
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
        <div className="my-1 mb-8">
          <p className="px-3">{data.state.story}</p>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <button
            onClick={() => {
              setistoggle(true);
            }}
            className="py-3 font-semibold rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 md:hidden"
          >
            Donate Now
          </button>
        )}
      </div>
        <div className="flex items-center justify-center gap-4 my-6">
          <button
            onClick={() => {
              setistoggle(true);
            }}
            className="hidden px-48 py-3 font-semibold rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 md:block"
          >
            Donate Now
          </button>
        </div>
      <Footer />
      {istoggle && <DonateModel setistoggle={setistoggle} qrCode={qrCode} loading={loading}/>}
    </>
  );
}
