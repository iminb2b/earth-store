import { FC, useCallback, useContext, useRef, useState } from "react";
import { css } from "@emotion/react";
import { ProductInfo, ReviewInfo } from "@/PageComponents/HomePage";
import Image from "next/image";
import colors from "@/value/colors";
import Quantity from "./Quantity";
import { sectionTitle } from "@/styles/generalStyles";
import ProductReviewList from "./ProductReviewList";
import buttonStyles from "@/styles/buttonStyles";
import { createReviewMutation, graphQLClientMutation } from "@/api/graphql";
import { AppContext } from "@/context/AppContext";

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
  height: 18rem;
  gap: 1rem;
`;

const ProductReview: FC<{ reviews: ReviewInfo[]; product: ProductInfo }> = ({
  reviews,
  product,
}) => {
  const {
    state: { username },
  } = useContext(AppContext);

  const isReviewed = reviews.some(
    (review) => review.user.username === username,
  );
  const [state, setState] = useState<
    | { type: "submitted" }
    | { type: "hasError" }
    | { type: "isNotSubmitted" }
    | { type: "submitting" }
  >({ type: "isNotSubmitted" });

  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const onSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    setState({ type: "submitting" });
    const email = emailRef.current?.value ?? "";
    const message = messageRef.current?.value ?? "";

    try {
      const data = await graphQLClientMutation.request(createReviewMutation, {
        email,
        message,
        productSlug: product.slug,
      });
      console.log(data);

      setState({ type: "submitted" });
    } catch {
      setState({ type: "hasError" });
    }
  }, []);

  return (
    <div css={container}>
      <h3 css={sectionTitle}>REVIEWS</h3>
      {reviews && <ProductReviewList reviews={reviews} />}

      {!isReviewed && (
        <>
          <h3 css={sectionTitle}>Add Your Feedback</h3>
          <form css={formContainer} onSubmit={onSubmit}>
            <input
              css={inputBox}
              type="email"
              placeholder="Email"
              ref={emailRef}
            />
            <textarea
              css={textBox}
              placeholder="Enter Your Message..."
              ref={messageRef}
            />
            <button
              disabled={state.type === "submitted"}
              css={buttonStyles({ size: "medium" })}
              type="submit"
            >
              Submit
              {state.type === "submitting" ? "ting" : ""}
              {state.type === "submitted" ? "ted" : ""}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ProductReview;
