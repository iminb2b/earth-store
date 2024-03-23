import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import PageSegment from "@/components/PageSegment";
import { css } from "@emotion/react";
import { sectionTitle } from "@/styles/generalStyles";
import colors from "@/value/colors";
import CheckoutList from "@/components/CheckoutPage/CheckoutList";
import { useCallback, useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import routeLinks from "@/routeLinks";
const container = css`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
  border-top: 1px solid #d7d7d7;
  gap: 3rem;
`;
const title = css`
  ${sectionTitle}
  padding-top: 5rem;
  color: ${colors.green20};
  text-align: center;
`;

const icon = css`
  color: ${colors.white};
  cursor: pointer;
`;
const link = css`
  cursor: pointer;
  text-decoration: underline;
`;

const notification = css`
  width: 100%;
  font-size: 1.3125rem;
  background-color: ${colors.green10};
  color: ${colors.white};
  display: flex;
  padding: 1rem 2rem;
  gap: 2rem;
`;
const CheckoutPage: NextPage = () => {
  const {
    state: { username },
  } = useContext(AppContext);
  const [showNoti, setShowNoti] = useState<boolean>(!username);
  const onClick = useCallback(() => setShowNoti(false), []);
  return (
    <PageContainer>
      <PageMeta title="Min - Home Page" description={"Nhung Nguyen"} />

      <PageSegment>
        <div css={container}>
          <h3 css={title}>Check out</h3>
          {showNoti && (
            <div css={notification}>
              <button onClick={onClick}>
                <CloseIcon css={icon} />
              </button>
              <p>
                <Link
                  href={routeLinks.signIn()}
                  aria-label="To Sign In page"
                  css={link}
                >
                  Sign in{" "}
                </Link>
                to save your cart
              </p>
            </div>
          )}
          <CheckoutList />
        </div>
      </PageSegment>
    </PageContainer>
  );
};

export default CheckoutPage;
