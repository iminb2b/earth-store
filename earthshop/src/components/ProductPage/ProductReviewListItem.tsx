import { FC } from "react";
import { css } from "@emotion/react";
import { ReviewInfo } from "@/PageComponents/HomePage";
import Image from "next/image";
import colors from "@/value/colors";

const container = css`
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

const contentContainer = css`
  display: flex;
  flex-direction: column;
`;

const reviewText = css`
  color: ${colors.darkGray};
  line-height: 1.5;
`;
const img = css`
  border-radius: 100%;

  height: 70;
  width: 70;
`;
const reviewName = css`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 2;
`;

const nameContainer = css`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const ProductReviewListItem: FC<{ review: ReviewInfo }> = ({
  review: { name, description, image, id },
}) => {
  return (
    <div css={container}>
      <div css={nameContainer}>
        <Image src={image} alt="name" height={70} width={70} css={img} />
      </div>
      <div css={contentContainer}>
        <h5 css={reviewName}>{name}</h5>
        <p css={reviewText}>{description}</p>
      </div>
    </div>
  );
};

export default ProductReviewListItem;