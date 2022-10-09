import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  SCREEN_DESKTOP_MIN_WIDTH,
  SCREEN_MOBILE_MAX_WIDTH,
  SCREEN_TABLET_MAX_WIDTH,
  SCREEN_TABLET_MIN_WIDTH,
} from '@/services';

export const useCustomMedia = () => {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: SCREEN_MOBILE_MAX_WIDTH,
  });

  const isTablet = useMediaQuery({
    minWidth: SCREEN_TABLET_MIN_WIDTH,
    maxWidth: SCREEN_TABLET_MAX_WIDTH,
  });

  const isDesktop = useMediaQuery({
    minWidth: SCREEN_DESKTOP_MIN_WIDTH,
  });

  useEffect(() => void setIsClient(true), []);

  return {
    isDesktop: isClient ? isDesktop : false,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : false,
  };
};
