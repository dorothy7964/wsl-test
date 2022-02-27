import styled from '@emotion/styled';

const GradientWrapper = styled.div`
  padding: 0 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgColor}; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    ${({ theme }) => theme.gradient}
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    ${({ theme }) => theme.gradient}
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 1 */
`;

export default GradientWrapper;
