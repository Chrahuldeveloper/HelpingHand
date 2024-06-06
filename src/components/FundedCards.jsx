import React, { useEffect, useState } from "react";
import { GiNothingToSay } from "react-icons/gi";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Loader } from "../components";
import { Link } from "react-router-dom";

export default function FundedCards() {
  const [fundraises, setFundraises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserFundraises = async () => {
      try {
        setIsLoading(true);
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("No JWT found");

        const docRef = doc(db, "USERS", jwt);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          console.log(userData);
          setFundraises(userData.fundraises || []);
        } else {
          console.log("No such document!");
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching fundraises: ", error);
        setIsLoading(false);
      }
    };
    fetchUserFundraises();
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      {fundraises.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-10 space-y-2">
          <GiNothingToSay size={120} color="gray" />
          <h1 className="text-sm text-slate-500">You have nothing:(</h1>
        </div>
      ) : (
        <div className="grid justify-center grid-cols-1 gap-6 px-5 my-6 md:grid-cols-2 lg:grid-cols-3 md:px-20 place-items-center">
          {fundraises.map((fundraise, i) => (
            <div
              key={i}
              className="max-w-md p-5 space-y-2 bg-white rounded-lg shadow-sm border-[1px] border-slate-200"
            >
              <img
                src={fundraise.imageUrl}
                className="duration-500 ease-in-out rounded-md cursor-pointer hover:brightness-75"
                alt={fundraise.title}
              />
              <h1 className="text-lg font-semibold ">{fundraise.title}</h1>
              <p className="text-sm text-gray-600 w-36">{fundraise.story}</p>
              <div className="flex justify-end">
                <Link
                  to={"/FullDonation"}
                  state={{
                    img: fundraise.imageUrl,
                    title: fundraise.title,
                    story: fundraise.story,
                  }}
                >
                  <button className="border-green-400 border-[1px] px-8 py-1.5 rounded-full cursor-pointer hover:bg-green-500 hover:text-white duration-500 ease-in-out text-sm font-semibold">
                    Donate
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
