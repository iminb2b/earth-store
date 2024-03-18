import { FC } from "react";
import { css } from "@emotion/react";
import { ProductInfo } from "@/PageComponents/HomePage";
import Image from "next/image";

const container = css`
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  grid-gap: 2rem;
`;

const title = css`
  line-height: 150px;
  font-size: 1.5rem;
  font-weight: 500;
`;
const text = css`
  line-height: 150px;
  text-align: center;
`;

const CheckoutListItem: FC<{ product: ProductInfo; index: number }> = ({
  product,
  index,
}) => {
  return (
    <div css={container}>
      <div>
        <h3 css={text}>{index + 1}</h3>
      </div>
      <Image src={product.image} height={150} width={150} alt={product.name} />

      <div>
        <h3 css={title}>{product.name}</h3>
      </div>
      <div>
        <h3 css={text}>2</h3>
      </div>
      <div>
        <h3 css={text}>{product.price}</h3>
      </div>
    </div>
  );
};

export default CheckoutListItem;
