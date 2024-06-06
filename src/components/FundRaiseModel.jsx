import React, { useMemo, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../Firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { Loader } from "../components/index";
export default function FundRaiseModel({ settoggle }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [isloading, setisloading] = useState("");

  const jwt = localStorage.getItem("jwt");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const docRef = useMemo(() => doc(db, "USERS", jwt), [jwt]);

  const handleSubmit = async () => {
    try {
      setisloading(true);
      let imageUrl = null;
      if (imageFile) {
        const storageRef = ref(storage, `fundraises/${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }
      const fundraiseData = {
        title,
        story,
        imageUrl,
        createdAt: new Date(),
      };
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        await updateDoc(docRef, {
          fundraises: [...(docSnapshot.data().fundraises || []), fundraiseData],
        });
      } else {
        await setDoc(docRef, { fundraises: [fundraiseData] });
      }
      settoggle(false);
      setisloading(false);
    } catch (error) {
      console.error("Error creating fundraise:", error);
      setisloading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-60 backdrop-blur-sm">
        <div className="p-8 bg-white w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] flex flex-col justify-center ">
          <div className="flex justify-end mb-4">
            <RxCross2
              onClick={() => {
                settoggle(false);
              }}
              size={25}
              cursor={"pointer"}
            />
          </div>
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
                className="object-cover w-48 h-48 mx-auto rounded-md"
              />
            </div>
          )}
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl my-3"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="border-[1px] border-slate-300 outline-none py-4 px-4 rounded-xl my-3"
            placeholder="Story"
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="py-2.5 font-semibold text-white bg-green-500"
          >
            Save
          </button>
        </div>
        {isloading ? <Loader /> : null}
      </div>
    </>
  );
}
