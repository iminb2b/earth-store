import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import ProductList from "../ProductsPage/ProductList";
import { sectionTitle } from "@/styles/generalStyles";

const container = css`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const HomePageFeaturedProducts: FC<{ products: ProductInfo[] }> = ({
  products,
}) => {
  return (
    <div css={container}>
      <p css={sectionTitle}>FEATURED PRODUCTS</p>
      <ProductList products={products} />
    </div>
  );
};

export default HomePageFeaturedProducts;
