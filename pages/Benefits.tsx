import React from "react";
import "../styles/globals.css";
import {
  AiFillDollarCircle,
  AiFillCalculator,
  AiFillFileText,
  AiFillBook,
} from "react-icons/ai";
import { HiTicket } from "react-icons/hi2";
import BenefitItem from "@/components/BenefitItem";

const Benefits = () => {
  const benefits = [
    {
      icon: <AiFillDollarCircle />,
      text: "100% 환급",
      page: "refund",
    },
    {
      icon: <HiTicket />,
      text: "친구와 함께\n성공시 쿠폰 제공",
      page: "coupon",
    },
    {
      icon: <AiFillCalculator />,
      text: "AI 칼로리 측정",
      page: "calories",
    },
    {
      icon: <AiFillFileText />,
      text: "주간 리포트 제공",
      page: "report",
    },
    {
      icon: <AiFillBook />,
      text: "다이어트 레시피 제공",
      page: "recipe",
    },
  ];

  return (
    <div className="bg-red-50 min-h-screen flex flex-col justify-center flex-1">
      <h2 className="text-3xl font-bold text-center m-8">참여 혜택</h2>
      <div className="flex flex-wrap justify-center mb-16 ">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            benefitText={benefit.text}
            benefitIcon={benefit.icon}
            benefitPage={benefit.page}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
