import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import routeLinks from "@/routeLinks";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const icon = css`
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  color: ${colors.textPrimary};

  /* &:hover {
    color: ${colors.purple};
  } */
`;

const NavShoppingCart: FC = () => {
  return (
    <button>
      <ShoppingBasketIcon css={icon} />
    </button>
  );
};

export default NavShoppingCart;
