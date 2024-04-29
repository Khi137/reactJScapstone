
import React from "react";

import { DesktopResponsive, TabletResponsive, MobileResponsive } from "../../HOC/responsive";
import HeaderDesktop from "./HeaderDeskTop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderTablet from "./HeaderTablet/HeaderTablet";


export default function Header() {
  return (
    <>
      <DesktopResponsive>
        <HeaderDesktop />
      </DesktopResponsive>
      <TabletResponsive>
        <HeaderTablet />
      </TabletResponsive>
      <MobileResponsive>
        <HeaderMobile />
      </MobileResponsive>
    </>
  );
}
