import React from "react";
import "../styles/globals.css";
import { Link } from "react-scroll";

interface BenefitItemProps {
  benefitIcon: React.ReactNode;
  benefitText: string;
  benefitPage: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  benefitIcon,
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
        style={{ minWidth: "250px", height: "230px" }}
      >
        <div className="flex justify-center items-center text-9xl text-[#E86896] mb-4">
          {benefitIcon}
        </div>
        <div className="text-xl font-semibold whitespace-pre-line mt-3">
          {benefitText}
        </div>
      </div>
    </Link>
  );
};

export default BenefitItem;
