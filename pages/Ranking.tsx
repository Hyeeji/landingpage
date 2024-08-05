import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Ranking = () => {
  const reviews = [
    "덕분에 2주간 2.1kg로 뺐어요ㅠ 감사해요! 안하면 무게 올라서 다음 기수 빨리 시작했으면 좋겠어요",
    "감사합니다! 덕분에 5개월 동안 100g도 못 뺐었는데ㅠㅠ \n2주만에 1.4kg 감량하네요",
    "처음에는 돈이 걸려 있으니깐 다이어트 하겠지 했는데 다른 분들 보고 자극이 되서 약속이 없는 날에는 최대한 클린하게 먹으려고 하다보니 살이 1.7kg 빠졌어요",
    "칼로리를 측정해줘서 오늘 먹은 칼로리를 쉽게 알 수 있고 다음날 조절해서 먹을 수 있어서 다이어트에 도움이 많이 돼요",
    "기대 안하고 신청했는데 2kg 이상 감량했어요ㅠ 너무 감사합니다! 앞으로는 유지 챌린지 꾸준히 참여하고 싶어요",
  ];

  const settings_text = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center scroll-hide p-4">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mt-14">
          실제 사용자 후기
        </h2>
        <div className="justify-center items-center mt-1 mb-8">
          <Slider {...settings_text}>
            {reviews.map((review, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-center items-center shadow-md p-4 rounded-2xl bg-white">
                  <FaQuoteLeft className="text-2xl mr-5" />
                  <p className="font-['meetme'] text-xl text-center whitespace-pre-line">
                    {review}
                  </p>
                  <FaQuoteRight className="text-2xl ml-5" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-10 mb-5 text-center">
        <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">
          여러분도 다이어트
          <br />
          성공 할 수 있어요.
        </p>
        <p className="mt-3 text-lg font-semibold">*실제 참가자들 감량 추이</p>
      </div>
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        <Image
          className="rounded-5xl mb-8"
          src="/img/Ranking.png"
          alt="review"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Ranking;
