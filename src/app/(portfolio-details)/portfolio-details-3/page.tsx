import React from "react";
import { Metadata } from "next";
import PortfolioDetailsThreeMain from "@/pages/portfolio/details/portfolio-details-3-main";


export const metadata: Metadata = {
  title: "Gemeente Lille",
};

const PortfolioDetailsThreePage = () => {
  return (
    <PortfolioDetailsThreeMain/>
  );
};

export default PortfolioDetailsThreePage;
