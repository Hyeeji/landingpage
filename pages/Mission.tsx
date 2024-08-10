"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

const Mission = () => {
  return (
    <div
      id="mission"
      className="min-h-screen flex flex-col bg-gray-900 
       items-center justify-center scrollbar-hide"
    >
      <h3 className="text-center text-3xl font-bold mb-4 text-[#E86896]">
        챌린지 미션
      </h3>
      <p className="text-center text-xl text-white">
        매일 몸무게, 식단 2번 인증
      </p>
      <p className="text-center text-xl font-semibold text-white">
        10시 전까지 채팅방에 인증해주세요
      </p>
      <p className="text-center mt-16 text-xl font-bold text-white">
        인증 방법
      </p>
      <div className="justify-center items-center text-center text-white">
        <p className="shadow-lg border-[#E86896] rounded-xl text-lg p-3 w-auto">
          몸무게 <br /> 아래 사진처럼 발이 보이도록 인증 해주세요
        </p>
        <div className="flex justify-center mb-4">
          <Image
            className="rounded-2xl"
            src="/img/weight.jpeg"
            alt="weight"
            width={200}
            height={200}
          />
        </div>
        <p className="shadow-lg border-[#E86896] rounded-xl text-lg p-3 m-4 w-auto">
          식단 <br />
          칼로리 측정 후 인증하기 버튼을 눌러 인증 해주세요
        </p>
        <div className="flex justify-center">
          <Image
            className="rounded-2xl"
            src="/img/how_to.png"
            alt="image"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
