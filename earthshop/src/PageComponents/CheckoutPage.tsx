import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import PageSegment from "@/components/PageSegment";
import { css } from "@emotion/react";
import { sectionTitle } from "@/styles/generalStyles";
import colors from "@/value/colors";
import CheckoutList from "@/components/CheckoutPage/CheckoutList";

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
const CheckoutPage: NextPage = () => {
  console.log("skdj");

  return (
    <PageContainer>
      <PageMeta title="Min - Home Page" description={"Nhung Nguyen"} />

      <PageSegment>
        <div css={container}>
          <h3 css={title}>Check out</h3>
          <CheckoutList />
        </div>
      </PageSegment>
    </PageContainer>
  );
};

export default CheckoutPage;
