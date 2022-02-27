import styled from '@emotion/styled';
/**
 * 얇은 화살표
 * 아래 방향 스크롤 유도
 * 현재 사용하지 않음
 */
const IconArrow = styled.span`
  position: absolute;
  bottom: 6%;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid ${({ theme }) => theme.mainColor};
  border-bottom: 1px solid ${({ theme }) => theme.mainColor};
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: arrow 2s infinite;
  animation: arrow 2s infinite;
  opacity: 0;
  box-sizing: border-box;

  :nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }

  :nth-of-type(2) {
    bottom: 4%;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }

  :nth-of-type(3) {
    bottom: 2%;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  @-webkit-keyframes arrow {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes arrow {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default IconArrow;
