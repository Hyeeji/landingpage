import React from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";

const Title = () => {
  return (
    <div className="relative h-screen w-full">
      <Head>
        <title>다이어트 챌린지</title>
        <meta name="description" content="Welcome to our landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="absolute inset-0 z-[-1]">
        <Image
          src="/img/background/Title.png"
          alt="pink background image"
          fill={true}
      </div> */}
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex-grow flex flex-col justify-center items-center text-center text-black">
          <div className="mb-5 font-['MangoDdobak-B'] text-[#E86896]">
            <p className="text-8xl mb-5 sm:text-8xl md:text-9xl lg:text-9xl">
              함께하는
            </p>
            <p className="text-8xl mb-5 sm:text-8xl md:text-9xl lg:text-9xl">
              다이어트
            </p>
            <p className="text-8xl mb-5 sm:text-6xl md:text-9xl lg:text-9xl">
              챌린지
            </p>
          </div>

          <div className="font-['MangoDdobak-B'] text-3xl sm:text-4xl md:text-6xl lg:text-8xl mt-12">
            <p className="mb-3">5가지 혜택 받고</p>
            <p>건강하게 같이 다이어트하기</p>
          </div>
        </div>
        {/* <div
          className="animate-bounce font-['MangoDdobak-B']   h-16 w-44 sm:h-16 sm:w-44 md:h-20 md:w-48 lg:h-24 lg:w-52 flex justify-center items-center
          bg-white border-2 border-[#E86896] rounded-full
          cursor-pointer text-xl sm:text-xl md:text-xl lg:text-xl mb-24 sm:mb-24 md:mb-28 lg:mb-32"
        >
          지금 참여하기
        </div> */}
      </div>
    </div>
  );
};

export default Title;
