import React from "react";
import Image from "next/image";
import shape from '@/assets/img/inner-about/about/shape-1.png';

const work_data = [
  {
    id: 1,
    title: "Sustacon",
    subtitle: "Graphic Designer",
    text: "Design of sustainability reports and social media management",
  },
  {
    id: 2,
    title: "Think Tomorrow",
    subtitle: "Stage Graphic Design & Front-end development",
    text: "Creating visuals for different brands and development of different websites",
  },
  {
    id: 3,
    title: "Hays",
    subtitle: "Student Graphic & Motion Design",
    text: "Social media management and Graphic Designer for their own brand ",
  },
];
export default function AboutWork() {
  return (
    <div className="ab-2-work-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="ab-2-work-title-box p-relative">
              <h4 className="ab-2-work-title tp_title_anim">
                Work <br /> Experience
              </h4>
              <span className="ab-2-work-subtitle tp_title_anim">
              </span>
              <Image
                className="ab-2-work-shape d-none d-lg-block"
                src={shape}
                alt="shape"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            {work_data.map((item) => (
              <div key={item.id} className="ab-2-work-item tp_fade_bottom">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                      {item.subtitle}
                    </span>
                    <h4 className="sv-service-title">{item.title}</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
