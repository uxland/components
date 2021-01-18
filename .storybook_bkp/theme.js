import { create } from '@storybook/theming/create';

const uxlBaseColor = '#009688';
const uxlSecondaryColor = '#006064';

export default create({
  base: 'light',

  colorPrimary: uxlSecondaryColor,
  colorSecondary: uxlBaseColor,

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: uxlBaseColor,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: uxlSecondaryColor,
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: uxlSecondaryColor,
  barBg: uxlBaseColor,

  // Form colors
  inputBg: 'white',
  inputBorder: uxlBaseColor,
  inputTextColor: uxlBaseColor,
  inputBorderRadius: 4,

  brandTitle: 'UXLand Components Library',
  brandUrl: 'https://www.uxland.es',
  brandImage: 'https://www.uxland.es/wp-content/uploads/2018/02/uxland_logo_2018-web_cropped-hd.png',
});
