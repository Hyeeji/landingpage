"use client";

import React, { useState } from "react";
import Image from "next/image";

const Calories = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      id="calories"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
        <div className="flex justify-center mb-12 w-full space-x-4">
          <Image
            src="/img/calculator.png"
            alt="calory-tracker image"
            width={150}
            height={300}
          />
          <Image
            src="/img/calories.png"
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
          정확한 칼로리를 위해서 측정할 때 음식과 양을 적어 주세요.
        </p>
        <p
          className="text-center mt-5 text-lg underline cursor-pointer"
          onClick={handleShowDetails}
        >
          식단 인증방법
        </p>
        {showDetails && (
          <div className="mt-4 text-center">
            <p className="flex justify-center items-center shadow-lg rounded-xl text-lg p-3 m-4 w-auto h-20">
              하단의 카카오톡 버튼을 눌러 채팅방에 공유해주세요
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calories;
