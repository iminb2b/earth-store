import { FC, useContext } from "react";
import { css } from "@emotion/react";
import CheckoutListItem from "./CheckoutListItem";
import colors from "@/value/colors";
import buttonStyles from "@/styles/buttonStyles";
import { AppContext } from "@/context/AppContext";

const container = css`
  border-top: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
`;

const productContainer = css`
  border-top: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
`;
const headerContainer = css`
  padding: 2rem;
  grid-gap: 2rem;

  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
`;

const heading = css`
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  color: ${colors.green20};
`;
const text = css`
  text-align: center;
`;

const CheckoutList: FC = () => {
  const {
    state: { cart, cartProductCounts },
  } = useContext(AppContext);

  const price = cart.reduce(
    (acc, curr) => acc + parseInt(curr.product.price) * curr.count,
    0,
  );

  return (
    <div css={container}>
      <div css={headerContainer}>
        <h3 css={heading}>Index</h3>
        <h3 css={heading}>Product</h3>
        <h3 css={heading}>Quantity</h3>
        <h3 css={heading}>Price</h3>
      </div>
      <div css={productContainer}>
        {cart.map((item, index) => (
          <CheckoutListItem
            product={item.product}
            key={item.product.id}
            index={index}
            count={item.count}
          />
        ))}
      </div>
      <div css={headerContainer}>
        <h3 css={text}></h3>
        <h3 css={text}></h3>
        <h3 css={text}>{cartProductCounts}</h3>
        <h3 css={text}>${price}</h3>
      </div>

      <button css={buttonStyles}>CHECK OUT</button>
    </div>
  );
};

export default CheckoutList;
