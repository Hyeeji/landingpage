import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const settings_img = {
    centerMode: true,
    centerPadding: "70px",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    focusOnSelect: true,
  };

  const chats = [
    "/img/chat1.png",
    "/img/chat2-1.png",
    "/img/chat2-2.png", // 첫 번째 이미지 경로
    "/img/chat3.png", // 두 번째 이미지 경로
    "/img/chat4.png", // 필요한 만큼 추가
    "/img/chat5.png",
  ];

  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center font-semibold text-xl">
          <p className="text-xl">챌린지 참여자들은</p>
          <p className="text-xl">서로 응원하고 다이어트 정보도 공유하며</p>
          <div className="flex flex-row mt-3 ">
            <FaQuoteLeft className="mr-2 text-base" />
            <p className="text-[#E86896] text-2xl">
              함께 다이어트 하고 있어요 !
            </p>
            <FaQuoteRight className="ml-2 text-base" />
          </div>
        </div>
        <div className="m-10 text-center font-bold text-2xl">
          실제 챌린지 참여자들 대화
        </div>
        <Slider {...settings_img}>
          {chats.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`report image ${index + 1}`}
                width={400}
                height={800}
                className="mx-auto items-center justify-items-center rounded-2xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
