import { FC } from "react";
import { css } from "@emotion/react";
import { sectionTitle } from "@/styles/generalStyles";
import colors from "@/value/colors";
import buttonStyles from "@/styles/buttonStyles";

const container = css``;
const inputBox = css`
  padding: 0.75rem;
  border: 1px solid ${colors.green10};
`;
const textBox = css`
  border: 1px solid ${colors.green10};
  padding: 0.75rem;
  height: 10rem;
`;
const formContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 0;
`;

const ContactPageMessage: FC = () => {
  return (
    <div css={container}>
      <h3 css={sectionTitle}>get in touch</h3>
      <form css={formContainer}>
        <input css={inputBox} type="text" placeholder="Full Name" />
        <input css={inputBox} type="email" placeholder="Email" />
        <textarea css={textBox} placeholder="Enter Your Message..." />
        <button css={buttonStyles({ size: "medium" })}>SEND NOW</button>
      </form>
    </div>
  );
};

export default ContactPageMessage;
