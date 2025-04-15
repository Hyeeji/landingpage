"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import ReactGA from "react-ga4";
import Intro from "../components/Intro";
import Challenge from "../components/Challenge";
import Message2 from "../components/Message2";
import Reviews from "../components/ReviewsChat";
import Refund from "@/components/Refund";
import Layout from "@/components/layout";
import TrackEvent from "@/lib/TrackEvent";
import mixpanel from "mixpanel-browser";
import * as amplitude from "@amplitude/analytics-browser";
import RemindText from "@/components/RemindText";
import Motivation from "@/components/Motivation";
import Game from "@/components/Game";
import FAQ from "@/components/FAQ";
import Fee from "@/components/Fee";
import GameResult from "@/components/GameResult";
import Research from "@/components/Research";
import BenefitsText from "@/components/BenefitsText";
import Calories from "@/components/Calories";
import Report from "@/components/Report";
import Recipe from "@/components/Recipe";
import Feed from "@/components/Feed";
import ConfirmMission from "@/components/ConfirmMission";

const Page = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [trackedSections, setTrackedSections] = useState<number[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`);
      amplitude.init(`${process.env.NEXT_PUBLIC_AMPLITUDE}`);
      mixpanel.init(`${process.env.NEXT_PUBLIC_MIXPANEL}`, {
        debug: true,
        track_pageview: true,
      });

      ReactGA.send("pageview");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const index = parseInt(target.dataset.index || "0");

            if (!trackedSections.includes(index)) {
              TrackEvent(`Viewed-Section-${index}`);
              setTrackedSections((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [trackedSections]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="overflow-scroll scrollbar-hide">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
          함께하는 다이어트 챌린지
        </h1>
        <a
          href="https://smore.im/form/PqIhkB9C7u"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E86896] text-white text-sm px-4 py-2 rounded-lg shadow transition-all sm:text-base flex justify-center items-center"
          onClick={() => TrackEvent("상단_신청하기")}
        >
          신청하기
        </a>
      </header>

      {[Intro, RemindText, Motivation, Game, GameResult, Research, Challenge, Message2, Reviews, BenefitsText, Refund, Calories, Report, Recipe, Feed, ConfirmMission, Fee, FAQ].map(
        (Component, index) => (
          <div
            ref={setRef(index)}
            data-index={index}
            key={index}
            className="h-dvh"
          >
            <Component />
          </div>
        )
      )}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
        <a
          href={"https://smore.im/form/PqIhkB9C7u"}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-bounce h-14 w-36 flex justify-center items-center
          bg-black text-white rounded-2xl
          cursor-pointer text-xl mb-16 hover:bg-[#E86896] hover:text-white transition"
          onClick={() => TrackEvent("하단_신청하기")}
        >
          지금 신청하기
        </a>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;