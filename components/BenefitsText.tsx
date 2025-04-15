import React from "react";
import { Link } from "react-scroll";
import "../styles/globals.css";
import TrackEvent from "../lib/TrackEvent";

const BenefitsText = () => {
  const benefits = [
    {
      id: 1,
      text: (
        <>
          보증금 <span className="text-red-500">100% 환불</span>
        </>
      ),
      link: "refund",
    },
    {
      id: 2,
      text: (
        <>
          AI <span className="text-red-500">칼로리 무료</span> 측정
        </>
      ),
      link: "calories",
    },
    {
      id: 3,
      text: (
        <>
          일일, 주간 <span className="text-red-500">리포트</span> 제공
        </>
      ),
      link: "report",
    },
    {
      id: 4,
      text: (
        <>
          맛있는 <span className="text-red-500">다이어트 레시피</span> 제공
        </>
      ),
      link: "recipe",
    },
    {
      id: 5,
      text: (
        <>
          식단 공유, <span className="text-red-500">응원받기</span>
        </>
      ),
      link: "not_yet",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-100 via-red-50 to-white min-h-screen flex flex-col justify-center items-center py-12 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-red-600 sm:text-5xl md:text-6xl">
        5가지 참여 혜택
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
          {benefits.map((benefit) => (
            <Link to={benefit.link} 
            smooth={true}
            duration={200}
            className="cursor-pointer"
            onClick={() => TrackEvent(benefit.link+ "_클릭")}>
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl text-center">
              <h3 className="text-xl font-semibold mb-4">혜택 {benefit.id}</h3>
              <p className="text-gray-800 text-xl font-bold">{benefit.text}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default BenefitsText;
