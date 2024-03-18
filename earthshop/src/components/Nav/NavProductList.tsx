import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import NavProductListItem from "./NavProductListItem";

const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
  flex: 1;
`;

const NavProductList: FC<{
  list: Array<{ product: ProductInfo; count: number }>;
}> = ({ list }) => {
  return (
    <div css={container}>
      {list.map((item) => (
        <NavProductListItem
          product={item.product}
          count={item.count}
          key={item.product.id}
        />
      ))}
    </div>
  );
};

export default NavProductList;
