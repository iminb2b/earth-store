import PageContainer from "@/components/PageContent";
import { GetServerSideProps, NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import { css } from "@emotion/react";
import { ProductInfo } from "./HomePage";
import PageSegment from "@/components/PageSegment";
import FilterSection from "@/components/ProductsPage/FilterSection";
import ProductsSection from "@/components/ProductsPage/ProductsSection";

const container = css`
  margin-top: 5rem;
  border-top: 1px solid #d7d7d7;

  display: flex;

  padding: 5rem 0;
`;

type ProductsPageProps = {
  type: string;
};

export const productInfos: ProductInfo[] = [
  {
    type: "postcard",
    name: "Postcard V1",
    price: "23.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg",
    id: 1,
    introduction:
      "Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.",
  },
  {
    type: "poster",
    name: "Poster V2",
    price: "13.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg",
    id: 2,
    introduction:
      "Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.",
  },
  {
    type: "poster",
    name: "Poster V3",
    price: "12.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg",
    id: 3,
    introduction:
      "Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.",
  },
  {
    type: "postcard",
    name: "Postcard V1",
    price: "23.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg",
    id: 4,
    introduction:
      "Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.",
  },
  {
    type: "poster",
    name: "Poster V2",
    price: "13.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg",
    id: 5,
    introduction:
      "Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.",
  },
  {
    type: "postcard",
    name: "Postcard V3",
    price: "12.99",
    image:
      "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg",
    id: 6,
    introduction:
      "Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.",
  },
];

const ProductsPage: NextPage<ProductsPageProps> = ({ type }) => {
  return (
    <PageContainer>
      <PageMeta
        title="Earth Store - Products Page"
        description={"Earth Store - Products Page"}
      />
      <PageSegment>
        <div css={container}>
          <FilterSection products={productInfos} />
          <ProductsSection products={productInfos} type={type} />
        </div>
      </PageSegment>
    </PageContainer>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps<
  ProductsPageProps
> = async ({ query }) => {
  return { props: { type: query.category?.toString() ?? "" } };
};
