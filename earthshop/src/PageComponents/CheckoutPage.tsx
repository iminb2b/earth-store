import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import PageSegment from "@/components/PageSegment";
import { css } from "@emotion/react";
import { sectionTitle } from "@/styles/generalStyles";
import colors from "@/value/colors";

const container = css`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  border-top: 1px solid #d7d7d7;
`;
const title = css`
  ${sectionTitle}
  padding-top: 5rem;
  color: ${colors.green20};
  text-align: center;
`;
const CheckoutPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="Min - Home Page" description={"Nhung Nguyen"} />

      <PageSegment>
        <div css={container}>
          <h3 css={title}>Check out</h3>
        </div>
      </PageSegment>
    </PageContainer>
  );
};

export default CheckoutPage;
