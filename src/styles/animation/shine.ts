import styled from '@emotion/styled';

/**
 * @param color: 전체 색상
 * @param shineColor 움직이는 색상
 * @param bgPosition 글자 수에 맞춰 크기 조절
 */

type shineProps = {
  color: string;
  shineColor: string;
  bgPosition: string;
};

export const ShineMotion = styled.span<shineProps>`
  background: linear-gradient(
    to right,
    ${({ color }) => color} 0,
    ${({ shineColor }) => shineColor} 10%,
    ${({ color }) => color} 20%
  );
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 1s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  text-decoration: none;
  white-space: nowrap;
  padding: 0 10px;

  @keyframes shine {
    0% {
      background-position: -5px;
    }
    60% {
      background-position: ${({ bgPosition }) => bgPosition};
    }
    100% {
      background-position: ${({ bgPosition }) => bgPosition};
    }
  }
`;
