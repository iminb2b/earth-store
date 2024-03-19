import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useCallback, useContext, useEffect, useRef } from "react";
import { AppContext } from "@/context/AppContext";
import PageSegment from "@/components/PageSegment";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import buttonStyles from "@/styles/buttonStyles";
import { sectionTitle } from "@/styles/generalStyles";
import { useRouter } from "next/router";
import routeLinks from "@/routeLinks";
const inputBox = css`
  padding: 0.75rem;
  border: 1px solid ${colors.green10};
`;
const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const inputContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  outline: none;
`;

const label = css`
  color: ${colors.green20};
`;

const formContainer = css`
  width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid ${colors.green20};
`;

const title = css`
  ${sectionTitle}
  color: ${colors.green20};
  text-align: center;
`;
const SignInPage: NextPage = () => {
  const { dispatch } = useContext(AppContext);
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);

  const onLoginClick = useCallback((e: any) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    dispatch({ type: "changeUsername", username: email ?? "" });
    router.push(routeLinks.home());
  }, []);

  console.log("skdj");

  return (
    <PageContainer>
      <PageMeta
        title="Earth Store - Sign In "
        description={"Earth Store - Sign In"}
      />

      <PageSegment>
        <div css={container}>
          <form css={formContainer} onSubmit={onLoginClick}>
            <h3 css={title}>SIGN IN</h3>
            <div css={inputContainer}>
              <label css={label}>Email</label>
              <input
                css={inputBox}
                type="email"
                placeholder="Email"
                ref={emailRef}
              />
            </div>
            <button type="submit" css={buttonStyles({ size: "medium" })}>
              SIGN IN
            </button>
          </form>
        </div>
      </PageSegment>
    </PageContainer>
  );
};

export default SignInPage;
