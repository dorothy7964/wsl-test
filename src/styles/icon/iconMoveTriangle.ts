import styled from '@emotion/styled';

const IconMoveTriangle = styled.div`
  width: 0px;
  height: 0px;
  font-size: 2rem;
  border-left: 1.4em solid ${({ theme }) => theme.mainColor};
  border-top: 0.7em solid transparent;
  border-bottom: 0.7em solid transparent;
  -webkit-animation: movetriangle 2s infinite;
  animation: movetriangle 2s infinite;
  opacity: 1;
  box-sizing: border-box;

  :nth-of-type(1) {
    margin-right: 0.5em;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }

  :nth-of-type(2) {
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }

  @-webkit-keyframes movetriangle {
    0% {
      -webkit-transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      -webkit-transform: translate(15px, 0);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes movetriangle {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(15px, 0);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default IconMoveTriangle;
