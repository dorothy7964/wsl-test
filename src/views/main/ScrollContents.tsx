/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import mainSlideContents from '@/views/main/mainSlideContents';
import Header from '@/layouts/header/Header';
import _ from 'lodash';
import React from 'react';
// @ts-ignore
import { FullPage, Slide } from 'react-full-page';

export const contentsWidth: string = '80%';
export const mobileWidth: string = '90%';

const ScrollContents = (): React.ReactElement | null => {
  const fullPageRef = React.createRef();

  return (
    <FullPage
      controls={Header}
      controlsProps={{ scrollPage: fullPageRef }}
      duration={50}
      ref={fullPageRef}
    >
      {_.map(mainSlideContents, (contents: any) => (
        <Slide key={contents.name}>
          <div css={slideWrapper}>{contents.element}</div>
        </Slide>
      ))}
    </FullPage>
  );
};

const slideWrapper = css`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
`;

export default ScrollContents;
