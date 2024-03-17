import { Global, css } from "@emotion/react";
import { FC, ReactNode } from "react";
import Header from "./Header";
import globalStyles from "@/styles/globalStyles";
import Footer from "./Footer";

const pageContainer = css`
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: relative;
  padding: 0;
  margin: 0;
`;
const contentContainer = css`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div css={pageContainer}>
      <Global styles={globalStyles} />
      <Header />
      <div css={contentContainer}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
