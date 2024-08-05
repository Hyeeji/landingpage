import React from "react";
import Image from "next/image";
import "../styles/globals.css";

const Message = () => {
  return (
    <div className="bg-red-50 min-h-screen flex flex-col justify-center items-center scroll-hide p-4">
      <div className="mb-12">
        <p className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
          다이어트 해야하는데
        </p>
        <p className="text-center text-[#E86896] text-2xl md:text-4xl lg:text-5xl font-bold">
          매번 포기하고 실패로 끝나요
        </p>
      </div>
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        <Image
          className="rounded-2xl flex items-center"
          src="/img/kakaoformat.png"
          alt="review"
          width={400}
          height={400}
        />
      </div>
      <div className="animate-bounce mt-10 text-center font-semibold bg-gray-50 rounded-3xl py-3 px-5 shadow-lg  text-3xl md:text-4xl lg:text-5xl">
        <p className="font-[theface]">우리 다이어트 성공하고</p>
        <p className="font-[theface] text-[#E86896]">예쁜 옷 같이 입어요.</p>
      </div>
      <div className="text-center mt-8">
        <p className="font-semibold text-lg md:text-4xl lg:text-5xl">
          계속해서 편하고 널널한 옷만?
        </p>
        <p className="font-semibold text-[#E86896] text-lg md:text-4xl lg:text-5xl">
          이제는 나에게 딱 어울리는 옷 입어야죠 !
        </p>
      </div>
    </div>
  );
};

export default Message;
