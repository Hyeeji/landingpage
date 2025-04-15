import React from "react";
import "../styles/globals.css";

const Motivation = () => {
  return (
    <div className="h-dvh w-full bg-gradient-to-b from-black to-white">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <div className="mb-5 font-['Pretendard'] font-bold">
            <p className="text-black text-3xl mb-20 sm:text-6xl md:text-8xl lg:text-9xl">
              다양한 다이어트 방법이 있지만
              <br />
              성공하지 못했던 이유?
            </p>
            <p className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed">
              아무리 효과적인 방법이어도
              <br />
              지속적인&nbsp;
              <span className="text-red-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                동기
              </span>
              가 없으면
              <br />
              성공할 수 없습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
