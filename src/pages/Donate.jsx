import React from "react";

export default function Donate() {
  return (
    <>
      <div className="flex flex-col gap-3 md:max-w-xl  md:ml-48">
        <h1 className="order-2 px-6 text-lg font-semibold">
          Help us evacuate Gaza to survive from the war!
        </h1>
        <div>
          <img
            src="https://images.gofundme.com/7WqslE_-wlFfWtAilcmQY_GKsVo=/720x405/https://d2g8igdw686xgo.cloudfront.net/79366043_1716193614118786_r.jpeg"
            alt=""
            className="rounded-lg max-w-md md:max-w-xl mx-auto mt-5 hover:brightness-75  ease-in-out duration-500"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center mx-3 gap-3 mt-5 md:max-w-xl md:ml-48">
        <button className="bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-500 py-3 font-semibold rounded-full md:hidden">
          Share
        </button>
        <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-3 font-semibold rounded-full md:hidden">
          Donate Now
        </button>

        <div className="mb-5 my-1">
          <p className="px-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quod
            minus quidem nobis velit laboriosam tempore magni deserunt quam,
            atque natus consectetur, dignissimos doloremque temporibus incidunt
            excepturi delectus officiis possimus? Quia quaerat in nam quisquam,
            quae qui incidunt fugit placeat ipsum nobis cum iusto. Eaque, porro.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quod
            minus quidem nobis velit laboriosam tempore magni deserunt quam,
            atque natus consectetur, dignissimos doloremque temporibus incidunt
            excepturi delectus officiis possimus? Quia quaerat in nam quisquam,
            quae qui incidunt fugit placeat ipsum nobis cum iusto. Eaque, porro.
          </p>
          <div className="mt-3 flex gap-4 items-center justify-center ">
            <button className="border-[1px] px-20 py-2 rounded-xl border-gray-500 md:hidden">
              Donate
            </button>
            <button className="border-[1px] px-20 py-2 rounded-xl border-gray-500 md:hidden">
              Share
            </button>
            <button className="bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-500 py-3 font-semibold rounded-full px-24 hidden md:block">
              Share
            </button>
            <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-3 font-semibold rounded-full px-24 hidden md:block">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
