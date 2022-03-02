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
// @ts-ignore
import Fade from 'react-reveal/Fade';

const GameTitles = (): React.ReactElement | null => {
  const { isMobile } = useMedia();

  return (
    <div css={[wrapper, gameTitleWrapper]}>
      <BgStyle bgUrl="bg_triangle" />

      <Fade top>
        <h2>WSL 2022 GAME TITLES</h2>
      </Fade>
      <GameLogoBox contentsWidth={contentsWidth} isMobile={isMobile}>
        <Fade top>
          {_.map(gameLogo, (game: IGameLogo, label: string) => (
            <div key={label}>
              <GameLogoItem isMobile={isMobile}>
                <img src={game.img} alt={game.lang} />
              </GameLogoItem>
              <h4 css={tagTitle}>{game.tag}</h4>
            </div>
          ))}
        </Fade>
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

  padding: ${({ isMobile }) => (isMobile ? '0em' : '1.5em 1em')};

  background-color: black;
  border: solid 1px #707070;
  box-shadow: 7px 7px 2px 0px #707070;

  img {
    width: ${({ isMobile }) => (isMobile ? '70%' : '90%')};
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
