/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

type ArrowProps = {
  color: string | 'theme';
  weight?: string;
  size: 'sm' | 'md' | 'lg';
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  direction: 'top' | 'bottom' | 'left' | 'right';
};

const Arrow = ({
  color,
  size,
  weight,
  borderStyle,
  direction,
}: ArrowProps): React.ReactElement | null => {
  /* 사이즈 */
  const arrowSize = (size: string) => {
    return css`
      width: ${size};
      height: ${size};
    `;
  };

  const arrowSizeType = () => {
    // sm 사이즈 - 스케줄 라인 옆 사이즈
    // md - 참가국가 모바일 버전
    // lg 사이즈 미정
    switch (size) {
      case 'sm':
        return arrowSize('15px');
      case 'md':
        return arrowSize('20px');
      case 'lg':
        return arrowSize('25px');
      default:
        return arrowSize('15px');
    }
  };

  /* 방향 */
  const arrowDirection = (direction: number) => {
    return css`
      transform: rotate(${direction + 'deg'});
    `;
  };

  const arrowDirectionType = () => {
    switch (direction) {
      case 'top':
        return arrowDirection(315);
      case 'bottom':
        return arrowDirection(135);
      case 'left':
        return arrowDirection(220);
      case 'right':
        return arrowDirection(45);
      default:
        return arrowDirection(45);
    }
  };

  return (
    <Wrapper
      css={[arrowSizeType(), arrowDirectionType()]}
      color={color}
      size={size}
      weight={weight}
      borderStyle={borderStyle}
      direction={direction}
    />
  );
};

const Wrapper = styled.div<ArrowProps>`
  /* 오른쪽 화살표 */
  border-top-width: ${({ weight }) => weight};
  border-right-width: ${({ weight }) => weight};

  border-top-style: ${({ borderStyle }) => borderStyle};
  border-right-style: ${({ borderStyle }) => borderStyle};

  /* 화살표 스타일 */
  border-right-style: ${({ borderStyle }) => borderStyle};
  border-color: ${({ theme, color }) => (color === 'theme' ? theme.pinkColor : color)};

  transition: all 0.5s;
`;

Arrow.defaultProps = {
  weight: '2px',
  borderStyle: 'solid',
} as ArrowProps;

export default Arrow;
