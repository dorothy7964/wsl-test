/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import HamburgerIcon from './HamburgerIcon';
import { useRecoilState } from 'recoil';
import menuToggleState from '@/recoil/headerToggleMenu';

const HamburgerMenu = (): React.ReactElement | null => {
  const [isShowCheck, setIsShowCheck] = useRecoilState(menuToggleState);

  return (
    <div>
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        css={input}
        defaultChecked={isShowCheck}
        onClick={() => setIsShowCheck((prev) => !prev)}
      />

      <HamburgerIcon isShowCehck={isShowCheck} />
    </div>
  );
};

const input = css`
  /* checkbos 가리기 */
  display: none;
`;

export default HamburgerMenu;
