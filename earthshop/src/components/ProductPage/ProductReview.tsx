import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo, ReviewInfo } from "@/PageComponents/HomePage";
import Image from "next/image";
import colors from "@/value/colors";
import Quantity from "./Quantity";
import { sectionTitle } from "@/styles/generalStyles";
import ProductReviewList from "./ProductReviewList";
import buttonStyles from "@/styles/buttonStyles";

const container = css`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const inputBox = css`
  padding: 0.75rem;
  border: 1px solid ${colors.green10};
`;
const textBox = css`
  border: 1px solid ${colors.green10};
  padding: 0.75rem;
  height: 10rem;
`;
const formContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductReview: FC<{ reviews: ReviewInfo[] }> = ({ reviews }) => {
  return (
    <div css={container}>
      <h3 css={sectionTitle}>REVIEWS</h3>
      <ProductReviewList reviews={reviews} />

      <h3 css={sectionTitle}>Add Your Feedback</h3>

      <form css={formContainer}>
        <input css={inputBox} type="text" placeholder="Full Name" />
        <input css={inputBox} type="email" placeholder="Email" />
        <textarea css={textBox} placeholder="Enter Your Message..." />
        <button css={buttonStyles({ size: "medium" })}>SUBMIT</button>
      </form>
    </div>
  );
};

export default ProductReview;
