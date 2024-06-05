import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function FundRaiseModel() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="p-8 bg-white w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] flex flex-col justify-center ">
        <div className="flex justify-end mb-4">
          <RxCross2 size={25} cursor={"pointer"} />
        </div>
        <input
          type="text"
          className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl my-3"
          placeholder="Name"
        />
        <input
          type="text"
          className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl my-3"
          placeholder="Tittle"
        />
        <input
          type="text"
          className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl my-3"
          placeholder="Story"
        />
        <input
          type="file"
          accept="image/*"
          className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl my-3"
          onChange={handleImageUpload}
        />
        {selectedImage && (
          <div className="my-3">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-48 h-auto mx-auto rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
