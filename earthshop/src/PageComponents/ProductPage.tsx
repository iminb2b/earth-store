import PageContainer from "@/components/PageContent";
import { GetServerSideProps, NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { productInfos } from "./ProductsPage";
import { ProductInfo } from "./HomePage";
import PageSegment from "@/components/PageSegment";
import ProductSection from "@/components/ProductPage/ProductSection";
import { css } from "@emotion/react";

type ProductPageProps = {
  product: ProductInfo;
  relatedProducts: ProductInfo[];
};

const container = css`
  margin-top: 5rem;
  border-top: 1px solid #d7d7d7;

  display: flex;

  padding: 5rem 0;
`;

const ProductPage: NextPage<ProductPageProps> = ({
  product,
  relatedProducts,
}) => {
  return (
    <PageContainer>
      <PageMeta title="Earth Store" description={product.introduction} />
      <PageSegment>
        <div css={container}>
          <ProductSection product={product} />
        </div>
      </PageSegment>
    </PageContainer>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({
  query,
}) => {
  const product =
    productInfos.filter(
      (item) => item.id.toString() === query.id?.toString() ?? "1",
    )[0] ?? productInfos[0];

  return { props: { relatedProducts: productInfos, product } };
};
