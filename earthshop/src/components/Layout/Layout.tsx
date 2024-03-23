import { Global, css } from "@emotion/react";
import { FC, ReactNode, useContext, useEffect } from "react";
import Header from "./Header";
import globalStyles from "@/styles/globalStyles";
import Footer from "./Footer";
import { getCartQuery, graphQLClient } from "@/api/graphql";
import { CartConnection } from "../Nav/NavShoppingCart";
import { AppContext } from "@/context/AppContext";

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
  const {
    state: { username },
    dispatch,
  } = useContext(AppContext);
  useEffect(() => {
    const getData = async () => {
      const storedUsername = await localStorage.getItem("user");

      dispatch({ type: "changeUsername", username: storedUsername ?? null });

      if (!username || !storedUsername) return;

      const data = (await graphQLClient.request(getCartQuery, {
        username,
      })) as CartConnection;

      dispatch({ type: "addToCarts", cart: data.cart });
    };

    getData();
  }, [username]);
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
