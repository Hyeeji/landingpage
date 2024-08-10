import React from "react";
import "../styles/globals.css";
import { Link } from "react-scroll";
import Image from "next/image";

interface BenefitItemProps {
  benefitImg: string;
  benefitText: string;
  benefitPage: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  benefitImg,
  benefitText,
  benefitPage,
}) => {
  return (
    <Link
      to={benefitPage}
      smooth={true}
      duration={500}
      className="cursor-pointer"
    >
      <div
        className="flex flex-col justify-center items-center text-center bg-white p-4 rounded-3xl shadow-md text-black flex-1 mx-2 mb-4"
        style={{ minWidth: "250px", height: "300px", position: "relative" }}
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="relative w-full h-2/3 mb-4">
            <Image
              src={benefitImg}
              alt="recipe image"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="text-xl text-[#E86896] font-bold whitespace-pre-line mt-3">
            {benefitText}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BenefitItem;
