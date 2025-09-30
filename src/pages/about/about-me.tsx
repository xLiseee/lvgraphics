"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import AboutMeHero from "@/components/about/about-me-hero";
import AboutMeArea from "@/components/about/about-me-area";
import AboutPortfolio from "@/components/portfolio/about-portfolio";
import AboutWork from "@/components/work/about-work";
import { BrandItems } from "@/components/brand/brand-two";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import FooterOne from "@/layouts/footers/footer-one";
// animation
import {charAnimation,fadeAnimation,titleAnimation} from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import HeaderOne from "@/layouts/headers/header-one";
import FooterFour from "@/layouts/footers/footer-four";

const AboutMeMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      teamMarqueAnim();
      fadeAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* about hero */}
            <AboutMeHero />
            {/* about hero */}

            {/* about me area */}
            <AboutMeArea />
            {/* about me area */}

            {/* about portfolio */}
            {/* about portfolio */}

            {/* about work */}
            <AboutWork />
            {/* about work */}

            {/* brand area */}
            {/* brand area */}
          </main>

          {/* footer area */}
          <FooterFour/>
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutMeMain;
