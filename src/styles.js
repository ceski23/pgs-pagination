/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/core';

const breakpointUp = (size, content) => css`
  @media (min-width: ${size}px) {
    ${content}
  }
`;

const breakpointUpTo = (size, content) => css`
  @media (max-width: ${size}px) {
    ${content}
  }
`;

export const forPhoneOnly = content => breakpointUpTo(599, content);
export const forTabletPortraitUp = content => breakpointUp(600, content);
export const forTabletLandscapeUp = content => breakpointUp(800, content);
export const forDesktopUp = content => breakpointUp(1200, content);
export const forBigDesktopUp = content => breakpointUp(1800, content);
