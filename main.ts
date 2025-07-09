import { overrideThemes } from 'markedit-theming';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';

overrideThemes({
  light: {
    extension: tokyoNightDay,
    colors: {
      accentColor: '#b15c00',
    },
  },
  dark: {
    extension: tokyoNight,
    colors: {
      accentColor: '#89ddff',
    },
  },
});
