import styled from '@emotion/styled';

const IconButtomMoveTriangle = styled.span<{ bottom: string }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  left: 50%;
  transform: translate(-50%, -0);

  border-top: 8px solid ${({ theme }) => theme.mainColor};
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;

  -webkit-animation: triangle 2s infinite;
  animation: triangle 2s infinite;
  opacity: 0;

  :nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }

  :nth-of-type(2) {
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }

  @-webkit-keyframes triangle {
    0% {
      -webkit-transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      -webkit-transform: translate(0, 15px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes triangle {
    0% {
      transform: translate(-50%, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(-50%, 10px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default IconButtomMoveTriangle;
