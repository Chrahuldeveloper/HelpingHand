import React from "react";
import { Footer, Navbar } from "../components/index";
export default function Home() {
  const featuredCards = [
    {
      img: "https://images.gofundme.com/SX4Z992dam4DCcsr_OAXH0vlnBg=/720x405/https://d2g8igdw686xgo.cloudfront.net/79580661_1713405437532707_r.jpeg",
      Tittle: "Lorem, ipsum dolor.",
    },
    {
      img: "https://images.gofundme.com/SX4Z992dam4DCcsr_OAXH0vlnBg=/720x405/https://d2g8igdw686xgo.cloudfront.net/79580661_1713405437532707_r.jpeg",
      Tittle: "Lorem, ipsum dolor.",
    },
    {
      img: "https://images.gofundme.com/SX4Z992dam4DCcsr_OAXH0vlnBg=/720x405/https://d2g8igdw686xgo.cloudfront.net/79580661_1713405437532707_r.jpeg",
      Tittle: "Lorem, ipsum dolor.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-5 md:flex-row">
        {featuredCards.map((_, i) => {
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

      <div className="bg-[#f0fce9] px-8 mt-5 py-24 md:rounded-full md:mx-4">
        <div className="space-y-5 md:pl-28">
          <h1 className="text-xl font-semibold md:text-3xl md:max-w-md ">
            Fundraising on GoFundMe is easy, powerful, and trusted.
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
            GoFundMe is a trusted leader in online fundraising. With simple
            pricing and a team of Trust & Safety experts in your corner, you can
            raise money or make a donation with peace of mind.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
