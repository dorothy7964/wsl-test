import { mediaSize } from '@/common/mediaSize';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Mobile: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({
    query: mediaSize.mobile,
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const Tablet: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({
    query: mediaSize.tablet,
  });
  return <React.Fragment>{isTablet && children}</React.Fragment>;
};

const PC: React.FC = ({ children }) => {
  const isPc = useMediaQuery({
    query: mediaSize.pc,
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { Mobile, Tablet, PC };
