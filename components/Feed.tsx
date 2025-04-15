"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

const Feed = () => {

  return (
    <div
      id="feed"
      className="min-h-screen flex flex-col bg-[#FCEDF2] items-center justify-center scrollbar-hide"
    >
      <h3 className="text-center text-2xl font-bold mb-4">
          참여자 식단 공유, 응원 받기
      </h3>
      <div className="flex flex-col items-center justify-center w-full container mx-auto px-4 py-16">
       <Image
          className="rounded-3xl"
          src="/img/app_feed.png"
          alt="feed image"
          width={400}
          height={400}
        />
        </div>
        <p className="text-center text-lg">
          식단과 운동에 응원을 받을 수 있고 <br />
          다른 참여자 식단을 볼 수 있어요
        </p>
      </div>
  );
};

export default Feed;
