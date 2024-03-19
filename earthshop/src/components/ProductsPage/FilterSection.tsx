import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import colors from "@/value/colors";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import ProductListSmall from "./ProductListSmall";
import { AppContext } from "@/context/AppContext";

const container = css`
  border-right: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-width: 15rem;
  max-width: 15rem;
`;

const categoryTitle = css`
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
`;
const flexContainer = css`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  gap: 1rem;
  padding: 1rem 0;
  color: ${colors.green10};
`;

const FilterSection: FC<{ products: ProductInfo[] }> = ({ products }) => {
  const {
    state: { recentlyViewed },
  } = useContext(AppContext);

  const postcardCounts = products.filter(
    (product) => product.type.name === "postcard",
  ).length;

  const posterCounts = products.filter(
    (product) => product.type.name === "poster",
  ).length;

  const paintsCounts = products.filter(
    (product) => product.type.name === "paint",
  ).length;

  return (
    <div css={container}>
      <div>
        <b css={categoryTitle}>Categories</b>
        <ul css={flexContainer}>
          <Link href={routeLinks.productType({ type: "postcard" })}>
            Postcards ({postcardCounts})
          </Link>
          <Link href={routeLinks.productType({ type: "poster" })}>
            Posters ({posterCounts})
          </Link>
          <Link href={routeLinks.productType({ type: "paint" })}>
            Paints ({paintsCounts})
          </Link>
        </ul>
      </div>

      <div>
        <b css={categoryTitle}>Recently Viewed</b>
        <ul css={flexContainer}>
          <ProductListSmall products={recentlyViewed} />
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
