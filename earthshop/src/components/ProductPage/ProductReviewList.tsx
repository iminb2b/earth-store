import { FC } from "react";
import { css } from "@emotion/react";
import { ReviewInfo } from "@/PageComponents/HomePage";
import ProductReviewListItem from "./ProductReviewListItem";

const container = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100%;
  width: 100%;
`;

const ProductReviewList: FC<{ reviews: ReviewInfo[] }> = ({ reviews }) => {
  return (
    <div css={container}>
      {reviews.map((review) => (
        <ProductReviewListItem review={review} key={review.id} />
      ))}
    </div>
  );
};

export default ProductReviewList;
