import { FC } from "react";
import { css } from "@emotion/react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import colors from "@/value/colors";
const container = css`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  max-width: 100%;
  width: 100%;

  @media screen and (max-width: 688px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
  }
`;

const itemContainer = css`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 688px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;
const iconContainer = css`
  height: 3rem;
  width: 3rem;
  background-color: ${colors.green10};
  border-radius: 100%;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const title = css`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2.5px;
`;
const description = css`
  color: ${colors.darkGray};
`;
const icon = css`
  font-size: 1.5rem;
`;

const HomePageServices: FC = () => {
  return (
    <div css={container}>
      <div css={itemContainer}>
        <div css={iconContainer}>
          <LocalMallIcon css={icon} />
        </div>
        <div css={contentContainer}>
          <h5 css={title}>SECURE PAYMENT</h5>
          <p css={description}>All our payments our SSL secured</p>
        </div>
      </div>
      <div css={itemContainer}>
        <div css={iconContainer}>
          <Inventory2Icon css={icon} />
        </div>
        <div css={contentContainer}>
          <h5 css={title}>DELIVERED WITH CARE</h5>
          <p css={description}>Super fast shipping to your door</p>
        </div>
      </div>
      <div css={itemContainer}>
        <div css={iconContainer}>
          <VolunteerActivismIcon css={icon} />
        </div>
        <div css={contentContainer}>
          <h5 css={title}>EXCELLENT SERVICE</h5>
          <p css={description}>Live chat and phone support</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageServices;
