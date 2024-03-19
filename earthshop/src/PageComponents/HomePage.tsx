import PageContainer from "@/components/PageContent";
import { GetServerSideProps, NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageHero from "@/components/HomePage/HomePageHero";
import { css } from "@emotion/react";
import HomePageFeaturedProducts from "@/components/HomePage/HomePageFeaturedProducts";
import PageSegment from "@/components/PageSegment";
import HomePageReviews from "@/components/HomePage/HomePageReviews";
import HomePagePostCardBanner from "@/components/HomePage/HomePagePostCardBanner";
import HomePageServices from "@/components/HomePage/HomePageServices";
import {
  getProductsQuery,
  getReviewsQuery,
  graphQLClient,
} from "@/api/graphql";

const container = css`
  width: 100%;
`;

export type ProductInfo = {
  type: { name: string };
  name: string;
  price: string;
  image: string;
  id: number;
  introduction: string;
  description: string;
};

export type ProductConnection = {
  products: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    edges: Array<{
      node: ProductInfo;
    }>;
  };
};

export type ReviewConnection = {
  reviews: Array<ReviewInfo>;
};

export type ReviewInfo = {
  user: {
    username: string;
    image: string;
    id: number;
  };
  id: number;
  description: string;
  product: {
    id: number;
  };
};

type HomePageProps = {
  featuredProducts: ProductInfo[];
  reviews: ReviewInfo[];
};

const HomePage: NextPage<HomePageProps> = ({ featuredProducts, reviews }) => {
  console.log(reviews);
  return (
    <PageContainer>
      <PageMeta
        title="Earth Store - HomePage"
        description={"Earth Store - HomePage"}
      />
      <div css={container}>
        <HomePageHero />
        <PageSegment>
          <HomePageFeaturedProducts products={featuredProducts} />
          <HomePageReviews reviews={reviews} />
        </PageSegment>

        <HomePagePostCardBanner />

        <PageSegment>
          <HomePageServices />
        </PageSegment>
      </div>
    </PageContainer>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({
  query,
}) => {
  const productResponse = (await graphQLClient.request(getProductsQuery, {
    count: 3,
  })) as ProductConnection;
  const reviewResponse = (await graphQLClient.request(
    getReviewsQuery,
  )) as ReviewConnection;

  const products = (productResponse.products.edges ?? []).reduce(
    (acc: any, edges: any) => (edges.node ? [...acc, edges.node] : acc),
    [],
  );

  return {
    props: {
      featuredProducts: products,
      reviews: reviewResponse.reviews,
    },
  };
};
