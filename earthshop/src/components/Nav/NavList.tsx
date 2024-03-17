import { FC } from "react";
import { css } from "@emotion/react";
import routeLinks from "@/routeLinks";
import NavListItem from "./NavListItem";
import { useRouter } from "next/router";
import NavShoppingCart from "./NavShoppingCart";
import NavAuth from "./NavAuth";

const container = css`
  display: flex;
  gap: 1rem;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const listContainer = css`
  display: flex;
  gap: 2rem;
  height: 100%;
  align-items: center;
  padding: 0 1rem;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export type NavInfo = {
  name: string;
  url: string;
  isButtonLink: boolean;
};

const NavList: FC = () => {
  const router = useRouter();

  const navListInfo: NavInfo[] = [
    {
      name: "HOME",
      url: routeLinks.home(),
      isButtonLink: true,
    },
    {
      name: "ABOUT",
      url: routeLinks.about(),
      isButtonLink: true,
    },
    {
      name: "SHOP",
      isButtonLink: true,
      url: routeLinks.products(),
    },
    {
      name: "CONTACT",
      isButtonLink: true,
      url: routeLinks.contact(),
    },
  ];

  return (
    <div css={container}>
      <div css={listContainer}>
        {navListInfo.map((item, index) => (
          <NavListItem
            item={item}
            key={index}
            isActive={router.asPath === item.url}
          />
        ))}
      </div>
      <NavShoppingCart />
      <NavAuth />
    </div>
  );
};

export default NavList;
