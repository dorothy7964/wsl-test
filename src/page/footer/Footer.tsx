/** @jsx jsx */
import ImgWslLogoV from '@/components/logoImg/ImgWslLogoV';
import useMedia from '@/hook/mediaQuery/useMediaQuery';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMailOpen, HiOfficeBuilding, HiUser, HiCheck } from 'react-icons/hi';

const Footer = (): React.ReactElement | null => {
  const { isMobile, isTablet, isPc } = useMedia();
  const target: string = '_blank';

  return (
    <Wrapper isMobile={isMobile}>
      <Section isMobile={isMobile} isTablet={isTablet} isPc={isPc}>
        <LeftSectoin isMobile={isMobile}>
          <SNSBox>
            <a
              title="youtube"
              href="https://www.youtube.com/channel/UCYNXHnnV-TALLmuweCl2ENQ"
              target={target}
            >
              <FaYoutube />
            </a>
            <a title="facebook" href="https://www.facebook.com/wslesports" target={target}>
              <FaFacebookF />
            </a>
            <a title="instagram" href="https://www.instagram.com/wslesports/" target={target}>
              <FaInstagram />
            </a>
            <a title="twitter" href="https://twitter.com/WSL_esports" target={target}>
              <FaTwitter />
            </a>
          </SNSBox>
          <ContactBox>
            <h2>CONTACT</h2>
            <div css={contactWrapper}>
              <span>
                <HiMailOpen />
                wsl_pr@technoblood.com
              </span>
              <span>
                <HiOfficeBuilding />
                company: World eSports Leaue Inc.
              </span>
              <span>
                <HiUser />
                CEO : Yoo, Ilyoung
              </span>
              <span>
                <HiCheck />
                business number :524-87-02000
              </span>
              <span>
                <FaMapMarkerAlt />
                address : 14, Achasan-ro 7na-gil,
                <br /> Seongdong-gu, Seoul, Republic of Korea
              </span>
            </div>
          </ContactBox>
        </LeftSectoin>
        <RightSection isMobile={isMobile}>
          <ImgWslLogoV />
        </RightSection>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isMobile: boolean }>`
  background-color: #131925;
  color: #868e9f;
  padding: 0 2em;
  width: 100vw;
  height: 100vh;
`;

const Section = styled.div<{ isMobile: boolean; isTablet: boolean; isPc: boolean }>`
  width: ${({ isMobile }) => isMobile && '100%'};
  width: ${({ isTablet }) => isTablet && '95%'};
  width: ${({ isPc }) => isPc && '80%'};
  height: 100%;
  display: flex;
  margin: 0 auto;
`;

const LeftSectoin = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '100%' : '50%')};
  display: flex;
  flex-direction: column;
  justify-content: ${({ isMobile }) => (isMobile ? 'space-around' : 'center')};
  align-items: ${({ isMobile }) => (isMobile ? 'center' : 'start')};
`;

const RightSection = styled.div<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SNSBox = styled.div`
  cursor: pointer;
  font-size: 5rem;
  width: 38rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 140px;

  a:hover {
    :nth-of-type(1) {
      color: #ff0000;
    }
    :nth-of-type(2) {
      color: #1876f2;
    }
    :nth-of-type(3) {
      color: #bc4292;
    }
    :nth-of-type(4) {
      color: #1d9bf0;
    }
  }
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: keep-all;

  h2 {
    margin-bottom: 29px;
    font-size: 21px;
    font-weight: 500;
  }
`;

const contactWrapper = css`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
  height: 29rem;

  svg {
    font-size: 3.2rem;
    margin-right: 23.8px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 20px;
  }
`;

export default Footer;
