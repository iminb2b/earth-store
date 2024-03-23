import { FC, useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { AppContext } from "@/context/AppContext";
import { Button, Dialog, DialogDismiss, DialogHeading } from "@ariakit/react";
import NavProductList from "./NavProductList";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import buttonStyles from "@/styles/buttonStyles";
import { getCartQuery, graphQLClient } from "@/api/graphql";
import { ProductInfo } from "@/PageComponents/HomePage";
const container = css`
  display: flex;
`;

const dialog = css`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 35rem;
  display: flex;
  justify-content: flex-end;
  z-index: 20;
`;

const dialogContent = css`
  width: 35rem;
  background-color: ${colors.white};
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const buttonContainer = css`
  position: relative;
`;

const icon = css`
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  color: ${colors.textPrimary};
`;

const badge = css`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: black;
  color: white;
  padding: 0.25rem;
  border-radius: 100%;
  font-size: 0.75rem;
`;

const heading = css`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid #d7d7d7;
`;
const title = css``;
const button = css`
  cursor: pointer;
`;

const totalContainer = css`
  width: 100%;
  border-top: 1px solid #d7d7d7;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const checkoutContainer = css`
  ${totalContainer}

  flex-direction: column;
`;

export type Cart = {
  count: number;
  product: ProductInfo;
};

export type CartConnection = { cart: Cart[] };

const NavShoppingCart: FC = () => {
  const {
    state: { cartProductCounts, cart, username },
  } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.count * parseInt(item.product.price),
    0,
  );
  const pathname = usePathname();
  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    setOpen(false);
  }, [pathname]);

  return (
    <div css={container}>
      <Button
        onClick={() => setOpen(true)}
        className="button"
        css={buttonContainer}
      >
        <div css={badge}>{cartProductCounts}</div>
        <ShoppingBasketIcon css={icon} />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} css={dialog}>
        <div css={dialogContent}>
          <DialogHeading css={heading}>
            <div css={title}>Shopping Cart</div>
            <DialogDismiss css={button}>
              <CloseIcon />
            </DialogDismiss>
          </DialogHeading>
          {cart && <NavProductList list={cart} />}
          <div css={totalContainer}>
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div css={checkoutContainer}>
            <Link
              href={routeLinks.checkout()}
              aria-label="Checkout"
              css={buttonStyles}
            >
              CHeck out
            </Link>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default NavShoppingCart;
