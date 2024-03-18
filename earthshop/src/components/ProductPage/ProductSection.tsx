import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";

const container = css``;

const ProductSection: FC<{ product: ProductInfo }> = ({ product }) => {
  return <div css={container}></div>;
};

export default ProductSection;
