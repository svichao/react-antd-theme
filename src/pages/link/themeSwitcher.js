import { ConfigProvider } from 'antd';
import { isString, isPlainObject } from 'lodash'

const id = 'theme-style'
const attr = 'data-theme'
const storageKey = 'md-theme'
const prefetchId = 'theme-prefetch'

const getThemeMap = () => {
  const timestamp = new Date().getTime();
  return {
    dark: `/css/dark.css?${timestamp}`,
    compact: `/css/compact.css?${timestamp}`,
  };
}

const storeTheme = (theme) => {
  localStorage.removeItem(storageKey);
  localStorage.setItem(storageKey, theme);
}

const removePreTheme = () => {
  const dom = document.getElementById(id);
  if (dom) {
    dom.remove();
  }
}

const getTheme = function getTheme() {
  return localStorage.getItem(storageKey);
};

const switcher = ({ theme, useStorage = true }) => {
  removePreTheme()

  if (useStorage) {
    storeTheme(theme)
  }

  const themeMap = getThemeMap()
  if (themeMap[theme]) {
    const style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.id = id;
    style.href = themeMap[theme];
    document.body.append(style);
  }

  document.body.setAttribute(attr, theme);
};

const prefetchTheme = () => {
  const themeMap = getThemeMap()
  const themes = Object.keys(themeMap);
  themes.forEach(function (theme) {
    const themeAssetId = ''.concat(prefetchId, '-').concat(theme);

    if (!document.getElementById(themeAssetId)) {
      // add prefetch
      const stylePrefetch = document.createElement('link');
      stylePrefetch.rel = 'prefetch';
      stylePrefetch.type = 'text/css';
      stylePrefetch.id = themeAssetId;
      stylePrefetch.href = themeMap[theme];
      document.head.append(stylePrefetch);
    }
  });
}

const initTheme = () => {
  let theme = getTheme()

  if (theme === 'dark' || theme === 'compact') {
    switcher({
      theme,
      useStorage: true,
    });
  } else if (isString(theme)) {
    try {
      theme = JSON.parse(theme)
    } catch (error) {
      theme = {}
    }
    isPlainObject(theme) && ConfigProvider.config({
      theme
    });
    setCustomColor(theme)
  }
}

// 驼峰转换中划线
function toLine(name) {
  return name.replace(/([A-Z])/g, '-$1').toLowerCase();
}

const setCustomColor = (colorMap) => {
  if (!isPlainObject(colorMap)) return
  const customList = [ 'headerColor', 'siderColor' ]
  Object.keys(colorMap).filter(key => customList.includes(key)).forEach(key => {
    const color = colorMap[key]
    document.body.style.setProperty(`--md-${toLine(key)}`, color);
  })
}

export {
  switcher,
  getTheme,
  removePreTheme,
  initTheme,
  storeTheme,
  prefetchTheme,
  getThemeMap,
  setCustomColor,
}