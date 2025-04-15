import React from "react";
import Image from "next/image";
import "../styles/globals.css";

const Research = () => {
  return (
    <div className="h-dvh w-full bg-white">
      <div className="h-dvh flex flex-col justify-between items-center">
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <div className="mb-5 font-['Pretendard'] font-bold">
            <div className="flex items-center justify-center">
              <Image
                className="rounded-lg"
                src="/img/Research.png"
                alt="Research Findings"
                width={400}
                height={400}
              />
            </div>
            <p className="mt-10 text-2xl mb-5 sm:text-6xl md:text-8xl lg:text-9xl">
              간단한 보증금 제도를 통해 <br />
              다이어트 성공 확률을 <br />
              <span className="text-red-500 text-3xl font-extrabold animate-grow">
                3.7배
              </span>{" "}
              올려보세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
