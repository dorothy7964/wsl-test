import styled from '@emotion/styled';
import React from 'react';

type RowLineProps = {
  color: string | 'theme';
  weight?: string;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
};

const RowLine = ({ color, weight, borderStyle }: RowLineProps): React.ReactElement | null => (
  <Wrapper color={color} weight={weight} borderStyle={borderStyle} />
);

const Wrapper = styled.div<RowLineProps>`
  width: 100%;
  border-top-width: ${({ weight }) => weight};
  border-style: ${({ borderStyle }) => borderStyle};
  border-color: ${({ theme, color }) => (color === 'theme' ? theme.pinkColor : color)};
`;

RowLine.defaultProps = {
  weight: '2px',
  borderStyle: 'solid',
} as RowLineProps;

export default RowLine;
