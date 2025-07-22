import { overrideThemes } from 'markedit-theming';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';

overrideThemes({
  light: {
    extension: tokyoNightDay,
    colors: {
      subtleEmphasis: true,
    },
  },
  dark: {
    extension: tokyoNight,
    colors: {
      subtleEmphasis: true,
    },
  },
  options: {
    settingsKey: 'extension.markeditThemeTokyoNight',
  },
});
