import { extendTheme } from '@chakra-ui/react';

const colors = {
  expenses: '#FED057', //yellow
  products: '#FFD8D0', //light pink
  car: '#FD9498', //pink
  care: '#C5BAFF', // purple
  child: '#6E78E8', // purple blue
  household: '#4A56E2', //blue
  education: '#81E1FF', //skyblue
  leisure: '#24CCA7', //light green
  other: '#00AD84', //green
  grey: '#cccc', //grey

  mainBrand: '#',
  secondaryBrand: '#',

  textMain: '#',
  textSecondary: '#',
  placeholder: '#',

  backgroundMain: '#',
  backgroundDark: '#',

  backDrop: 'rgba(0, 0, 0, 0.6)',

  accent: '#',
  hover: '#',
  focus: '#',
  muted: '#',
  disabled: '',

  etc: 'use declarative names (not black, green, red)',
};

const sizes = {
  container: {
    sm: '480px',
    md: '768px',
    lg: '1280px',
    xl: '1536px',
  },
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1280px',
  xl: '1536px',
  '2xl': '1920px',
};

const radii = {
  button: '20px',
};

const space = {
  spacing: value => `${4 * value}px`,
};

const fonts = {
  main: '',
};

const fontSizes = {};

export const theme = extendTheme({
  colors,
  breakpoints,
  radii,
  space,
  fonts,
  fontSizes,
  sizes,
});
