import { FC, useCallback, useContext } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import Image from "next/image";
import colors from "@/value/colors";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { AppContext } from "@/context/AppContext";

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

  cursor: pointer;

  &:hover {
    background-color: ${colors.green10};

    svg {
      color: ${colors.white};
    }
  }
`;
const icon = css`
  color: ${colors.green20};
`;

const ProductListItem: FC<{ product: ProductInfo }> = ({ product }) => {
  const { dispatch } = useContext(AppContext);

  const onClick = useCallback((e: any) => {
    e.preventDefault();

    dispatch({ type: "addToCart", product });
  }, []);

  return (
    <Link
      css={container}
      href={routeLinks.product({
        productId: product.id,
        type: product.type.name,
      })}
    >
      <button css={iconContainer} id="icon-container" onClick={onClick}>
        <ShoppingBasketIcon css={icon} />
      </button>
      <div css={productImage}>
        <Image
          src={product.image}
          fill
          sizes="19rem"
          css={img}
          alt={product.name}
        />
      </div>
      <div css={productType}>{product.type.name}</div>
      <h3 css={productName}>{product.name}</h3>
      <p css={productPrice}>${product.price}</p>
    </Link>
  );
};

export default ProductListItem;
