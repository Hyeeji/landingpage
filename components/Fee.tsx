"use client";

import React, { useState } from "react";
import ReactGA from "react-ga4";
import "../styles/globals.css";
import { FaCheckCircle } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import TrackEvent from "@/lib/TrackEvent";

const Fee = () => {
  const benefits = [
    "챌린지 성공시 100% 무료",
    "AI 식단 칼로리 무료 측정",
    "몸무게, 칼로리 리포트 제공",
    "다이어트 레시피 100가지 제공",
    "식단 피드 공유 및 응원 받기"
  ];

  return (
    <div
      id="fee"
      className="flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-1 py-12">
        <div className="bg-gray-50 shadow-2xl rounded-2xl px-6 py-12 mb-12 text-center">
          <h3 className="text-2xl font-bold text-[#E86896] mb-4">
            테스트 기간
          </h3>
          <p className="text-2xl mb-4">
            <span className="line-through text-gray-500">정가 40,000원</span>
            <span className="text-2xl font-bold text-[#E86896]"> 0원</span>
          </p>
          <div className="flex flex-row p-3 bg-gray-200 rounded-xl items-center justify-center">
            <IoTicketOutline className="text-[#E86896] mr-2 text-2xl" />
            <p className="text-lg font-semibold">테스트 기간 40,000원 할인</p>
          </div>
          <h3 className="text-center text-2xl font-bold mt-10 mb-6 text-[#E86896]">
            참여 혜택
          </h3>
          <ul className="list-none text-base text-gray-700">
            {benefits.map((benefit, index) => (
              <li key={index} className="mb-2 flex items-center">
                <FaCheckCircle className="text-[#E86896] mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-16 w-44 flex relative">
          <a
            href="https://smore.im/form/Md4E0bNAXj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-[#E86896] text-[#E86896] rounded-full
            cursor-pointer text-xl w-full h-full flex justify-center items-center hover:bg-[#FFE1E8] transition"
            onClick={() => TrackEvent("지금_참여하기_버튼_클릭")}
          >
            지금 참여하기
          </a>
        </div>
        <div className="mt-6 font-[meetme] justify-center items-center text-center ">
          <a
              href="https://qr.kakaopay.com/Ej8mZ9nIr3a9809160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFEA00] text-black px-6 py-3 rounded-full text-xl "
              onClick={() => TrackEvent("카카오페이_클릭")}
            >
             카카오페이 보증금 송금
            </a>
        </div>
        <div className="mt-2 font-[meetme] justify-center items-center text-center">  
          <a
            href="http://pf.kakao.com/_lxjxgkG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFEA00] text-black px-6 py-3 rounded-full text-xl "
            onClick={() => TrackEvent("카카오채널_클릭")}
          >
            카카오톡 채널 추가하기
          </a>
          <p className="font-[meetme] text-xl mt-4 font-bold cursor-pointer">참여가 고민되시나요?</p>
          <p className="font-[meetme] text-xl p-3 w-auto">
            카카오톡 채널 추가 후
            <br />
            다음 기수 알림을 받아보세요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fee;
