import React from "react";
import "../styles/globals.css";

const Message2 = () => {
  return (
    <div className="bg-red-50 min-h-screen flex flex-col justify-center items-center scroll-hide p-4">
      <div className="m-12">
        <p className="font-bold text-2xl text-center">
          혹시 지금까지 이러진 않으셨나요?
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
        <div className="flex flex-col mt-10 mb-12 text-center font-semibold text-xl">
          <p>다이어트 이제 혼자하지 마세요!</p>
          <p>함께하는 다이어트 챌린지에서</p>
          <p>다른 참여자들과 같이 다이어트해요</p>
        </div>
      </div>
    </div>
  );
};

export default Message2;
