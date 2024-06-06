import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Loader } from "../components";
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
      console.log(allFundraises);
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
      {isLoading ? <Loader /> : null}
      <div className="grid justify-center grid-cols-1 gap-6 px-5 mt-6 md:grid-cols-2 lg:grid-cols-3 md:px-20 place-items-center">
        {featuredCards?.map((fundraise, i) => (
          <div key={i} className="p-5 space-y-2 bg-white rounded-lg shadow-md">
            <img
              src={fundraise.imageUrl}
              className="w-full max-w-sm duration-500 ease-in-out rounded-lg cursor-pointer hover:brightness-75"
              alt={fundraise.title}
            />
            <h1 className="text-lg font-semibold">{fundraise.title}</h1>
            <p className="text-sm text-gray-600">{fundraise.story}</p>
            <div className="flex justify-end">
              <Link>
                <button className="border-green-400 border-[1px] px-8 py-1.5 rounded-full cursor-pointer hover:bg-green-500 hover:text-white duration-500 ease-in-out text-sm font-semibold">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
