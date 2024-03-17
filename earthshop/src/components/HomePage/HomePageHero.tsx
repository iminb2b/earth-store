import { FC } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import buttonStyles from "@/styles/buttonStyles";
import colors from "@/value/colors";

const container = css`
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  position: relative;
`;
const image = css`
  object-fit: cover;
`;

const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

const content = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const title = css`
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 500;
  letter-spacing: 7px;
  color: ${colors.green10};
`;
const description = css`
  font-size: clamp(1rem, 3vw, 2.75rem);

  color: #050505;
  font-weight: 300;
  letter-spacing: 4px;
  color: ${colors.green10};
`;

const HomePageHero: FC = () => {
  return (
    <div css={container}>
      <Image
        src={
          "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Banner.jpg"
        }
        alt="EARTH - multipurpose store"
        fill
        sizes="100%"
        css={image}
      />

      <div css={overlay}>
        <div css={content}>
          <h1 css={title}>EARTH</h1>
          <h1 css={description}>MULTIPURPOSE STORE</h1>
        </div>
        <Link
          href={routeLinks.products()}
          aria-label="Link To Products Page"
          css={buttonStyles({ size: "medium" })}
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default HomePageHero;
