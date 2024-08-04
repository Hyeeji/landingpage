"use client";

import React, { useState } from "react";
import "../styles/globals.css";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import "../styles/globals.css";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "환급은 어떻게 진행되나요?",
    answer: (
      <div>
        <p>환급은 2주가 끝나는 시점을 기준으로 진행됩니다</p>
        <table className="min-w-full bg-white border border-gray-300 mt-4 table-fixed">
          <thead>
            <tr>
              <th className="w-1/2 px-4 py-2 border-b border-r bg-gray-100">
                인증 횟수
              </th>
              <th className="w-1/2 px-4 py-2 border-b bg-gray-100">환급금</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-r">7번 이하</td>
              <td className="px-4 py-2 border-b">0원</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-r">8번 ~ 10번</td>
              <td className="px-4 py-2 border-b">10,000원</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-r">11번 ~ 12번</td>
              <td className="px-4 py-2 border-b">15,000원</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-r">13번</td>
              <td className="px-4 py-2 border-b">25,000원</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r">14번</td>
              <td className="px-4 py-2">30,000원</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-lg">
          선택한 챌린지에 실패하면 환급금은 0원입니다
        </p>
        <p className="pl-3">
          - 1kg 감량 챌린지는 1kg 이상 감량
          <br />- 0kg 유지 챌린지는 0kg 이하 증량
        </p>
        <p className="mt-2 text-sm">
          *챌린지 마지막 날이 기준이니
          <br />
          마지막 날 꼭 인증을 해주셔야 합니다
        </p>
      </div>
    ),
  },
  {
    question: "식사는 꼭 2번 이상 해야 하나요?",
    answer: (
      <p>
        2번 이상을 추천드리나 1번만 드신 경우
        <br />
        1번은 물 사진으로 인증해주시면 됩니다.
      </p>
    ),
  },
  {
    question: "인증은 어디에 하나요?",
    answer: (
      <p>
        챌린지 전날 문자로 오픈채팅방 링크를 드립니다.
        <br />
        오픈채팅방에 인증 하시면 됩니다.
      </p>
    ),
  },
  {
    question: "업로드 시간을 꼭 지켜야 하나요?",
    answer: (
      <p>
        네, 22시 전에 모두 인증을 마쳐주셔야
        <br />
        인증 성공입니다.
      </p>
    ),
  },
  {
    question: "칼로리가 이상해요",
    answer: (
      <p>
        칼로리는 여성 평균 1인분을 기준으로 측정됩니다.
        <br />
        잘못 나왔거나 칼로리를 알고 계시는 경우 <br />
        운영자에게 알려주세요! <br />
        수정해서 리포트에 반영해드립니다.
      </p>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/img/background/1.png"
          alt="pink background image"
          fill={true}
        />
      </div>
      <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold mb-12">FAQ</h3>
        <div className="w-full max-w-2xl">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer w-full p-4 flex items-center focus:outline-none"
              >
                <FaCheckCircle className="mr-2" />
                <h4 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h4>
              </div>
              {openIndex === index && (
                <div className="mt-2 p-4 text-center bg-white border-t rounded-2xl shadow-md">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
