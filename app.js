const fs = require("fs/promises");
const homedir = require("os").homedir();
const home = `${homedir}/.config/Code/User/settings.json`;

function shrelify() {
  const shrelSettings = `{
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "editor.formatOnSave": true,
    "bracketPairColorizer.depreciation-notice": false,
    "editor.bracketPairColorization.enabled": true,
    "workbench.colorTheme": "United Ubuntu",
    "workbench.preferredDarkColorTheme": "United Ubuntu",
    "window.zoomLevel": -1,
  
    "workbench.colorCustomizations": {
      "terminal.foreground": "#00fd61",
    },
  }`;

  fs.writeFile(home, shrelSettings);
}

console.log("home:", home);

module.exports = shrelify;
