import IconMoveTriangle from '@/styles/icon/iconMoveTriangle';
import styled from '@emotion/styled';
import React from 'react';

type ArrowBtnProps = {
  url?: string;
  title: string;
};

const ArrowBtn = ({ url, title }: ArrowBtnProps): React.ReactElement | null => {
  return (
    <EntryBtn href={url} target="_blank">
      <span>{title}</span>
      <IconMoveTriangle />
      <IconMoveTriangle />
    </EntryBtn>
  );
};

const EntryBtn = styled.a`
  z-index: 1;
  position: relative;
  width: max-content;
  display: inline-flex;
  align-items: center;
  font-size: 3.3rem;
  font-weight: 600;
  padding: 0.3em 2em;
  color: ${({ theme }) => theme.mainColor};
  border: 2px solid ${({ theme }) => theme.mainColor};
  border-radius: 17px;

  span {
    margin-right: 25px;
  }

  :hover {
    color: ${({ theme }) => theme.hoverColor};
    border-color: ${({ theme }) => theme.hoverColor};

    div {
      border-left-color: ${({ theme }) => theme.hoverColor};
    }
  }
`;

ArrowBtn.defaultProps = {
  url: '/',
} as ArrowBtnProps;

export default ArrowBtn;
