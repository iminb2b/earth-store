import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import HomePageHero from "@/components/HomePage/HomePageHero";
import { css } from "@emotion/react";
import HomePageFeaturedProducts from "@/components/HomePage/HomePageFeaturedProducts";
import PageSegment from "@/components/PageSegment";
import HomePageReviews from "@/components/HomePage/HomePageReviews";
import HomePagePostCardBanner from "@/components/HomePage/HomePagePostCardBanner";
import HomePageServices from "@/components/HomePage/HomePageServices";

const container = css`
  width: 100%;
`;

export type ProductInfo = {
  type: string;
  name: string;
  price: string;
  image: string;
  id: number;
  introduction: string;
  description: string;
  reviews: ReviewInfo[];
};

export type ReviewInfo = {
  name: string;
  id: number;
  description: string;
  image: string;
};

export const dummyReviewInfos: ReviewInfo[] = [
  {
    name: "Min Van",
    id: 1,
    description:
      "Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.",
    image:
      "https://websitedemos.net/store-04/wp-content/uploads/sites/157/2020/05/women-collection-1.jpg",
  },
  {
    name: "ALICIA HEART",
    id: 2,
    description:
      "Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.",
    image:
      "https://websitedemos.net/store-04/wp-content/uploads/sites/157/2020/05/men-collection.jpg",
  },
  {
    name: "JUAN CARLOS",
    id: 3,
    description:
      "Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future",
    image:
      "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-01.jpg",
  },
];

export const dummyProductInfos: ProductInfo[] = [
  {
    type: "Poster",
    name: "Poster V1",
    price: "23.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg",
    id: 1,
    introduction:
      "Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.",
    description:
      "<h3>Framed Without Borders:</h3><ul><li> Printed on High-Quality vinyl.</li><li> 1-inch thick wooden back frame.</li><li> No additional hanging hardware is required.</li><li> Care: Dust with a soft, dry cloth.</li></ul><h3>Framed With Borders & Acrylic Glass</h3> <ul><li>Printed on High-Quality matte photo paper.</li><li>Acrylic borders are used.</li> <li>Highly durable acrylic glass is used on the top to protect it from damage.</li> <li>Hooks are attached to the back of each frame for hanging.</li></ul><p><b>Note:</b> There may be a slight difference in actual color, due to the colors of display.</p>",

    reviews: dummyReviewInfos,
  },
  {
    reviews: dummyReviewInfos,
    type: "Poster",
    name: "Poster V2",
    price: "13.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg",
    id: 2,
    introduction:
      "Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.",
    description:
      "<h3>Framed Without Borders:</h3><ul><li> Printed on High-Quality vinyl.</li><li> 1-inch thick wooden back frame.</li><li> No additional hanging hardware is required.</li><li> Care: Dust with a soft, dry cloth.</li></ul><h3>Framed With Borders & Acrylic Glass</h3> <ul><li>Printed on High-Quality matte photo paper.</li><li>Acrylic borders are used.</li> <li>Highly durable acrylic glass is used on the top to protect it from damage.</li> <li>Hooks are attached to the back of each frame for hanging.</li></ul><p><b>Note:</b> There may be a slight difference in actual color, due to the colors of display.</p>",
  },
  {
    reviews: dummyReviewInfos,
    type: "Poster",
    name: "Poster V3",
    price: "12.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg",
    id: 3,
    introduction:
      "Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.",
    description:
      "<h3>Framed Without Borders:</h3><ul><li> Printed on High-Quality vinyl.</li><li> 1-inch thick wooden back frame.</li><li> No additional hanging hardware is required.</li><li> Care: Dust with a soft, dry cloth.</li></ul><h3>Framed With Borders & Acrylic Glass</h3> <ul><li>Printed on High-Quality matte photo paper.</li><li>Acrylic borders are used.</li> <li>Highly durable acrylic glass is used on the top to protect it from damage.</li> <li>Hooks are attached to the back of each frame for hanging.</li></ul><p><b>Note:</b> There may be a slight difference in actual color, due to the colors of display.</p>",
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
          <HomePageReviews reviews={dummyReviewInfos} />
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
