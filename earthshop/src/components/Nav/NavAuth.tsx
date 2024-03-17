import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import routeLinks from "@/routeLinks";
import PersonIcon from "@mui/icons-material/Person";
const icon = css`
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  color: ${colors.textPrimary};

  /* &:hover {
    color: ${colors.purple};
  } */
`;

const NavAuth: FC = () => {
  return (
    <button>
      <PersonIcon css={icon} />
    </button>
  );
};

export default NavAuth;
