import React from "react";
import Head from "next/head";
import Title from "./Title";
import Second from "./Second";
import Refund from "./Refund";
import Coupon from "./Coupon";
import Calories from "./Calories";
import Report from "./Report";
import Recipe from "./Recipe";
import Mission from "./Mission";
import Fee from "./Fee";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>다이어트 챌린지</title>
        <meta
          name="description"
          content="Welcome to diet challenge landing page"
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Title />
      <Second />
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
