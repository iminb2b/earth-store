import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import ProductList from "./ProductList";
import colors from "@/value/colors";

const container = css`
  flex: 1;

  padding-left: 2rem;
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

const ProductsSection: FC<{ products: ProductInfo[]; type: string }> = ({
  products,
  type,
}) => {
  const filteredProducts = products.filter((product) => product.type === type);

  return (
    <div css={container}>
      <h3 css={title}>{type}</h3>
      <div css={productContainer}>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsSection;
