import React from "react";
import Link from "next/link";
import { mobile_menu_data } from "@/data/menu-data";

export default function MobileMenus() {
  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {mobile_menu_data.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.link} className="pointer">
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
