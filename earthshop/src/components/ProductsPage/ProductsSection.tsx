import { FC, useCallback, useState } from "react";
import { css } from "@emotion/react";
import { ProductInfo, ProductsConnection } from "@/PageComponents/HomePage";
import ProductList from "./ProductList";
import colors from "@/value/colors";
import buttonStyles from "@/styles/buttonStyles";
import { getProductsQuery, graphQLClient } from "@/api/graphql";

const container = css`
  flex: 1;

  padding-left: 2rem;

  display: flex;
  flex-direction: column;
`;

const title = css`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: clamp(1.5rem, 4vw, 3.75rem);
  font-weight: 500;
  color: ${colors.green10};
`;
const productContainer = css`
  padding: 3rem 0;
`;

const button = css`
  ${buttonStyles({ size: "medium" })};
  margin: auto;
  margin-top: 3rem;
`;

const ProductsSection: FC<{
  products: ProductInfo[];
  type: string;
  state:
    | { type: "loading" }
    | { type: "hasMore"; endCursor: string }
    | { type: "hasNoMore" }
    | { type: "hasError" };
  loadMoreProducts: () => Promise<void>;
}> = ({ products, type, loadMoreProducts, state }) => {
  return (
    <div css={container}>
      <h3 css={title}>{type}</h3>
      <div css={productContainer}>
        <ProductList products={products} />
      </div>

      {state.type === "hasMore" && (
        <button css={button} onClick={loadMoreProducts}>
          Load More
        </button>
      )}
      {state.type === "loading" && <button css={button}>Loading...</button>}
    </div>
  );
};

export default ProductsSection;
