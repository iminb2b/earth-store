import { FC, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import { useDialogStore } from "@ariakit/react";
import Logo from "../Nav/Logo";
import NavList from "../Nav/NavList";
import NavMenuMobileButton from "../Nav/NavMenuMobileButton";
import NavListMobile from "../Nav/NavListMobile";

const container = ({ scrollNav }: { scrollNav: boolean }) => css`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 10;
  justify-content: center;
  transition: all 0.3s ease;

  background-color: ${scrollNav ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  box-shadow: ${scrollNav ? "rgba(0, 0, 0, 0.1) 0px 4px 12px;" : "none"};
`;

const contentWrapper = css`
  ${contentContainer}

  width: 100%;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
`;

const Header: FC = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const mobileHeaderNavDialogStore = useDialogStore();
  const mobileHeaderNavDialogIsMounted =
    mobileHeaderNavDialogStore.useState("mounted");

  return (
    <div
      css={container({
        scrollNav: mobileHeaderNavDialogIsMounted || scrollNav,
      })}
    >
      <div css={contentWrapper}>
        <Logo />
        <NavList />

        <NavMenuMobileButton dialogStore={mobileHeaderNavDialogStore} />

        {mobileHeaderNavDialogIsMounted && (
          <NavListMobile dialogStore={mobileHeaderNavDialogStore} />
        )}
      </div>
    </div>
  );
};

export default Header;
