/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    headerRGBColor: string;
    mainColor: string;
    bgColor: string;
    hoverColor: string;
    pinkColor: string;
    gradient: string;
    menuLogoUrl: string;
    wslLogoUrlv: string;
    wslLogoUrlh: string;
  }
}
