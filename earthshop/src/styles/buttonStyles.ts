import colors from "@/value/colors";
import { css } from "@emotion/react";

const buttonStyles = ({
  size = "medium",
}: {
  size?: "medium" | "large";
}) => css`
  color: ${colors.white};
  background-color: ${colors.green20};
  padding: ${size === "medium" ? "1rem 2rem" : "1.5rem"};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${size === "medium" ? "1rem" : "1.5rem"};
  font-size: clamp(0.75rem, 2vw, 1rem);

  height: ${size === "medium" ? "3rem" : "4.5rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  &:hover {
    background-color: ${colors.green10};
  }
`;

export default buttonStyles;
