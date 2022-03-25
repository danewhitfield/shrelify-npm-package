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
      "errorForeground": "#fd0000",
      "scrollbarSlider.background": "#00fd61",
      "sideBar.foreground": "#00fd61",
      "sideBarTitle.foreground": "#00fd61",
      "sideBarSectionHeader.foreground": "#00fd61",
    "panelTitle.activeForeground": "#00fd61",
    "panelTitle.inactiveForeground": "#009b05",
    "statusBar.foreground": "#00fd61",
    "statusBar.border": "#00fd61",
    "notificationCenterHeader.foreground": "#00fd61",
    "notifications.foreground": "#00fd61",
    "notificationLink.foreground": "#00fd61",
    },
  }`;

  fs.writeFile(home, shrelSettings);
}

console.log("home:", home);

module.exports = shrelify;
