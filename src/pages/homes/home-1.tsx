'use client';
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger, SplitText, } from '@/plugins';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";

import ServiceOne from "@/components/service/service-one";

// animation
import { videoAnimOne } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import {bounceAnimation, charAnimation, fadeAnimation, revelAnimationOne} from "@/utils/title-animation";
import ProjectFour from "@/components/project/project-four";
import {ctaAnimation} from "@/utils/cta-anim";
import {textInvert} from "@/utils/text-invert";
import FooterFour from "@/layouts/footers/footer-four";

const HomeMain = () => {


    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            revelAnimationOne();
            ctaAnimation();
            textInvert();
        }, 100);
        return () => clearTimeout(timer);
    });
  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      // portfolio image wrap
      gsap.timeline({
        scrollTrigger: {
           trigger: ".tp-project-full-img-wrap",
           start: "top 65",
           end: "bottom 0%",
           pin: ".tp-project-full-img",
           pinSpacing: false,
        }
      });
      // team marquee
      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
    }, 100)
    return () => clearTimeout(timer);
  });


  return (
    <Wrapper showBackToTop={false}>

      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}


      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            
            {/* hero area start */}
            <HeroBannerOne />
            {/* hero area end */}

            {/* service area */}
            <ServiceOne />
            {/* service area */}

            {/* project area */}
            <ProjectFour />
            {/* project area */}


          </main>

          {/* footer area */}
          <FooterFour/>
          {/* footer area */}
        </div>
      </div>

    </Wrapper>
  );
};

export default HomeMain;