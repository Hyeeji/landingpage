"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

const Report = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const images = [
    "/img/report1-1.png",
    "/img/report1-2.png", // 첫 번째 이미지 경로
    "/img/report2.png", // 두 번째 이미지 경로
    "/img/report3.png", // 필요한 만큼 추가
    "/img/report4.png",
  ];

  return (
    <div
      id="report"
      className="min-h-screen flex flex-col bg-[#FCEDF2] items-center justify-center scrollbar-hide"
    >
      <div className="flex flex-col items-center justify-center w-full container mx-auto px-4 py-16">
        <div className="w-full mb-12">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <Image
                  src={src}
                  alt={`report image ${index + 1}`}
                  width={800}
                  height={800}
                  className="mx-auto rounded-2xl"
                />
              </div>
            ))}
          </Slider>
        </div>
        <h3 className="text-center text-2xl font-bold mb-4 text-[#E86896]">
          주간 리포트 제공
        </h3>
        <p className="text-center text-lg">
          몸무게와 칼로리 변화를 기록한 리포트를 제공합니다
        </p>
        <p className="text-center text-lg font-semibold">
          리포트를 통해 다이어트 진행 상황을 쉽게 파악할 수 있습니다
        </p>
      </div>
    </div>
  );
};

export default Report;
