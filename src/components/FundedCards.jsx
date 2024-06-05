import React from "react";
import { GiNothingToSay } from "react-icons/gi";

export default function FundedCards() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10 space-y-2">
        <GiNothingToSay size={120} color="gray" />
        <h1 className="text-sm text-slate-500">You have nothing:(</h1>
      </div>
    </div>
  );
}
