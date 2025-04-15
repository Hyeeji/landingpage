"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

const ConfirmMission = () => {

  return (
    <div
      id="comfirmMission"
      className="min-h-screen flex flex-col items-center justify-center scrollbar-hide"
    >
      <h3 className="text-center text-2xl font-bold mb-4">
          미션 인증 방법 안내
      </h3>
      <div className="flex flex-col items-center justify-center w-full container mx-auto px-4 py-16">
       <Image
          className="rounded-3xl"
          src="/img/app_mission.png"
          alt="mission confirm image"
          width={400}
          height={400}
        />
        </div>
        <p className="text-center text-lg">
          챌린지 대화방에서 미션을 인증할 수 있어요
        </p>
      </div>
  );
};

export default ConfirmMission;
