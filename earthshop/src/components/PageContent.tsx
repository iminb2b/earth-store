import { css } from "@emotion/react";
import { FC, memo, ReactNode } from "react";

const pageWrapper = css`
  width: 100%;
`;

const PageContainer: FC<{ children: ReactNode }> = memo(
  ({ children, ...remainingProps }) => (
    <div css={pageWrapper} {...remainingProps}>
      {children}
    </div>
  ),
);

PageContainer.displayName = "PageContainer";

export default PageContainer;
