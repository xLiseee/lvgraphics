"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import Social from "@/components/social/social";
import { Dots, Share } from "@/components/svg";
import { projectDetailsPin } from "@/utils/project-anim";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import {charAnimation,titleAnimation} from "@/utils/title-animation";


// images
import port_d_1 from '@/assets/img/inner-project/portfolio-details/jrvisite.png';
import port_d_2 from '@/assets/img/inner-project/portfolio-details/jrvisualsweb.png';
import port_d_3 from '@/assets/img/inner-project/portfolio-details/jrlogo.png';
import FooterFour from "@/layouts/footers/footer-four";

const port_images = [port_d_1, port_d_2, port_d_3,];

const PortfolioDetailsOneMain = () => {
  const [showSocial, setShowSocial] = React.useState(false);
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne/>
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <div className="project-details-1-area project-details-1-pt">
               <div className="container-fluid p-0">
                  <div className="row g-0">
                     <div className="col-xl-7">
                        <div className="project-details-1-left">
                          {port_images.map((imgSrc, i) => (
                           <div key={i} className="project-details-1-thumb mb-10">
                              <Image src={imgSrc} alt="port-img" style={{height:"auto"}}/>
                           </div>
                          ))}
                        </div>
                     </div>
                     <div className="col-xl-5">
                        <div className="project-details-1-right-wrap">
                           <div className="project-details-1-right p-relative">
                              <div className="project-details-1-title-box">
                                 <span className="project-details-1-subtitle"><i>04</i>Brand Design</span>
                                 <h4 className="project-details-1-title">JR Visuals</h4>
                                 <p>Creating different brand assets for JR Visuals</p>
                              </div>
                              <div className="project-details-1-info-wrap">
                                 <div className="project-details-1-info">
                                    <span>Client</span>
                                    <h4>JR Visuals</h4>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>Date</span>
                                    <h4>Februari {"2021"}</h4>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>Services</span>
                                    <h4>Design</h4>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>Deliverables</span>
                                    <h4>Website & Brand assets</h4>
                                 </div>
                              </div>
                           </div>
                           <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                              <a className="project-details-1-prev" href="/portfolio-details-3">
                                 <i className="fa-sharp fa-regular fa-arrow-left"></i>
                              
                              </a>
                              <a href="#">
                              </a>
                              <a className="project-details-1-next" href="/portfolio-details-5">
                              
                                 <i className="fa-sharp fa-regular fa-arrow-right"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* portfolio details area */}
          </main>

          {/* footer area */}
          <FooterFour/>
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsOneMain;
