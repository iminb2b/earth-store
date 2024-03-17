import { FC } from "react";
import { css } from "@emotion/react";
import ContactPageMessage from "./ContactPageMessage";
import ContactPageInfo from "./ContactPageInfo";

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5rem 0;
  grid-gap: 4rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ContactPageContent: FC = () => {
  return (
    <div css={container}>
      <ContactPageMessage />
      <ContactPageInfo />
    </div>
  );
};

export default ContactPageContent;
