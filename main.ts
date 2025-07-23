import { overrideThemes } from 'markedit-theming';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';

overrideThemes({
  light: { extension: tokyoNightDay },
  dark: { extension: tokyoNight },
  options: { settingsKey: 'extension.markeditThemeTokyoNight' },
});
