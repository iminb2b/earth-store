import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import ProductListItem from "./ProductListItem";

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  max-width: 100%;
  width: 100%;

  /* @media screen and (max-width: 688px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  } */
`;

const ProductList: FC<{ products: ProductInfo[] }> = ({ products }) => {
  return (
    <div css={container}>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
