import React from "react";
import Image from "next/image";
import "../styles/globals.css";

const Intro = () => {
  return (
    <div className="bg-red-50 min-h-screen flex flex-col justify-center items-center scroll-hide p-4">
      <div className="mb-12">
        <p className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          이번에는 다이어트
          <br />
          성공하고 싶지 않으세요?
        </p>
        <p className="mt-6 md:mt-8 lg:mt-11 text-center text-lg md:text-xl">
          살빠지는 데에도 이유가 있어요 !
        </p>
        <p className="mt-2 text-center text-xl md:text-2xl font-semibold">
          실제 후기가 말해주는
          <br />
          쉽고 건강하게 다이어트 하는 방법
        </p>
      </div>
      <div className="w-full flex items-center max-w-sm md:max-w-md lg:max-w-lg">
        <Image
          className="rounded-2xl"
          src="/img/introChat.png"
          alt="intro chat"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Intro;
