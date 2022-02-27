/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

type HamburgerIconProps = {
  isShowCehck: boolean;
};

const HamburgerIcon = ({ isShowCehck }: HamburgerIconProps): React.ReactElement | null => {
  return (
    <Label css={changeMenuType(isShowCehck)} htmlFor="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  width: 26px;
  height: 18px;
  position: relative;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 8px;
    transition: all 0.35s;
    position: absolute;
  }
`;

const changeMenuType = (show: boolean) => {
  /* span 햄버거 한 줄 한 줄 처리 */
  if (show) {
    return css`
      & :nth-of-type(1) {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }

      & :nth-of-type(2) {
        opacity: 0;
      }

      & :nth-of-type(3) {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
      }
    `;
  }

  return css`
    & :nth-of-type(1) {
      top: 0;
    }

    & :nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
    }

    & :nth-of-type(3) {
      bottom: 0;
    }
  `;
};

HamburgerIcon.defaultProps = {} as HamburgerIconProps;

export default HamburgerIcon;
