import { css } from "@emotion/react";
import { FC, memo, ReactNode } from "react";

const pageWrapper = css`
  max-width: 1200px;
  margin: auto;

  @media screen and (max-width: 1200px) {
    padding: 0 1rem;
  }
`;

const PageSegment: FC<{ children: ReactNode }> = memo(
  ({ children, ...remainingProps }) => (
    <div css={pageWrapper} {...remainingProps}>
      {children}
    </div>
  ),
);

PageSegment.displayName = "PageSegment";

export default PageSegment;
