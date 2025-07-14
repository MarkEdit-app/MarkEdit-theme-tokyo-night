# MarkEdit-theme-tokyo-night

[Tokyo Night](https://github.com/tokyo-night) theme for [MarkEdit](https://github.com/MarkEdit-app/MarkEdit), built on top of [MarkEdit-theming](https://github.com/MarkEdit-app/MarkEdit-theming).

To customize colors, see [Customization](https://github.com/MarkEdit-app/MarkEdit-theming/wiki#customization) for details.

## Installation

Copy [dist/markedit-theme-tokyo-night.js](dist/markedit-theme-tokyo-night.js) to `~/Library/Containers/app.cyan.markedit/Data/Documents/scripts/`.

You can also run `yarn install && yarn build` to build and deploy the script.

## Settings

In [settings.json](https://github.com/MarkEdit-app/MarkEdit/wiki/Customization#advanced-settings), you can define a settings node named `extension.markeditThemeTokyoNight` to configure this extension, default settings are:

```json
{
  "extension.markeditThemeTokyoNight": {
    "enabledMode": "both"
  }
}
```

- `enabledMode`: Enabled color scheme (`both`, `light`, `dark`, or `none` to disable).
