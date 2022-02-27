/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import _ from 'lodash';
import React from 'react';
import RowLine from '@/components/line/RowLine';

type MobileScheduleContentsProps = {
  paragraph: string;
  title: string;
  icon: string;
  startDate?: string;
  endDate?: string;
};

const MobileScheduleContents = ({
  paragraph,
  title,
  icon,
  startDate,
  endDate,
}: MobileScheduleContentsProps): React.ReactElement | null => {
  const noneDate = _.isEmpty(startDate) && _.isEmpty(endDate);

  return (
    <div css={wrapper}>
      <div css={scheduleWrapper}>
        <NumberImg
          src={`img/icon/number_${paragraph}.png`}
          alt={`schedule_number_${paragraph}`}
          width={67}
          height={40}
        />
        <IconImg src={`img/icon/${icon}.png`} alt={title} width={93} height={72} />
        <div>
          <Title>{title}</Title>
          <DateContainer>
            <div>{startDate}</div>
            {!noneDate && <span>~</span>}
            <div>{endDate}</div>
          </DateContainer>
        </div>
      </div>
      <span css={bottomLine}>
        <RowLine color="theme" />
      </span>
    </div>
  );
};

const wrapper = css`
  width: 100%;
  margin: 1.5em 2.5em;
`;

const scheduleWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NumberImg = styled.img``;

const IconImg = styled.img`
  padding: 0 0.8em;
  // 이미지 filter 색상 - #aaa
  /* filter: invert(76%) sepia(2%) saturate(26%) hue-rotate(315deg) brightness(91%) contrast(88%); */
`;

const Title = styled.div`
  color: ${({ theme }) => theme.pinkColor};
  font-weight: 500;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px /* 날짜 : ~ */ div {
    font-size: 1.6rem;
  }

  /* 간격 : ~ */
  span {
    margin: 0 10px;
  }
`;

const bottomLine = css`
  display: block;
  margin-top: 0.5rem;
`;

MobileScheduleContents.defaultProps = {
  startDate: '',
  endDate: '',
} as MobileScheduleContentsProps;

export default MobileScheduleContents;
