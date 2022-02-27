import styled from '@emotion/styled';

type BgWordStyleProps = {
  top: string;
  left: string;
};

const BgWordStyle = styled.div<BgWordStyleProps>`
  z-index: -2;
  position: absolute;
  top: ${({ top }) => top || 0};
  left: ${({ left }) => left || 0};
  width: 1972px;
  height: 1732px;
  background: url('img/bg/bg_world_text.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  opacity: 0.2;
`;

export default BgWordStyle;
