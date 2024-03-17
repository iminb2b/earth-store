import { FC } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import colors from "@/value/colors";
import { sectionTitle } from "@/styles/generalStyles";

const container = css`
  width: 100%;
  padding: 5rem 0;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const image = css`
  object-fit: cover;
`;
const imageContainer = css`
  position: relative;
  min-height: 300px;
  max-height: 500px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const content = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const description = css`
  line-height: 2;
  color: ${colors.darkGray};
  font-size: 1.25rem;
`;

const AboutPageMission: FC = () => {
  return (
    <div css={container}>
      <div css={imageContainer}>
        <Image
          src={
            "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Our-Mission-min-1000x744.jpg"
          }
          alt="EARTH - multipurpose store"
          fill
          sizes="50%"
          css={image}
        />
      </div>
      <div css={content}>
        <h1 css={sectionTitle}>OUR MISSION</h1>
        <p css={description}>
          Our mission is simple: to inspire a deeper connection with our planet
          through art. We believe that by surrounding ourselves with images of
          Earth's diverse landscapes, vibrant ecosystems, and breathtaking
          natural phenomena, we can cultivate a greater appreciation for the
          world around us and a commitment to its preservation for future
          generations.
        </p>
      </div>
    </div>
  );
};

export default AboutPageMission;
