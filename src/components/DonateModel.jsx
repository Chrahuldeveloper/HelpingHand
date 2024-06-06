import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function DonateModel({ setistoggle, qrCode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="space-y-3 bg-white p-7">
        <div className="flex justify-end">
          <RxCross2
            size={28}
            onClick={() => {
              setistoggle(false);
            }}
            className="cursor-pointer"
          />
        </div>
        <img src={qrCode} className="max-w-xs" alt="" />
        <button className="w-full text-center text-white bg-green-500 rounded-lg py-2.5 font-semibold text-sm">
          Download
        </button>
      </div>
    </div>
  );
}
