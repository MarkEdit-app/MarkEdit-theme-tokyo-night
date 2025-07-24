# MarkEdit-theme-tokyo-night

[Tokyo Night](https://github.com/tokyo-night) theme for [MarkEdit](https://github.com/MarkEdit-app/MarkEdit), built on top of [MarkEdit-theming](https://github.com/MarkEdit-app/MarkEdit-theming).

<img width="344" title="Tokyo Night Day" src="https://github.com/user-attachments/assets/314243e9-4dc4-4fdb-a540-bd4dd4fc0caa" /> <img width="344" title="Tokyo Night" src="https://github.com/user-attachments/assets/7df199aa-6cd5-4a81-9a7e-b88f2986e0c1" />

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
