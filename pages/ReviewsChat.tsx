import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

const Reviews = () => {
  const settings_img = {
    centerMode: true,
    centerPadding: "110px",
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
        <div className="m-10 text-center font-bold text-3xl">
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
