import React from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";

const Title = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex-grow flex flex-col justify-center items-center text-center text-black">
          <div className="mb-5 font-['MangoDdobak-B'] text-[#E86896]">
            <p className="text-6xl mb-5 sm:text-8xl md:text-9xl lg:text-9xl">
              함께하는
            </p>
            <p className="text-6xl mb-5 sm:text-8xl md:text-9xl lg:text-9xl">
              다이어트
            </p>
            <p className="text-6xl mb-5 sm:text-6xl md:text-9xl lg:text-9xl">
              챌린지
            </p>
          </div>

          <div className="font-['MangoDdobak-B'] text-2xl sm:text-4xl md:text-6xl lg:text-8xl mt-12">
            <p className="mb-2">5가지 혜택 받고</p>
            <p className="mb-20">건강하게 같이 다이어트하기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
