import styled from '@emotion/styled';
import React from 'react';

const ImgWslLogoV = (): React.ReactElement | null => {
  return <Wrapper />;
};

const Wrapper = styled.a`
  background: url(${({ theme }) => theme.wslLogoUrlv}) no-repeat;
  width: 314px;
  height: 232px;
  display: inline-block;
`;

export default ImgWslLogoV;
