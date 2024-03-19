import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo, ReviewInfo } from "@/PageComponents/HomePage";
import Image from "next/image";
import colors from "@/value/colors";
import Quantity from "./Quantity";
import { sectionTitle } from "@/styles/generalStyles";
import ProductReview from "./ProductReview";

const container = css`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const contentContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  width: 100%;
`;
const descriptionContainer = css``;
const imageContainer = css`
  width: 100%;
  position: relative;
  aspect-ratio: 1 / 1;
`;
const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const productType = css`
  color: ${colors.white};
  width: fit-content;
  padding: 0.5rem;
  text-transform: uppercase;
  background-color: ${colors.green20};
  font-size: 1rem;
`;
const productName = css`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 500;
`;
const productPrice = css`
  font-size: 1.5rem;
`;
const productIntro = css`
  font-size: 1.25rem;
  line-height: 1.4;
`;

const description = css`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    list-style-type: disc;
    gap: 0.5rem;
  }
`;
const ProductSection: FC<{ product: ProductInfo; reviews: ReviewInfo[] }> = ({
  product,
  reviews,
}) => {
  return (
    <div css={container}>
      <div css={contentContainer}>
        <div css={imageContainer}>
          <Image src={product.image} alt={product.name} fill sizes="50%" />
        </div>
        <div css={infoContainer}>
          <p>
            Home / {product.type.name} / {product.name}
          </p>

          <div css={productType}>{product.type.name}</div>
          <h3 css={productName}>{product.name}</h3>
          <p css={productPrice}>${product.price}</p>
          <p css={productIntro}>{product.introduction}</p>
          <Quantity product={product} />
        </div>
      </div>
      <div css={descriptionContainer}>
        <p css={sectionTitle}>Description</p>
        <div
          css={description}
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </div>
      <ProductReview reviews={reviews} product={product} />
    </div>
  );
};

export default ProductSection;
