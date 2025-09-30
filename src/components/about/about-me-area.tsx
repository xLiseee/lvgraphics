import React from "react";
import Image from "next/image";
import { Hand } from "../svg";
import shape from '@/assets/img/inner-about/about/shape-1.png';

export default function AboutMeArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-about-content p-relative tp_fade_bottom">
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap">
                Hi, I’m Lise, a 23-year-old graphic designer
                who loves drawing and being creative.
                I’m always exploring new design techniques
                and mediums to bring my ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
