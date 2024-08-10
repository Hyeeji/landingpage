import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import { FaCheckCircle } from "react-icons/fa";

const Challenge = () => {
  return (
    <div className="bg-gary-50 min-h-screen flex flex-col justify-center items-center scroll-hide p-4">
      <div className="m-12">
        <p className="text-center text-4xl md:text-4xl lg:text-5xl font-bold">
          그래서
        </p>
        <p className=" mt-4 text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          다이어트 챌린지 뭐 하는 거에요?
        </p>
      </div>
      <div>
        <div className="text-[#E86896] font-semibold bg-gray-50 rounded-xl py-3 px-5 shadow-xl text-xl md:text-2xl lg:text-3xl">
          <p>1. 매일 미션 인증</p>
        </div>
        <div className="mt-5 text-[#E86896] font-semibold bg-gray-50 rounded-xl py-3 px-5 shadow-xl text-xl md:text-2xl lg:text-3xl">
          <p>2. 선택한 챌린지 성공하기</p>
        </div>
      </div>
      <div className="mt-16 font-bold text-2xl">
        <p>미션? 그게 뭐에요?</p>
      </div>
      <div className="mt-5 flex justify-center mb-12 w-full space-x-4">
        <Image
          src="/img/mission_w.png"
          alt="calory-tracker image"
          width={200}
          height={300}
          className="border"
        />
        <Image
          src="/img/mission_f.png"
          alt="calory-tracker image"
          width={200}
          height={300}
          className="border"
        />
      </div>
      <div className="flex flex-col items-center text-lg">
        <div className="flex flex-row items-center">
          <FaCheckCircle className="text-[#E86896] mr-2" />
          <p className="text-xl">매일 몸무게 인증</p>
        </div>
        <div className="mt-2 flex align-middle flex-row items-center">
          <FaCheckCircle className="text-[#E86896] mr-2" />
          <p className="text-xl">매일 2번 식단 인증</p>
        </div>
        <p className="mt-3 mb-12 text-center text-xl font-semibold">
          각종 논문을 참고하여 <br />
          쉽고 간단하지만 효과적인 미션을 선정했습니다.
        </p>
      </div>
    </div>
  );
};

export default Challenge;
