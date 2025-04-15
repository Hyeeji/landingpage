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
      <h3 className="text-center text-2xl font-bold mb-4 text-[#E86896]">
          AI 식단 칼로리 무료 측정
        </h3>
        <div className="flex justify-center m-12 w-full space-x-4">
          <Image
            className="rounded-3xl"
            src="/img/app_cal1.PNG"
            alt="calory-tracker image"
            width={400}
            height={400}
          />
        </div>
        <p className="text-center text-lg">
          AI 기술을 통해 식단의 칼로리를 측정해드립니다.
        </p>
        <p className="text-center text-lg font-semibold">
          정확한 칼로리를 위해서 측정할 때<br /> 음식과 양을 적어 주세요.
        </p>
      </div>
    </div>
  );
};

export default Calories;
