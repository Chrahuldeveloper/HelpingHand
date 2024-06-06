import React, { useEffect, useState } from "react";
import { Footer, FundRaiseModel, FundedCards } from "../components";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export default function UserProfile() {
  const [toggle, settoggle] = useState(false);
  const [userData, setUserData] = useState(null);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!jwt) throw new Error("No JWT found");
        const docRef = doc(db, "USERS", jwt);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          console.log("User Data: ", data);
          setUserData(data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, [jwt]);

  return (
    <>
      <div className="p-8 border-b-[1px] border-gray-300 shadow-sm">
        <h1 className="text-lg font-semibold text-green-700">HelpingHand</h1>
      </div>

      <div className="flex flex-col items-center justify-center my-10">
        <img
          src={userData?.profilePic}
          className="object-cover w-48 h-48 duration-500 ease-in-out rounded-full cursor-pointer hover:brightness-75"
          alt="pic"
        />
        <div className="max-w-xs mt-2 space-y-2 text-center">
          <h1 className="text-lg font-bold">{userData?.Name}</h1>
          <p className="text-sm">{userData?.story}</p>
        </div>
        <div className="mt-5 space-x-5">
          <button
            onClick={() => {
              settoggle(true);
            }}
            className="border-[1px] px-24 py-2.5 font-semibold text-sm hover:bg-green-500 hover:text-white ease-in-out duration-500"
          >
            FundRaise
          </button>
        </div>
      </div>
      <FundedCards />
      {toggle && <FundRaiseModel settoggle={settoggle} />}
      <Footer />
    </>
  );
}
