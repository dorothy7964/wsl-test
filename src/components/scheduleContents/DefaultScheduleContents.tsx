/** @jsx jsx */
import RowLine from '@/components/line/RowLine';
import Arrow from '@/components/arrow/Arrow';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React from 'react';

type DefaultScheduleContentsProps = {
  paragraph: string;
  title: string;
  icon: string;
  startDate?: string;
  endDate?: string;
};

const DefaultScheduleContents = ({
  paragraph,
  title,
  icon,
  startDate,
  endDate,
}: DefaultScheduleContentsProps): React.ReactElement | null => {
  const noneDate = _.isEmpty(startDate) && _.isEmpty(endDate);

  return (
    <div css={ScheduleWrapper}>
      <span css={arrowLine}>
        <RowLine color="theme" />
        <Arrow color="theme" size="sm" direction="right" />
      </span>
      <NumberImg
        src={`img/icon/number_${paragraph}.png`}
        alt={`schedule_number_${paragraph}`}
        width={100}
        height={60}
      />
      <Title>{title}</Title>
      <IconImg src={`img/icon/${icon}.png`} alt={title} width={178} height={135} />
      <DateContainer>
        <div>{startDate}</div>
        {!noneDate && <span>~</span>}
        <div>{endDate}</div>
      </DateContainer>
      <span css={bottomLine}>
        <RowLine color="theme" />
      </span>
    </div>
  );
};

const ScheduleWrapper = css`
  position: relative;
  width: 236px;
  height: 297px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const arrowLine = css`
  position: relative;
  width: 100%;
  margin-top: 41px;

  display: flex;
  align-items: center;

  div:nth-of-type(2) {
    color: orange;
    position: absolute;
    right: 0;
  }
`;

const NumberImg = styled.img`
  position: absolute;
  top: 0;
  left: 25px;
  // 이미지 filter 색상 - #aaa
  filter: invert(76%) sepia(2%) saturate(26%) hue-rotate(315deg) brightness(91%) contrast(88%);
`;

const Title = styled.div`
  color: ${({ theme }) => theme.pinkColor};
  font-weight: 500;
  margin-top: 58px;
`;

const IconImg = styled.img`
  margin: 5px;
  filter: opacity(0.5) drop-shadow(0 0 0 ${({ theme }) => theme.mainColor});
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;

  /* 날짜 : ~ */
  div {
    font-size: 1.6rem;
  }

  /* 간격 : ~ */
  span {
    margin: 0 10px;
  }
`;

const bottomLine = css`
  width: 100%;
  margin-top: 20px;
`;

DefaultScheduleContents.defaultProps = {
  startDate: '',
  endDate: '',
} as DefaultScheduleContentsProps;

export default DefaultScheduleContents;
