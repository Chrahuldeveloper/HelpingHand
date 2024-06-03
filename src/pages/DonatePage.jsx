import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Loader } from "../components";

export default function DonatePage() {
  const [featuredCards, setfeaturedCards] = useState([]);

  const [isloading, setisloading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setisloading(true);
      const docRef = collection(db, "USERS");
      const snapshot = await getDocs(docRef);
      console.log(snapshot.docs);
      setfeaturedCards(snapshot.docs);
      setisloading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isloading ? <Loader /> : null}
      <div className="grid justify-center grid-cols-3 px-5 mt-6 md:px-20 place-items-center">
        {featuredCards?.map((_, i) => {
          return (
            <React.Fragment key={i}>
              <div className="p-5 space-y-2">
                <img
                  src={_.img}
                  className="max-w-sm duration-500 ease-in-out rounded-lg cursor-pointer hover:brightness-75"
                  alt=""
                />
                <h1 className="text-lg font-semibold">{_.Tittle}</h1>
                <div className="flex justify-end ">
                  <button className="border-green-400 border-[1px] px-8 py-1.5 rounded-full cursor-pointer hover:bg-green-500 hover:text-white duration-500 ease-in-out text-sm font-semibold">
                    Donate
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
