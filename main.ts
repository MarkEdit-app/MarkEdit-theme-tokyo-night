import { CustomTheme, overrideThemes } from 'markedit-theming';
import { MarkEdit, type JSONObject, type JSONValue } from 'markedit-api';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';

const toObject = (value: JSONValue, fallback = {}) => (value ?? fallback) as JSONObject;
const rootValue = toObject(toObject(MarkEdit.userSettings)['extension.markeditThemeTokyoNight']);
const enabledMode = (rootValue.enabledMode ?? 'both') as string;

const lightTheme: CustomTheme = { extension: tokyoNightDay };
const darkTheme: CustomTheme = { extension: tokyoNight };

overrideThemes({
  light: ['both', 'light'].includes(enabledMode) ? lightTheme : undefined,
  dark: ['both', 'dark'].includes(enabledMode) ? darkTheme : undefined,
});
