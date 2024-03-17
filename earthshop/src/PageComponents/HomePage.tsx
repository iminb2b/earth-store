import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import HomePageHero from "@/components/HomePage/HomePageHero";
import { css } from "@emotion/react";
import HomePageFeaturedProducts from "@/components/HomePage/HomePageFeaturedProducts";
import PageSegment from "@/components/PageSegment";

const container = css`
  width: 100%;
`;

export type ProductInfo = {
  type: string;
  name: string;
  price: string;
  image: string;
  id: number;
};

export const dummyProductInfos: ProductInfo[] = [
  {
    type: "Poster",
    name: "Poster V1",
    price: "23.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg",
    id: 1,
  },
  {
    type: "Poster",
    name: "Poster V2",
    price: "13.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg",
    id: 2,
  },
  {
    type: "Poster",
    name: "Poster V3",
    price: "12.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg",
    id: 3,
  },
];

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta
        title="Earth Store - HomePage"
        description={"Earth Store - HomePage"}
      />
      <div css={container}>
        <HomePageHero />
        <PageSegment>
          <HomePageFeaturedProducts products={dummyProductInfos} />
        </PageSegment>
      </div>
    </PageContainer>
  );
};

export default HomePage;
