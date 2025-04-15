"use client";

import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import { FaCheckCircle } from "react-icons/fa";

const Refund = () => {
  return (
    <div
      id="refund"
      className="min-h-screen flex items-center justify-center scrollbar-hide bg-gray-50"
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
        <h3 className="text-center text-2xl font-bold mt-10 mb-4">
          챌린지 성공시 <br /> 보증금 100% 환급
        </h3>
        <Image
          src="/img/refund.png"
          alt="refund image"
          width={250}
          height={250}
          className="mb-8"
        />
        <p className="text-center text-lg text-gray-700">
          챌린지에 성공하시면 보증금을
        </p>
        <p className="text-center text-lg font-semibold text-gray-900">
          100% 환불해드립니다
        </p>
        <div className="mt-10">
          <h4 className="text-center text-xl font-bold text-gray-800 mb-6">
            * 챌린지 성공 기준
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
              <FaCheckCircle className="text-green-500 text-2xl mr-4" />
              <p className="text-gray-700 font-semibold">
                매일 2가지 인증 미션 성공
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
              <FaCheckCircle className="text-green-500 text-2xl mr-4" />
              <p className="text-gray-700 font-semibold">
                선택한 챌린지 (-1kg 또는 +0kg) 성공
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
