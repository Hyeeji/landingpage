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
      img: "/img/refund.png",
      text: "100% 환급",
      page: "refund",
    },
    {
      img: "/img/oliveyoung.png",
      text: "친구와 함께\n성공시 쿠폰 제공",
      page: "coupon",
    },
    {
      img: "/img/ex_cal.png",
      text: "AI 칼로리 측정",
      page: "calories",
    },
    {
      img: "/img/week_ex.png",
      text: "주간 리포트 제공",
      page: "report",
    },
    {
      img: "/img/recipe_ex.png",
      text: "다이어트 레시피 제공",
      page: "recipe",
    },
  ];

  return (
    <div className="bg-red-50 min-h-screen flex flex-col justify-center flex-1">
      <h2 className="text-3xl font-bold text-center m-12">참여 혜택</h2>
      <div className="flex flex-wrap justify-center mb-16 ">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            benefitText={benefit.text}
            benefitImg={benefit.img}
            benefitPage={benefit.page}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
