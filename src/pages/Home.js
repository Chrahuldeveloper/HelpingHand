import React, { useState, useEffect } from "react";
import { Footer, Loader, Navbar } from "../components/index";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from "react-router-dom";

export default function Home() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <Navbar />
      <Link to={"/Donate"}>
        <div className="profile-page"></div>
      </Link>
      <div className="px-8 my-10 space-y-3 md:px-32">
        <h1 className="text-lg font-semibold md:text-3xl">
          Support a fundraiser
        </h1>
        <p className="md:text-lg">
          Pick a cause close to your heart and donate now
        </p>
      </div>
      <div className="grid justify-center grid-cols-1 gap-6 px-5 my-10 md:grid-cols-2 lg:grid-cols-3 md:px-20 place-items-center">
        {featuredCards?.map((fundraise, i) => (
          <div key={i} className="p-5 space-y-2 bg-white shadow-sm rounded-xl ">
            <img
              src={fundraise.imageUrl}
              className="w-full max-w-md duration-500 ease-in-out rounded-lg cursor-pointer hover:brightness-75"
              alt={fundraise.title}
            />

            <h1 className="text-lg font-semibold underline">
              {fundraise.title}
            </h1>
            <p className="text-sm text-gray-600 underline">
              {fundraise.story.slice(0, 80)}...
            </p>
            <p className="font-semibold ">{fundraise.Hatages}</p>
            <div className="flex items-end justify-between">
              <p className="px-8 text-sm font-semibold border-[1px] py-1.5 rounded-full border-gray-300">
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
                <button className="border-green-400 border-[1px] px-8 py-1.5 rounded-full cursor-pointer hover:bg-green-500 hover:text-white duration-500 ease-in-out text-sm font-semibold mt-4">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-5">
        <Link to={"/Donate"}>
          <button className="border-[1px] px-20 py-1.5 rounded-lg font-semibold hover:bg-green-500 ease-in-out duration-500 hover:text-white border-slate-300">
            View All
          </button>
        </Link>
      </div>
      <div className="bg-[#f0fce9] px-8 mt-5 py-24 md:rounded-full md:mx-4">
        <div className="space-y-5 md:pl-28">
          <h1 className="text-xl font-semibold md:text-3xl md:max-w-md ">
            Fundraising on HelpingHand is easy, powerful, and trusted.
          </h1>
          <p className="leading-8 md:max-w-xl md:text-lg">
            Get what you need to help your fundraiser succeed on GoFundMe,
            whether you’re raising money for yourself, friends, family, or
            charity. With no fee to start, GoFundMe is the world’s leading
            crowdfunding platform—from memorial tributes and funerals to medical
            emergencies and nonprofits. Whenever you need help, you can ask
            here.
          </p>
        </div>
      </div>
      <div className="bg-[#012d19] px-8 my-8 py-24 md:rounded-full md:mx-4">
        <div className="space-y-5 text-white md:pl-28">
          <h1 className="text-xl font-semibold md:text-3xl md:max-w-md ">
            We've got you covered.
          </h1>
          <p className="leading-8 md:max-w-xl md:text-lg">
            HelpingHand is a trusted leader in online fundraising. With simple
            pricing and a team of Trust & Safety experts in your corner, you can
            raise money or make a donation with peace of mind.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
