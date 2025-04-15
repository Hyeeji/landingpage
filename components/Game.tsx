import React from "react";
import Image from "next/image";
import "../styles/globals.css";

const Game = () => {
  return (
    <div className="bg-white h-dvh w-full flex justify-center items-center scroll-hide">
      <div className="flex justify-center items-center">
        <Image
          src="/img/game.png"
          alt="game"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Game;
