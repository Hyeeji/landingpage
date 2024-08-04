"use client";

import React from "react";
import "../styles/globals.css";
import { FaCheckCircle } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

const Fee = () => {
  const benefits = [
    "챌린지 성공시 100% 즉시 환급",
    "친구와 함께 챌린지 성공시 5천원 쿠폰 증정",
    "AI 식단 칼로리 측정",
    "몸무게, 칼로리 리포트 제공",
    "맛있는 다이어트 레시피 100가지 제공",
  ];

  return (
    <div
      id="fee"
      className="scrollbar-hide min-h-screen flex flex-colitems-center justify-center"
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-1 py-12">
        <div className="bg-gray-50 shadow-2xl rounded-2xl px-6 py-12 mb-12 text-center">
          <h3 className="text-3xl font-bold text-[#E86896] mb-4">
            참가비 안내
          </h3>
          <p className="text-2xl mb-4">
            <span className="line-through text-gray-500">정가 40,000원</span>
            <span className="text-3xl font-bold text-[#E86896]"> 30,000원</span>
          </p>
          <div className="flex flex-row p-3 bg-gray-200 rounded-xl items-center justify-center">
            <IoTicketOutline className="text-[#E86896] mr-2 text-2xl" />
            <p className="text-lg font-semibold">얼리버드 10,000원 할인</p>
          </div>
          <h3 className="text-center text-2xl font-bold mt-10 mb-6 text-[#E86896]">
            참여 혜택
          </h3>
          <ul className="list-none text-lg text-gray-700">
            {benefits.map((benefit, index) => (
              <li key={index} className="mb-2 flex items-center">
                <FaCheckCircle className="text-[#E86896] mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="h-16 w-48 flex justify-center items-center
          bg-white border-2 border-[#E86896] rounded-full
          cursor-pointer text-[#E86896] text-xl mt-8"
        >
          지금 참여하기
        </div>
      </div>
    </div>
  );
};

export default Fee;
