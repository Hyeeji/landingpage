import React from "react";
import Slider from "react-slick";
import "../styles/globals.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  AiFillDollarCircle,
  AiFillCalculator,
  AiFillFileText,
  AiFillBook,
} from "react-icons/ai";
import { HiTicket } from "react-icons/hi2";
import BenefitItem from "@/components/BenefitItem";

const Second = () => {
  const reviews = [
    "다챌 덕분에 2주간 2.1kg로 뺐어요ㅠ 감사해요ㅠ \n다챌 안하면 무게가 올라서 다음 기수도\n빨리 시작했으면 좋겠어요",
    "감사합니다! 덕분에 5개월 동안 100g도 못 뺐었는데ㅠㅠ \n2주만에 1.4kg 감량하네요",
    "처음에는 돈이 걸려 있으니깐 다이어트 하겠지 했는데\n다른 분들 보고 자극이 되서 약속이 없는 날에는 최대한 클린하게 먹으려고 하다보니 살이 1.7kg 빠졌어요",
    "칼로리를 측정해줘서\n오늘 먹은 칼로리를\n쉽게 알 수 있고 \n다음날 조절해서\n먹을 수 있어서\n다이어트에 도움이 많이 돼요",
    "기대 안하고 신청했는데 2kg 이상 감량했어요ㅠ\n너무 감사합니다! 앞으로는 유지 챌린지 꾸준히 참여하고 싶어요",
  ];

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-red-50 min-h-screen flex flex-col">
      <div className=" flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mt-10">
            실제 사용자 후기
          </h2>
          <div className="justify-center items-center mt-1 mb-8">
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div key={index} className="p-4">
                  <div className="flex justify-center items-center shadow-md p-4 rounded-2xl bg-white">
                    <FaQuoteLeft className="text-2xl mr-5" />
                    <p className="font-semibold text-xl text-center whitespace-pre-line">
                      {review}
                    </p>
                    <FaQuoteRight className="text-2xl ml-5" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">참여 혜택</h2>
          <div className="flex flex-wrap justify-center space-x-4">
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
      </div>
    </div>
  );
};

export default Second;
