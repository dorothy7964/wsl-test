import styled from '@emotion/styled';

type BgStyleProps = {
  bgUrl: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const BgStyle = styled.div<BgStyleProps>`
  z-index: -2;
  position: absolute;
  top: ${({ top }) => top || 0};
  left: ${({ left }) => left || 0};
  right: ${({ right }) => right || 0};
  bottom: ${({ bottom }) => bottom || 0};
  width: 100%;
  height: 100vh;
  background: url('img/bg/${({ bgUrl }) => bgUrl}.png');
  background-repeat: no-repeat;
  background-position: ${({ position }) => position};
  background-size: cover;
  mix-blend-mode: screen;
`;

export default BgStyle;
