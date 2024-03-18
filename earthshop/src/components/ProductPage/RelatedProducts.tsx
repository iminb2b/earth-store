import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import ProductListItem from "../ProductsPage/ProductListItem";
import { sectionTitle } from "@/styles/generalStyles";

const container = css`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  gap: 3rem;
  width: 100%;
`;

const productContainer = css`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
`;

const RelatedProducts: FC<{ products: ProductInfo[] }> = ({ products }) => {
  return (
    <div css={container}>
      <h3 css={sectionTitle}>RElated Products</h3>
      <div css={productContainer}>
        {products.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
