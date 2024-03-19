import { FC, useCallback, useState } from "react";
import { css } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import colors from "@/value/colors";
import buttonStyles from "@/styles/buttonStyles";
const container = css`
  display: flex;
  gap: 2rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const quantityContainer = css`
  display: flex;
`;

const inputBox = css`
  height: 3rem;
  width: 3rem;
  text-align: center;
  line-height: 3rem;
  border: ${colors.green20} 1px solid;
  outline: none;
`;
const icon = css`
  color: ${colors.white};
`;

const button = css`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.green20};
`;

const Quantity: FC = () => {
  const [count, setCount] = useState<number>(0);

  const decrement = useCallback(
    () => setCount((prev) => (prev < 1 ? 0 : prev - 1)),
    [],
  );
  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const onChange = useCallback((e: any) => setCount(e.target.value ?? 0), []);

  return (
    <div css={container}>
      <div css={quantityContainer}>
        <button css={button} onClick={decrement}>
          <RemoveIcon css={icon} />
        </button>
        <input
          css={inputBox}
          type="number"
          min={1}
          value={count}
          onChange={onChange}
        />
        <button css={button} onClick={increment}>
          <AddIcon css={icon} />
        </button>
      </div>

      <button css={buttonStyles({ size: "medium" })}>Add To cart</button>
    </div>
  );
};

export default Quantity;
