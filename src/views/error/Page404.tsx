import ArrowBtn from '@/components/btn/ArrowBtn';
import BgStyle from '@/styles/wrapper/bgStyle';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const Page404 = (): React.ReactElement | null => {
  return (
    <div css={wrapper}>
      <BgStyle bgUrl="bg_logo_gray" />
      <h1>404</h1>
      <h1>PAGE NOT FOUND</h1>
      <div css={btnBox}>
        <ArrowBtn title="Go Back Home" url="/" />
      </div>
    </div>
  );
};

const wrapper = css`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const btnBox = css`
  margin-top: 199px;
`;

export default Page404;
