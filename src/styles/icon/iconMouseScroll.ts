import styled from '@emotion/styled';

const IconMouseScroll = styled.span`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -0);
  width: 30px;
  height: 50px;
  border: 4px solid ${({ theme }) => theme.mainColor};
  border-radius: 80px;

  ::before {
    position: absolute;
    top: 9px;
    left: 53%;
    content: '';
    width: 5px;
    height: 9px;
    margin-left: -3px;
    background-color: ${({ theme }) => theme.mainColor};
    border-radius: 2px;
    box-sizing: border-box;

    -webkit-animation: mousescroll 2s infinite;
    animation: mousescroll 2s infinite;

    @-webkit-keyframes mousescroll {
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
    @keyframes mousescroll {
      0% {
        transform: translate(0, 0);
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
      80% {
        transform: translate(0, 15px);
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

export default IconMouseScroll;
