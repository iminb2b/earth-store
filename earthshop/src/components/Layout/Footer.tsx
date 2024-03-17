import { FC } from "react";
import { css } from "@emotion/react";
import { navListInfo } from "../Nav/NavList";
import Link from "next/link";
import Logo from "../Nav/Logo";
import colors from "@/value/colors";

const container = css`
  display: flex;
  padding: 3rem 0;
  border-top: 1px solid #d7d7d7;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 3rem 1rem;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const linkContainer = css`
  display: flex;
  gap: 1rem;
`;

const link = css`
  transition: all ease 0.3s;
  color: ${colors.darkGray};
  :hover {
    color: ${colors.green20};
  }
`;

const copyright = css`
  color: ${colors.darkGray};
`;

const Footer: FC = () => {
  return (
    <div css={container}>
      <div css={linkContainer}>
        {navListInfo.map((item, index) => (
          <Link href={item.url} aria-label={item.name} key={index} css={link}>
            {item.name}
          </Link>
        ))}
      </div>
      <Logo />
      <div css={copyright}>Copyright © 2024 Planet Earth Store</div>
    </div>
  );
};

export default Footer;
