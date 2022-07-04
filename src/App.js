import React from 'react';
import { Layout, Menu, Card } from 'antd';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Link from './pages/link';
import CssVarible from './pages/cssVarible';
import CssVarsPonyfill from './pages/cssVarsPonyfill';
import 'antd/dist/antd.variable.min.css'
import './App.css'

const { Header, Content, Footer } = Layout;

const routes = [
  {key:'1' ,path: 'link', component: <Link/>},
  {key:'4' ,path: 'cssVarible', component: <CssVarible/>},
  {key:'5' ,path: 'cssVarsPonyfill', component: <CssVarsPonyfill/>},
]

const App = () => {
  const navigate = useNavigate()
  
  const onClick = ({item }) => {
    const {path} = item.props
    navigate(`${path}`)
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          onClick={onClick}
          items={
            routes.map(({key, path}) => {
              return {
                key,
                label: `${path}`,
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
          <Routes>            {
              routes.map(({key, path, component}) => (
                <Route key={key}  path={path} element={
                    <Card title={path+'方式切换主题'}>
                      {component}
                      </Card>
                  } />
                  ))
                }
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        All Right
      </Footer>
    </Layout>
  );

}

export default App;