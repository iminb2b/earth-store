import { FC } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import buttonStyles from "@/styles/buttonStyles";
import colors from "@/value/colors";

const container = css`
  width: 100%;
  aspect-ratio: 16 / 6;
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
  gap: 1rem;
`;

const content = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const title = css`
  font-size: clamp(1rem, 5vw, 2.75rem);
  font-weight: 500;
  letter-spacing: 7px;
  color: ${colors.green10};
`;
const description = css`
  font-size: clamp(1rem, 2vw, 1.125rem);

  color: #050505;
  line-height: 3;
  font-weight: 300;
  letter-spacing: 2px;
  color: ${colors.green10};
`;

const HomePagePostCardBanner: FC = () => {
  return (
    <div css={container}>
      <Image
        src={
          "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Call-to-action.jpg"
        }
        alt="Give the Gift of a Postcard"
        fill
        sizes="100%"
        css={image}
      />

      <div css={overlay}>
        <div css={content}>
          <h1 css={title}>Give the Gift of a Postcard</h1>
          <h1 css={description}>
            Give the gift of a lasting memory with a postcard
          </h1>
        </div>
        <Link
          href={routeLinks.productType({ type: "postcard" })}
          aria-label="Link To Products Page"
          css={buttonStyles({ size: "medium" })}
        >
          Purchase a Post card
        </Link>
      </div>
    </div>
  );
};

export default HomePagePostCardBanner;
