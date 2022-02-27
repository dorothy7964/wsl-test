import ArrowBtn from '@/components/btn/ArrowBtn';
import BgStyle from '@/styles/wrapper/bgStyle';
import GradientWrapper from '@/styles/wrapper/gradientWrapper';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const Page404 = (): React.ReactElement | null => {
  return (
    <GradientWrapper>
      <BgStyle bgUrl="bg_logo_gray" position="bottom center" />
      <h1>404</h1>
      <h1>PAGE NOT FOUND</h1>
      <div css={btnBox}>
        <ArrowBtn title="Go Back Home" url="/" />
      </div>
    </GradientWrapper>
  );
};

const btnBox = css`
  margin-top: 199px;
`;

export default Page404;
