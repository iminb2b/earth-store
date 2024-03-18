import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import Image from "next/image";
import colors from "@/value/colors";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const container = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  position: relative;

  :hover {
    #icon-container {
      opacity: 1;
    }
  }
`;

const productImage = css`
  position: relative;
  aspect-ratio: 1/1;
`;
const img = css``;
const productType = css`
  color: ${colors.white};
  width: fit-content;
  padding: 0.5rem;
  text-transform: uppercase;
  background-color: ${colors.green20};
  font-size: 0.85rem;
`;
const productName = css`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 500;
`;
const productPrice = css``;
const iconContainer = css`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 8;
  background-color: rgba(255, 255, 255, 0.7);
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-radius: 100%;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;
const icon = css`
  color: ${colors.green20};
`;

const ProductListItem: FC<{ product: ProductInfo }> = ({
  product: { name, type, price, image, id },
}) => {
  return (
    <Link css={container} href={routeLinks.product({ productId: id, type })}>
      <div css={iconContainer} id="icon-container">
        <ShoppingBasketIcon css={icon} />
      </div>
      <div css={productImage}>
        <Image src={image} fill sizes="19rem" css={img} alt={name} />
      </div>
      <div css={productType}>{type}</div>
      <h3 css={productName}>{name}</h3>
      <p css={productPrice}>${price}</p>
    </Link>
  );
};

export default ProductListItem;
