/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { gameLogo } from '@/common/gameLogo';
import styled from '@emotion/styled';
import _ from 'lodash';
import React from 'react';
import { contentsWidth } from '@/views/main/ScrollContents';
import BgStyle from '@/styles/wrapper/bgStyle';
import { wrapper } from '@/styles/wrapper/wrapper';
import useMedia from '@/hook/mediaQuery/useMediaQuery';

const GameTitles = (): React.ReactElement | null => {
  const { isMobile } = useMedia();

  return (
    <div css={[wrapper, gameTitleWrapper]}>
      <BgStyle bgUrl="bg_triangle" />
      <h2>WSL 2022 GAME TITLES</h2>
      <GameLogoBox contentsWidth={contentsWidth} isMobile={isMobile}>
        {_.map(gameLogo, (game: IGameLogo, label: string) => (
          <div key={label}>
            <GameLogoItem isMobile={isMobile}>
              <img src={game.img} alt={game.lang} />
            </GameLogoItem>
            <h4 css={tagTitle}>{game.tag}</h4>
          </div>
        ))}
      </GameLogoBox>
    </div>
  );
};

const GameLogoBox = styled.div<{ contentsWidth: string; isMobile: boolean }>`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: ${({ contentsWidth }) => contentsWidth};
  margin-top: ${({ isMobile }) => (isMobile ? '30px' : '152px')};
`;

const GameLogoItem = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ isMobile }) => (isMobile ? '210px' : '270px')};
  height: ${({ isMobile }) => (isMobile ? '140px' : '180px')};

  background-color: black;
  border: solid 1px #707070;
  box-shadow: 7px 7px 2px 0px #707070;

  img {
    width: ${({ isMobile }) => (isMobile ? '90%' : '100%')};
  }
`;

const gameTitleWrapper = css`
  padding-top: 2em;
`;

const tagTitle = css`
  margin: 15px 0;
  text-align: center;
`;

export default GameTitles;
