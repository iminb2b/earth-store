import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import routeLinks from "@/routeLinks";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";

const logo = css`
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s ease;

  /* &:hover {
    color: ${colors.purple};
  } */
`;

const Logo: FC = () => {
  return (
    <Link href={routeLinks.home()} css={logo}>
      <Image
        src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE-200x35.png"
        height={35}
        width={200}
        alt="EARTH STORE"
      />
    </Link>
  );
};

export default Logo;
