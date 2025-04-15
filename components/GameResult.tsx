import React from "react";
import "../styles/globals.css";

const GameResult = () => {
  return (
    <div className="h-dvh w-full bg-black">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <div className="mb-5 font-['Pretendard'] font-bold">
            <p className="text-white text-4xl mb-5 sm:text-6xl md:text-8xl lg:text-9xl">
              아니요.
            </p>
            <p className="text-red-500 text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              대부분은 참여하지 않습니다. <br />
              인간은 이익보다 손해에 더 크게 반응합니다.
            </p>
            <p className="mt-10 text-white text-2xl mb-5 sm:text-6xl md:text-8xl lg:text-9xl">
              이 특징을 활용하여
            </p>
            <p className="mt-5 text-white text-3xl sm:text-6xl md:text-8xl lg:text-9xl">
              함께하는 다이어트 챌린지
            </p>
            <p className="text-white text-2xl mb-5 sm:text-6xl md:text-8xl lg:text-9xl">
              를 만들었습니다 !
            </p>
            <p className="mt-5 text-white text-2xl mb-5 sm:text-6xl md:text-8xl lg:text-9xl">
              다이어트 보증금을 통해 <br />
              꾸준한{" "}
              <span className="text-3xl text-red-500 font-extrabold">동기</span>를
              제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
