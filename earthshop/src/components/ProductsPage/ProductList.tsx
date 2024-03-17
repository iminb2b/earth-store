import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import ProductListItem from "./ProductListItem";

const container = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;
  max-width: 100%;
  width: 100%;
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
