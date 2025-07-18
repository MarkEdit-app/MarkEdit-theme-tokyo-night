import { overrideThemes } from 'markedit-theming';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';

overrideThemes({
  light: { extension: tokyoNightDay },
  dark: { extension: tokyoNight },
  options: { settingsKey: 'extension.markeditThemeTokyoNight' },
});
