/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

/**
 * @param width: 외곽선 굵기
 * @param color 외곽선 색상
 */

type strokeProps = {
  width: string;
  color: string;
};

const StrokeWrapper = styled.div<strokeProps>`
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: ${({ width }) => width} ${({ color }) => color};
  -webkit-text-fill-color: transparent;
`;

export default StrokeWrapper;
