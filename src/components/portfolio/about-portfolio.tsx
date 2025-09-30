import React from "react";
import Image from "next/image";
// images
import ab_1 from "@/assets/img/inner-about/portfolio/logolv.png";
import ab_2 from "@/assets/img/inner-about/portfolio/hays.png";
import ab_3 from "@/assets/img/inner-about/portfolio/pos.png";

const portfolio_images = [ab_1, ab_2, ab_3];

export default function AboutPortfolio() {
  return (
    <div className="ab-2-portfolio-area pb-115">
      <div className="container-fluid ab-2-portfolio-thumb-wrap">
        <div className="row gx-5">
          {portfolio_images.map((imgSrc, i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-5">
              <div className="ab-2-portfolio-thumb fix">
                <Image src={imgSrc} alt="p-img" style={{height:"auto"}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
