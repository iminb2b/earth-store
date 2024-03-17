import colors from "@/value/colors";
import { css } from "@emotion/react";

const buttonStyles = ({
  size = "medium",
  primary = true,
}: {
  size?: "medium" | "large";
  primary?: boolean;
}) => css`
  color: ${colors.white};
  background-color: ${primary ? colors.green20 : colors.green10};
  padding: ${size === "medium" ? "1rem 2rem" : "1.5rem"};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  height: ${size === "medium" ? "3rem" : "4.5rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  &:hover {
    background-color: ${colors.green10};
  }
`;

export default buttonStyles;
