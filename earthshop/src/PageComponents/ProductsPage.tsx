import PageContainer from "@/components/PageContent";
import { GetServerSideProps, NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { css } from "@emotion/react";
import { ProductInfo, dummyReviewInfos } from "./HomePage";
import PageSegment from "@/components/PageSegment";
import FilterSection from "@/components/ProductsPage/FilterSection";
import ProductsSection from "@/components/ProductsPage/ProductsSection";
import { getProductsQuery, graphQLClient } from "@/api/graphql";

const container = css`
  margin-top: 5rem;
  border-top: 1px solid #d7d7d7;

  display: flex;

  padding: 5rem 0;
`;

type ProductsPageProps = {
  type: string;
  products: ProductInfo[];
};

const ProductsPage: NextPage<ProductsPageProps> = ({ type, products }) => {
  return (
    <PageContainer>
      <PageMeta
        title="Earth Store - Products Page"
        description={"Earth Store - Products Page"}
      />
      <PageSegment>
        <div css={container}>
          <FilterSection products={products} />
          <ProductsSection products={products} type={type} />
        </div>
      </PageSegment>
    </PageContainer>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps<
  ProductsPageProps
> = async ({ query }) => {
  const data = await graphQLClient.request(getProductsQuery);

  const products = "products" in data ? data.products : [];

  return {
    props: {
      type: query.category?.toString() ?? "all",
      products: products as ProductInfo[],
    },
  };
};
