import React from "react";
import { RxCross2 } from "react-icons/rx";
import Loader from "./Loader";

export default function DonateModel({ setistoggle, qrCode, loading }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="p-4 space-y-3 bg-white">
        <div className="flex justify-end">
          <RxCross2
            size={28}
            onClick={() => {
              setistoggle(false);
            }}
            className="cursor-pointer"
          />
        </div>
        {loading ? <Loader /> : null}
        <img src={qrCode} className="max-w-sm" alt="" />
      </div>
    </div>
  );
}
