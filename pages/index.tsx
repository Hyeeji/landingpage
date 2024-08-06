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
    </div>
  );
};

export default Home;
