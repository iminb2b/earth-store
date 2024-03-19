import PageContainer from "@/components/PageContent";
import { GetServerSideProps, NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import {
  ProductConnection,
  ProductInfo,
  ProductsConnection,
  ReviewInfo,
} from "./HomePage";
import PageSegment from "@/components/PageSegment";
import ProductSection from "@/components/ProductPage/ProductSection";
import { css } from "@emotion/react";
import RelatedProducts from "@/components/ProductPage/RelatedProducts";
import {
  getProductQuery,
  getProductsQuery,
  getReviewsByProductQuery,
  graphQLClient,
} from "@/api/graphql";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";

type ProductPageProps = {
  product: ProductInfo;
  relatedProducts: ProductInfo[];
  reviews: ReviewInfo[];
};

const container = css`
  margin-top: 5rem;
  border-top: 1px solid #d7d7d7;

  display: flex;
  flex-direction: column;

  padding: 5rem 0;
`;

const ProductPage: NextPage<ProductPageProps> = ({
  product,
  relatedProducts,
  reviews,
}) => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({ type: "addRecentlyViewed", product });
  }, []);

  return (
    <PageContainer>
      <PageMeta title="Earth Store" description={product.introduction} />
      <PageSegment>
        <div css={container}>
          <ProductSection product={product} reviews={reviews} />
          <RelatedProducts products={relatedProducts} />
        </div>
      </PageSegment>
    </PageContainer>
  );
};

export default ProductPage;

export type ReviewByProductConnection = {
  reviewsByProduct: Array<ReviewInfo>;
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({
  query,
}) => {
  const data = (await graphQLClient.request(getProductQuery, {
    slug: query.productId?.toString() ?? "1",
  })) as ProductConnection;
  const productResponse = (await graphQLClient.request(getProductsQuery, {
    count: 3,
  })) as ProductsConnection;

  const products = (productResponse.products.edges ?? []).reduce(
    (acc: any, edges: any) => (edges.node ? [...acc, edges.node] : acc),
    [],
  );

  const reviewResponse = (await graphQLClient.request(
    getReviewsByProductQuery,
    { productId: data.product.id },
  )) as ReviewByProductConnection;
  return {
    props: {
      relatedProducts: products,
      product: data.product,
      reviews: reviewResponse.reviewsByProduct,
    },
  };
};
