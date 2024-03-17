import { FC } from "react";
import { css } from "@emotion/react";
import { ReviewInfo } from "@/PageComponents/HomePage";
import ReviewListItem from "./ReviewListItem";

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  max-width: 100%;
  width: 100%;

  @media screen and (max-width: 688px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ReviewList: FC<{ reviews: ReviewInfo[] }> = ({ reviews }) => {
  return (
    <div css={container}>
      {reviews.map((review) => (
        <ReviewListItem review={review} key={review.id} />
      ))}
    </div>
  );
};

export default ReviewList;
