import React from "react";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";
// images
import p_img_1 from "@/assets/img/home-05/project/reports.png";
import p_img_2 from "@/assets/img/home-05/project/sjans.png";
import p_img_3 from "@/assets/img/home-05/project/jrvisuals.png";
import p_img_4 from "@/assets/img/home-05/project/hays.png";
import p_img_5 from "@/assets/img/home-05/project/lille.png";
import p_img_6 from "@/assets/img/home-05/project/red.png";

const project_data = [
  {
    id: 1,
    title: "Sustacon",
    category: "Sustainability Design",
    img: p_img_1,
    year: 2025,
    link: "/portfolio-details-1"
  },
  {
    id: 2,
    title: "Think Tomorrow",
    category: "Graphic Design",
    img: p_img_2,
    year: 2024,
    link: "/portfolio-details-2"
  },
  {
    id: 3,
    title: "JR Visuals",
    category: "Branding",
    img: p_img_3,
    year: 2023,
    link: "/portfolio-details-4"
  },
  {
    id: 4,
    title: "Hays",
    category: "Graphic Design",
    img: p_img_4,
    year: 2023,
    link: "/portfolio-details-5"
  },
  {
    id: 5,
    title: "Gemeente Lille",
    category: "Communication",
    img: p_img_5,
    year: 2021,
    link: "/portfolio-details-3"
  },
  {
    id: 6,
    title: "RD Tuinen",
    category: "Branding",
    img: p_img_6,
    year: 2023,
    link: "/portfolio-details-6"
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-5-2-area pb-130 ${
        style_2 ? "" : "tp-project-5-2-pt black-bg"
      }`}
    >
      {!style_2 && (
        <div className="row">
          <div className="col-xl-12">
            <LineTextFour />
          </div>
        </div>
      )}
      <div className="container">
        <div className="row gx-140">
          {project_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                data-cursor="View<br>Demo"
              >
                <Link className="cursor-hide" href={item.link}>
                  <span className="tp_img_reveal">
                    <div className="tp_img_reveal">
                      <Image
                        src={item.img}
                        alt="project-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </span>
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
