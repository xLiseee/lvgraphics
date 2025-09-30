import React from "react";
import Image from "next/image";
import Social from "../social/social";
import { Leaf } from "../svg";

// images
import shape_1 from "@/assets/img/inner-about/hero/hero-2-shape-1.jpg";
import shape_2 from "@/assets/img/inner-about/hero/hero-2-shape-2.jpg";
import hero_img from '@/assets/img/inner-about/hero/Lise.png';

export default function AboutMeHero() {
  return (
    <div className="ab-2-hero-area ab-2-hero-ptb  p-relative">
      <div className="ab-2-hero-social-wrap d-none d-lg-block">
      </div>
      <div className="container">
        <div className="ab-2-hero-main">
          <div className="row">
            <div className="col-xl-7">
              <div className="ab-2-hero-title-box p-relative">
                <span
                  className="ab-2-hero-subtitle"
                  data-stagger="0.05"
                  data-on-scroll="0"
                  data-delay="0.6"
                >
                  {"Hello"} there
                </span>
                <h4
                  className="ab-2-hero-title tp-char-animation"
                  data-stagger="0.05"
                  data-on-scroll="0"
                  data-delay="0.6"
                >
                  Get to know me
                </h4>
                <div className="ab-2-hero-shape-1">
                  <Image
                    src={shape_1}
                    alt="shape"
                  />
                </div>
                <div className="ab-2-hero-shape-2">
                  <Image
                    className="tp-zoom-in-out"
                    src={shape_2}
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 offset-xl-2">
              <div className="ab-3-hero-thumb-wrap p-relative">
                <div>
                <Image
                  src={hero_img}
                  alt="shape"
                  data-speed="0.9"
                  style={{height:"auto"}}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
