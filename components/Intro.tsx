import React, { useState, useEffect } from "react";
import "../styles/globals.css";

const Intro = () => {
  const diets = [
    "혈당 조절 다이어트",
    "연예인 다이어트",
    "원푸드 다이어트",
    "디톡스 다이어트",
    "카니보어 다이어트",
    "⋮",
  ];

  const [visibleDiets, setVisibleDiets] = useState<string[]>([]);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (visibleDiets.length < diets.length) {
      // 다이어트 방법 추가
      timeout = setTimeout(() => {
        setVisibleDiets((prev) => [...prev, diets[prev.length]]);
      }, 1000); // 1초 간격으로 추가
    } else if (!showFinalMessage) {
      // 모든 다이어트 방법 표시 후 최종 문구 준비
      timeout = setTimeout(() => {
        setShowFinalMessage(true);
        setVisibleDiets([]); // 이전 다이어트 방법 제거
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [visibleDiets, diets, showFinalMessage]);

  return (
    <div
      className={`h-dvh flex flex-col justify-center items-center p-4 transition-all duration-700 ${
        showFinalMessage ? "bg-gradient-to-b from-white to-black" : "bg-white"
      }`}
    >
      {!showFinalMessage ? (
        <div className="text-center space-y-4">
          {visibleDiets.map((diet, index) => (
            <p
              key={index}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
                index === visibleDiets.length - 1 ? "animate-grow-shrink" : ""
              }`}
            >
              {diet}
            </p>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            지금까지 이런 다이어트
            <br />
            해보지 않으셨나요?
          </p>
        </div>
      )}
    </div>
  );
};

export default Intro;
