import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Footer, Loader, Navbar } from "../components";
import { Link } from "react-router-dom";

export default function DonatePage() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const userCollectionRef = collection(db, "USERS");
      const snapshot = await getDocs(userCollectionRef);
      const allFundraises = snapshot.docs.flatMap(
        (doc) => doc.data().fundraises || []
      );
      setFeaturedCards(allFundraises);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading && <Loader />}
     <Navbar/>
      <div className="grid justify-center grid-cols-1 gap-6 px-5 my-10 md:grid-cols-2 lg:grid-cols-3 md:px-20 place-items-center">
        {featuredCards?.map((fundraise, i) => (
          <div key={i} className="p-5 space-y-2 bg-white rounded-lg shadow-sm">
            <img
              src={fundraise.imageUrl}
              className="w-full max-w-sm duration-500 ease-in-out rounded-lg cursor-pointer hover:brightness-75"
              alt={"Fundraise"}
            />
            <h1 className="mt-2 text-lg font-semibold underline">
              {fundraise.title}
            </h1>
            <p className="mb-2 text-sm text-gray-600 underline">
              {fundraise.story.length > 100
                ? `${fundraise.story.substring(0, 100)}...`
                : fundraise.story}
            </p>
            <p className="font-semibold ">{fundraise.Hatages}</p>
            <div className="flex items-end justify-between">
              <p className="px-10 text-sm font-semibold border-[1px] py-1.5 rounded-full border-gray-300">
                $1000
              </p>
              <Link
                to={"/FullDonation"}
                state={{
                  img: fundraise.imageUrl,
                  title: fundraise.title,
                  story: fundraise.story,
                }}
              >
                <button className="border-green-400 border-[1px] px-14 py-1.5 rounded-full cursor-pointer hover:bg-green-500 hover:text-white duration-500 ease-in-out text-sm font-semibold mt-4">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
