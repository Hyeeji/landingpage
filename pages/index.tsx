import React, { useEffect, useRef } from "react";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";
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
import mixpanel from "mixpanel-browser";
import TrackEvent from "@/components/TrackEvent";
import * as amplitude from "@amplitude/analytics-browser";

mixpanel.init(`${process.env.NEXT_PUBLIC_MIXPANEL}`, {
  debug: true,
  track_pageview: true,
});
ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`);
amplitude.init(`${process.env.NEXT_PUBLIC_AMPLITUDE}`);

const Home = () => {
  const router = useRouter();
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const observedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    ReactGA.send("pageview");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName =
              entry.target.getAttribute("data-section") || "unknown-section";

            if (!observedSections.current.has(sectionName)) {
              observedSections.current.add(sectionName);
              TrackEvent(`Scroll-${sectionName}`);
            }
          }
        });
      },
      {
        threshold: 0.5, // 섹션의 50%가 보일 때 이벤트 트리거
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionsRef.current[index] = el;
  };

  const { query } = router;
  let dynamicLink = "https://smore.im/form/Md4E0bNAXj"; // 기본 링크

  // 쿼리 스트링에 따라 동적으로 링크 설정
  if (query.from === "calory") {
    dynamicLink = "https://smore.im/form/PqIhkB9C7u"; // 원하는 링크로 변경
  }

  return (
    <div className="overflow-scroll scrollbar-hide">
      <Head>
        <title>다이어트 챌린지</title>
        <meta
          name="description"
          content="Welcome to diet challenge landing page"
        />
      </Head>
      <div ref={setRef(0)} data-section="Page_1">
        <Title />
      </div>
      <div ref={setRef(1)} data-section="Page_2">
        <Intro />
      </div>
      <div ref={setRef(2)} data-section="Page_3">
        <Ranking />
      </div>
      <div ref={setRef(3)} data-section="Page_4">
        <Message />
      </div>
      <div ref={setRef(4)} data-section="Page_5">
        <Challenge />
      </div>
      <div ref={setRef(5)} data-section="Page_6">
        <Message2 />
      </div>
      <div ref={setRef(6)} data-section="Page_Reviews">
        <Reviews />
      </div>
      <div ref={setRef(7)} data-section="Page_Benefits">
        <Benefits />
      </div>
      <div ref={setRef(8)} data-section="Page_Refund">
        <Refund />
      </div>
      <div ref={setRef(9)} data-section="Page_Coupon">
        <Coupon />
      </div>
      <div ref={setRef(10)} data-section="Page_Calores">
        <Calories />
      </div>
      <div ref={setRef(11)} data-section="Page_Report">
        <Report />
      </div>
      <div ref={setRef(12)} data-section="Page_Recipe">
        <Recipe />
      </div>
      <div ref={setRef(13)} data-section="Page_Mission">
        <Mission />
      </div>
      <div ref={setRef(14)} data-section="Page_Fee">
        <Fee />
      </div>
      <div ref={setRef(15)} data-section="Page_FAQ">
        <FAQ />
      </div>

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
        <a
          href={dynamicLink}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-bounce font-['MangoDdobak-B'] h-16 w-44 flex justify-center items-center
          bg-white border-2 border-[#E86896] rounded-full
          cursor-pointer text-xl mb-16 hover:bg-[#FFE1E8] hover:text-[#E86896] transition"
          onClick={() => TrackEvent("Floating-button Click")}
        >
          지금 참여하기
        </a>
      </div>
    </div>
  );
};

export default Home;
