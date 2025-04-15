import React from "react";
import "../styles/globals.css";

const RemindText = () => {
  return (
    <div className="h-dvh w-full bg-black">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <div className="mb-5 font-['Pretendard'] font-bold">
            <p className="text-white text-4xl mb-5 sm:text-6xl md:text-8xl lg:text-9xl">
            성공하셨나요..?
            </p>
            <p className="text-red-500 text-xl sm:text-3xl md:text-4xl lg:text-5xl">
            ※성공하셨다면 나가셔도 됩니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemindText;
