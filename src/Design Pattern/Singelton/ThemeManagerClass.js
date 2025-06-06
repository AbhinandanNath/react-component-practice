class ThemeManager {
  constructor() {
    if (ThemeManager.instance instanceof ThemeManager) {
      return ThemeManager.instance;
    }
    this.themeObject = {
      theme: "light",
      version: Math.floor(Math.random() * 400), //gives a random number upto 400
    };

    //Object.freeze(this.themeObject); // if you want tp prevent additon of new properties as well as  modification of existing one
    Object.seal(this.themeObject); // if you want to prevent additon of new properties but allow modification of existing one
    ThemeManager.instance = this;
  }

  getTheme() {
    return this.themeObject.theme;
  }

  getThemeVersion() {
    return this.themeObject.version;
  }

  setTheme(newTheme) {
    this.themeObject.theme = newTheme;
  }
}

const themeManager = new ThemeManager();
export default themeManager;
