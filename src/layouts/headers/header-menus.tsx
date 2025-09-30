import React, { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu-data";

const imgStyle:CSSProperties = { width: "100%", height: "auto", objectFit: "cover" };
const HeaderMenus = () => {
  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id} className="has-dropdown">
          <Link href={menu.link}>{menu.title}</Link>
          {menu.home_menus ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-menu-fullwidth">
                <div className="tp-homemenu-wrapper">
                  <div className="row gx-25 row-cols-xl-6 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    {menu.home_menus.map((home_menu, i) => (
                      <div key={i} className="col homemenu">
                        <div className="homemenu-thumb-wrap mb-20">
                          <div className="homemenu-thumb fix">
                            <Link href={home_menu.link}>
                              <Image src={home_menu.img} alt="home-img" width={251} height={235}
                              style={imgStyle}/>
                            </Link>
                          </div>
                        </div>
                        <div className="homemenu-content text-center">
                          <h4 className="homemenu-title">
                            <Link href={home_menu.link}>{home_menu.title}</Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : menu.portfolio_mega_menus ? (
            <div className="tp-submenu submenu tp-mega-menu">
            </div>
          ) : menu.dropdown_menus ? (
            <ul className="tp-submenu submenu">
              {menu.dropdown_menus.map((mm, i) => (
                <li key={i}>
                  <Link href={mm.link}>{mm.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
