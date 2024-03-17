import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";
import { NavInfo } from "./NavList";
import colors from "@/value/colors";

const link = css`
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 2.5px;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      height: 2px;
      width: 80%;
      left: 10%;
    }
  }
`;

const activeLink = css`
  color: ${colors.green10};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    height: 2px;
    width: 80%;
    left: 10%;
  }
`;

const NavListItem: FC<{
  item: NavInfo;
  isActive: boolean;
}> = ({ item, isActive }) => {
  if (item.isButtonLink)
    return (
      <Link href={item.url} css={link}>
        {item.name}
      </Link>
    );

  return (
    <Link href={item.url} css={isActive ? activeLink : link}>
      {item.name}
    </Link>
  );
};

export default NavListItem;
