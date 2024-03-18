import Link from "next/link";
import { FC, useCallback, useContext } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import routeLinks from "@/routeLinks";
import PersonIcon from "@mui/icons-material/Person";
import { Menu, MenuButton, MenuItem, MenuProvider } from "@ariakit/react";
import { AppContext } from "@/context/AppContext";
const icon = css`
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  color: ${colors.textPrimary};

  /* &:hover {
    color: ${colors.purple};
  } */
`;

const menu = css`
  position: relative;
  z-index: 50;
  display: flex;
  max-height: var(--popover-available-height);
  min-width: 180px;
  flex-direction: column;
  overflow: auto;
  overscroll-behavior: contain;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: hsl(204 20% 88%);
  background-color: hsl(204 20% 100%);
  padding: 0.5rem;
  color: hsl(204 4% 0%);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  outline: none !important;
`;
const menuItem = css`
  display: flex;
  cursor: default;
  scroll-margin: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  outline: none !important;
`;

const NavAuth: FC = () => {
  const {
    state: { username },
    dispatch,
  } = useContext(AppContext);

  const onLogoutClick = useCallback(
    () => dispatch({ type: "changeUsername", username: null }),
    [],
  );

  return username ? (
    <>
      <MenuProvider>
        <MenuButton className="button">
          <PersonIcon css={icon} />
        </MenuButton>
        <Menu gutter={8} css={menu}>
          <MenuItem css={menuItem} onClick={onLogoutClick}>
            Logout
          </MenuItem>
        </Menu>
      </MenuProvider>
    </>
  ) : (
    <Link href={routeLinks.signIn()} aria-label="Sign In ">
      <PersonIcon css={icon} />
    </Link>
  );
};

export default NavAuth;
