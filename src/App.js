import React, {useEffect, useState} from 'react';
import { Layout, Menu, Card } from 'antd';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Link from './pages/link';
import CssVarible from './pages/cssVarible';
import CssVarsPonyfill from './pages/cssVarsPonyfill';
import 'antd/dist/antd.variable.min.css'
import './App.css'

const { Header, Content, Footer } = Layout;

const routes = [
  {key:'link' ,path: '', component: <Link/>},
  {key:'cssVarible' ,path: 'cssVarible', component: <CssVarible/>},
  {key:'cssVarsPonyfill' ,path: 'cssVarsPonyfill', component: <CssVarsPonyfill/>},
]

const App = () => {
  const navigate = useNavigate()
  const [selectedKeys, setSelectedKeys] = useState()
  
  const onClick = ({item, key }) => {
    const {path} = item.props
    setSelectedKeys(key)
    navigate(`${path}`)
  }

  useEffect(() => {
    const {pathname} = window.location
    const route = routes.find(({path}) => (`/${path}` === pathname))
    const selKey = route?route.key:'link'
    setSelectedKeys(selKey)
  }, [])

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          onClick={onClick}
          items={
            routes.map(({key, path}) => {
              return {
                key,
                label: `${key}`,
                path
              }
            })
          }
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">
          <Routes>        
            <Route path='/'>
              {
                routes.map(({key, path, component}) => (
                  <Route 
                    key={key} 
                    index={path==='link'} 
                    path={path} 
                    element={
                      <Card title={key+'方式切换主题'}>
                        {component}
                      </Card>
                    } 
                  />
                ))
              }
            </Route>    
          </Routes>
        </div>
      </Content>
    </Layout>
  );

}

export default App;