import React from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";

const Title = () => {
  return (
    <div className="relative h-screen w-full scrollbar-hide">
      <Head>
        <title>다이어트 챌린지</title>
        <meta name="description" content="Welcome to our landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/img/background/Title.png"
          alt="pink background image"
          fill={true}
        />
      </div>
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex-grow flex flex-col justify-center items-center text-bold text-center text-[5rem] text-black">
          <p className="mt-4">함께하는</p>
          <p>다이어트</p>
          <p>챌린지</p>
          <div className="text-3xl m-12">
            <p className="mb-3">5가지 혜택 받고</p>
            <p>건강하게 다이어트하기</p>
          </div>
        </div>
        <div
          className="h-16 w-48 flex justify-center items-center
          bg-white border-2 border-[#E86896] rounded-full
          cursor-pointer text-[#E86896] text-xl mb-32"
        >
          지금 참여하기
        </div>
      </div>
    </div>
  );
};

export default Title;
