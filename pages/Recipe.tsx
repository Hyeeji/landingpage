"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

const Recipe = () => {
  return (
    <div
      id="recipe"
      className="min-h-screen flex items-center justify-center scrollbar-hide"
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
        <div className="mb-4 flex justify-center rounded-xl shadow-lg p-6">
          <Image
            src="/img/recipe_ex.png" // 이미지 경로
            alt="recipe image"
            width={250}
            height={250}
          />
        </div>
        <h3 className="text-center text-2xl font-bold mb-4 text-[#E86896]">
          맛있는 다이어트 레시피 <br />
          100개 제공
        </h3>
        <p className="text-center text-lg">잘 정리 된 다이어트 레시피로</p>
        <p className="text-center text-lg font-semibold">
          맛있고 건강하게 다이어트 하세요
        </p>
        <p className="text-center mt-12 text-xl font-bold">레시피 특징</p>
        <div className="text-center">
          <p className="flex justify-center items-center shadow-lg border-[#E86896] text-[#E86896] rounded-xl text-lg p-3 m-4 w-auto h-20">
            재료별로 정리해서 보기 편해요
          </p>
          <p className="flex justify-center items-center shadow-lg border-[#E86896] text-[#E86896] rounded-xl text-lg p-3 m-4 w-auto h-20">
            간단해서 쉽게 따라할 수 있어요
          </p>
          <p className="flex justify-center items-center shadow-lg border-[#E86896] text-[#E86896] rounded-xl text-lg p-3 m-4 w-auto h-20">
            간식 레시피도 포함되어 있어요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
