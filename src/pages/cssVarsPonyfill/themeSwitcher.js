import cssVars from "css-vars-ponyfill";
import themeMap from './theme'

const switcher = ({watch=true, variables, onlyLegacy=true}) => {
  cssVars({
    watch, // 当添加，删除或修改其或元素的禁用或href属性时，ponyfill将自行调用
    variables, // variables 自定义属性名/值对的集合
    onlyLegacy, // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
  });
}

const initTheme = () => {
  cssVars({
    watch: true,
    variables: themeMap.light,
    onlyLegacy: true,
  });
}


export {
  switcher,
  initTheme,
}