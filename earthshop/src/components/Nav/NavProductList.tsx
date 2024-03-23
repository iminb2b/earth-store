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

  overflow: scroll;
`;

const NavProductList: FC<{
  list: Array<{ product: ProductInfo; count: number }>;
}> = ({ list }) => {
  return (
    <div css={container}>
      {list.map((item, index) => (
        <NavProductListItem
          product={item.product}
          count={item.count}
          key={index}
        />
      ))}
    </div>
  );
};

export default NavProductList;
