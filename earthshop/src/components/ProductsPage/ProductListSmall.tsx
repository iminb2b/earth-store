import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import ProductListItemSmall from "./ProductListItemSmall";

const container = css`
  max-width: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProductListSmall: FC<{ products: ProductInfo[] }> = ({ products }) => {
  return (
    <div css={container}>
      {products.map((product) => (
        <ProductListItemSmall product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductListSmall;
