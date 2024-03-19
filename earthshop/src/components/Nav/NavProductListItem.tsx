import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import Image from "next/image";
import colors from "@/value/colors";
import Link from "next/link";
import routeLinks from "@/routeLinks";

const container = css`
  display: flex;
  gap: 1rem;
  width: 100%;
  position: relative;
`;

const productImage = css`
  position: relative;
  aspect-ratio: 1/1;
  height: 100%;
  width: 4rem;
`;
const img = css``;

const productName = css`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
`;
const productPrice = css`
  color: ${colors.darkGray};
  line-height: 2;
`;

const NavProductListItem: FC<{ product: ProductInfo; count: number }> = ({
  product: { name, type, price, image, id, slug },
  count,
}) => {
  return (
    <Link
      css={container}
      href={routeLinks.product({ productId: slug, type: type.name })}
    >
      <div css={productImage}>
        <Image src={image} fill sizes="19rem" css={img} alt={name} />
      </div>
      <div>
        <h3 css={productName}>{name}</h3>
        <p css={productPrice}>
          {count} x ${price}
        </p>
      </div>
    </Link>
  );
};

export default NavProductListItem;
