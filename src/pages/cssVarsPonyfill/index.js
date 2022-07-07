import React, { useEffect } from 'react'
import { switcher, initTheme } from "./themeSwitcher";
import themeMap from "./theme";
import './style.css'

const themeList = [
  {key: 'light', label: '自定义浅色主题'},
  {key: 'dark', label: '自定义暗黑主题'}
]

function CssVarsPonyfill() {

  useEffect(() => {
    initTheme()
  }, [])

  const changeTheme = ({theme}) => {
    switcher({
      watch: true,
      variables: themeMap[theme],
      onlyLegacy: true,
    });
  }

  return (
    <div>
      {
        themeList.map(({key, label}) => (
          <button className='button' type="primary" key={key} onClick={() => changeTheme({theme: key})} style={{marginRight: '10px'}}>{label}</button>
        ))
      }
      <div className='box'></div>
    </div>
  )
}

export default CssVarsPonyfill