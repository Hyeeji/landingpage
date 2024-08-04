"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

const Mission = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      id="mission"
      className="min-h-screen flex bg-gray-900 
       items-center justify-center scrollbar-hide"
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
        <div className="w-full mb-12 flex justify-center">
          <Image
            src="/img/mission.png" // 이미지 경로
            alt="mission image"
            width={200}
            height={200}
            className="mx-auto rounded-2xl"
          />
        </div>
        <h3 className="text-center text-2xl font-bold mb-4 text-[#E86896]">
          챌린지 미션
        </h3>
        <p className="text-center text-lg text-white">
          매일 몸무게, 식단 2번 인증
        </p>
        <p className="text-center text-lg font-semibold text-white">
          10시 전까지 채팅방에 인증해주세요
        </p>
        <p
          className="text-center mt-5 text-lg underline cursor-pointer text-white"
          onClick={handleShowDetails}
        >
          인증 방법 확인하기
        </p>
        {showDetails && (
          <div className="mt-4 justify-center items-center text-center text-white">
            <p className="shadow-lg border-[#E86896] rounded-xl text-lg p-3 m-4 w-auto">
              몸무게는 아래 사진처럼 <br />
              발이 보이도록 인증해주세요
            </p>
            <div className="flex justify-center mb-4">
              <Image
                className="rounded-2xl"
                src="img/weight.jpeg"
                alt="weight"
                width={200}
                height={200}
              />
            </div>
            <p className="shadow-lg border-[#E86896] rounded-xl text-lg p-3 m-4 w-auto">
              식단은 칼로리 측정 후 <br /> 인증 하기 버튼을 눌러 인증해주세요
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mission;
