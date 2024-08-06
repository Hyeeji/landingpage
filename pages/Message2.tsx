import React from "react";
import "../styles/globals.css";

const Message2 = () => {
  return (
    <div className="bg-red-50 min-h-screen flex flex-col justify-center items-center scroll-hide p-4">
      <div className="mb-12">
        <p className="text-center text-xl md:text-4xl lg:text-5xl ">
          도움이 되는 건 알겠는데...
        </p>
        <p className="text-center text-xl md:text-4xl lg:text-5xl font-semibold">
          그냥 식단 기록 어플 사용하면 되는 거 아니에요?
        </p>
        <p className="mt-10 text-center text-2xl md:text-4xl lg:text-5xl font-semibold">
          단순히 혼자 기록만 하면
          <br /> 타협하면서 쉽게 포기하게 됩니다.
        </p>
        <p className="mt-10 text-[#E86896] text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          다이어트에는 꾸준한
          <br />
          동기부여가 필요합니다.
        </p>
      </div>
      <div>
        <p className="font-bold text-2xl text-center">
          혹시 이러진 않으셨나요?
        </p>
        <div className="flex flex-col font-[meetme]">
          <div className="flex flex-row mt-3 text-center bg-gray-50 rounded-xl py-3 px-5 shadow-2xl  text-lg">
            <p>😱 의지 박약으로 쉽게 포기 하게 됨</p>
          </div>
          <div className="flex flex-row mt-3 text-center bg-gray-50 rounded-xl py-3 px-5 shadow-2xl  text-lg">
            <p>😱 잘 참다가 한번의 폭식으로 포기 하게 됨</p>
          </div>
          <div className="flex flex-row mt-3 text-center bg-gray-50 rounded-xl py-3 px-5 shadow-2xl  text-lg">
            <p>😱 무리한 다이어트로 요요와서 포기 하게 됨</p>
          </div>
        </div>
        <div className="flex flex-col mt-10 text-center font-semibold text-xl">
          <p>다이어트 이제 혼자하지 마세요!</p>
          <p>함께하면 다이어트 성공 할 수 있어요</p>
        </div>
      </div>
    </div>
  );
};

export default Message2;
