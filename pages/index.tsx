import React, { useEffect } from "react";
import Head from "next/head";
import Title from "./Title";
import Benefits from "./Benefits";
import Refund from "./Refund";
import Coupon from "./Coupon";
import Calories from "./Calories";
import Report from "./Report";
import Recipe from "./Recipe";
import Mission from "./Mission";
import Fee from "./Fee";
import FAQ from "./FAQ";
import "../styles/globals.css";
import Intro from "./Intro";
import Ranking from "./Ranking";
import Message from "./Message";
import Reviews from "./ReviewsChat";
import Challenge from "./Challenge";
import Message2 from "./Message2";

const Home = () => {
  return (
    <div className="overflow-scroll scrollbar-hide">
      <Head>
        <title>다이어트 챌린지</title>
        <meta
          name="description"
          content="Welcome to diet challenge landing page"
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Title />
      <Intro />
      <Ranking />
      <Message />
      <Challenge />
      <Message2 />
      <Reviews />
      <Benefits />
      <Refund />
      <Coupon />
      <Calories />
      <Report />
      <Recipe />
      <Mission />
      <Fee />
      <FAQ />
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
        <a
          href="https://smore.im/form/Md4E0bNAXj"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-bounce font-['MangoDdobak-B'] h-16 w-44 flex justify-center items-center
          bg-white border-2 border-[#E86896] rounded-full
          cursor-pointer text-xl mb-16 hover:bg-[#FFE1E8] hover:text-[#E86896] transition"
        >
          지금 참여하기
        </a>
      </div>
    </div>
  );
};

export default Home;
