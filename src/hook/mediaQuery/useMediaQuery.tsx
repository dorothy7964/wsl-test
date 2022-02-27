import { mediaSize } from '@/common/mediaSize';
import { useMediaQuery } from 'react-responsive';

type screenType = 'mobile' | 'tablet' | 'pc';
const screens: screenType[] = ['mobile', 'tablet', 'pc'];

const useMedia = () => {
  const getMedia = screens.map((screen) => {
    return useMediaQuery({
      query: mediaSize[screen],
    });
  });

  return { isMobile: getMedia[0], isTablet: getMedia[1], isPc: getMedia[2] };
};

export default useMedia;
