"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

const Calories = () => {
  return (
    <div
      id="calories"
      className="scrollbar-hide min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
        <div className="flex justify-center mb-12 w-full space-x-4">
          <Image
            className="rounded-xl"
            src="/img/cal_ex1.png"
            alt="calory-tracker image"
            width={150}
            height={300}
          />
          <Image
            className="rounded-xl"
            src="/img/cal_ex2.png"
            alt="calory-tracker image"
            width={150}
            height={300}
          />
        </div>
        <h3 className="text-center text-2xl font-bold mb-4 text-[#E86896]">
          AI 식단 칼로리 측정
        </h3>
        <p className="text-center text-lg">
          AI 기술을 통해 식단의 칼로리를 측정해드립니다.
        </p>
        <p className="text-center text-lg font-semibold">
          정확한 칼로리를 위해서 측정할 때<br /> 음식과 양을 적어 주세요.
        </p>
        <p className="text-center mt-12 text-xl font-bold">식단 인증방법</p>
        <div>
          <Image
            src="/img/how_to.png"
            alt="how to clear mission"
            width={280}
            height={200}
          />
        </div>
        <div className="text-center mt-5">
          <p>
            인증하기 버튼을 눌러
            <br /> 채팅방에 공유해주세요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calories;
