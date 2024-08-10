"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

const Refund = () => {
  return (
    <div
      id="refund"
      className="min-h-screen flex items-center justify-center scrollbar-hide"
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
        <Image
          src="/img/refund.png"
          alt="refund image"
          width={250}
          height={250}
        />
        <h3 className="text-center text-2xl font-bold mt-10 mb-4">
          챌린지 성공시 <br /> 보증금 100% 환급
        </h3>
        <p className="text-center text-lg">챌린지에 성공하시면 보증금을</p>
        <p className="text-center text-lg font-semibold">100% 환불해드립니다</p>
        <p className="text-center mt-10 text-lg font-semibold">
          챌린지 성공 기준
        </p>
        <div className="text-center">
          <p className="flex justify-center items-center shadow-lg border-[#E86896] text-[#E86896] rounded-xl text-lg p-3 m-4 w-60 h-16">
            매일 인증 미션 성공
          </p>
          <p className="flex justify-center items-center shadow-lg border-[#E86896] text-[#E86896] rounded-xl text-lg p-3 m-4 w-60 h-16">
            선택한 챌린지 성공
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refund;
