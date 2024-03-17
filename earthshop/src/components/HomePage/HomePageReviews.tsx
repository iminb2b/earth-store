import { FC } from "react";
import { css } from "@emotion/react";
import { ReviewInfo } from "@/PageComponents/HomePage";
import ReviewList from "./ReviewList";
import { sectionTitle } from "@/styles/generalStyles";

const container = css`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  border-top: 1px solid #d7d7d7;
`;

const HomePageReviews: FC<{ reviews: ReviewInfo[] }> = ({ reviews }) => {
  return (
    <div css={container}>
      <p css={sectionTitle}>WHAT OUR CUSTOMERS SAY</p>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default HomePageReviews;
