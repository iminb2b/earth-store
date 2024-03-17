import { FC } from "react";
import { css } from "@emotion/react";
import { sectionTitle } from "@/styles/generalStyles";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomIcon from "@mui/icons-material/Room";
import colors from "@/value/colors";

const container = css``;

const infoContainer = css`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const infoItemContainer = css`
  display: flex;
  gap: 2rem;
`;
const iconContainer = css`
  height: 3rem;
  width: 3rem;
  background-color: ${colors.green20};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;
const content = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const iconLarge = css``;
const name = css`
  font-weight: 500;
  letter-spacing: 2.5px;
  font-size: 1.125rem;
  color: ${colors.darkGray};
`;
const description = css`
  color: ${colors.green20};
`;

const ContactPageInfo: FC = () => {
  return (
    <div css={container}>
      <h3 css={sectionTitle}>Talk To Us</h3>
      <div css={infoContainer}>
        <div css={infoItemContainer}>
          <div css={iconContainer}>
            <EmailIcon css={iconLarge} />
          </div>
          <div css={content}>
            <h4 css={name}>EMAIL</h4>
            <a href="mailto:earth@store.com" css={description}>
              earth@store.com
            </a>
          </div>
        </div>
        <div css={infoItemContainer}>
          <div css={iconContainer}>
            <LocalPhoneIcon css={iconLarge} />
          </div>
          <div css={content}>
            <h4 css={name}>PHONE NUMBER</h4>
            <p css={description}>123-123-1232</p>
          </div>
        </div>
        <div css={infoItemContainer}>
          <div css={iconContainer}>
            <RoomIcon css={iconLarge} />
          </div>
          <div css={content}>
            <h4 css={name}>ADDRESS</h4>
            <p css={description}>2727 Ocean Road, Malibu, CA, 90264</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageInfo;
