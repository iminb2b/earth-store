import { FC } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import colors from "@/value/colors";

const container = css`
  width: 100%;
  aspect-ratio: 16 / 7;
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

const titleText = css`
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 500;
  letter-spacing: 7px;
  color: ${colors.green10};
  text-transform: uppercase;
`;

const AboutPageHero: FC<{ title: string }> = ({ title }) => {
  return (
    <div css={container}>
      <Image
        src={
          "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/About-banner.jpg"
        }
        alt="EARTH - multipurpose store"
        fill
        sizes="100%"
        css={image}
      />

      <div css={overlay}>
        <div css={content}>
          <h1 css={titleText}>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutPageHero;
