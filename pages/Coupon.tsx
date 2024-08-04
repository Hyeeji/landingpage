"use client";

import React, { useState } from "react";
import Image from "next/image";

const Coupon = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      id="coupon"
      className="min-h-screen bg-[#FCEDF2] flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-4 py-16">
        <Image
          src="/img/coupon1.png"
          alt="coupon image"
          width={200}
          height={200}
        />
        <h3 className="text-center text-[#E86896] text-2xl font-bold mb-4">
          친구와 함께 챌린지 성공 시 <br /> 5,000원 쿠폰 제공
        </h3>
        <p className="text-center text-lg">친구와 함께 챌린지에 신청하시면</p>
        <p className="text-center text-lg font-semibold">
          성공한 분께 5,000원 쿠폰을 드립니다
        </p>
        <p
          className="text-center mt-5 text-lg underline cursor-pointer"
          onClick={handleShowDetails}
        >
          자세히 보기
        </p>
        {showDetails && (
          <div className="mt-4 text-center">
            <p className="flex justify-center items-center shadow-lg bg-white text-lg text-[#E86896] rounded-xl p-3 m-4 w-60 h-16">
              -1kg 챌린지 신청하기
            </p>
            <p className="flex justify-center items-center shadow-lg bg-white text-lg text-[#E86896] rounded-xl p-3 m-4 w-60 h-16">
              챌린지 성공하기
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coupon;
