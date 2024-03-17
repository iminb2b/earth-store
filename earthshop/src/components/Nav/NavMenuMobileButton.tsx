import { DialogDisclosure, DialogStore } from "@ariakit/react/dialog";
import { css } from "@emotion/react";
import { FC, memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import colors from "@/value/colors";
const iconTextColumn = css`
  background-color: transparent;
  border: none;
  @media screen and (min-width: 720px) {
    display: none;
  }
`;

const icon = css`
  font-size: 2rem;
  color: ${colors.purple};
`;

const NavMenuMobileButton: FC<{
  dialogStore: DialogStore;
}> = memo(({ dialogStore }) => {
  const dialogIsMounted = dialogStore.useState("mounted");

  return (
    <DialogDisclosure css={iconTextColumn} store={dialogStore}>
      {dialogIsMounted ? <CloseIcon css={icon} /> : <MenuIcon css={icon} />}
    </DialogDisclosure>
  );
});

export default NavMenuMobileButton;
