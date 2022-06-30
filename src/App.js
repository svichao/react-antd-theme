import React from 'react';
import { Layout, Menu } from 'antd';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Link from './pages/link';
import CssInJs from './pages/cssInJs';
import ModifyVars from './pages/modifyVars';
import CssVarible from './pages/cssVarible';
import CssVarsPonyfill from './pages/cssVarsPonyfill';
import 'antd/dist/antd.variable.min.css'

const { Header, Content, Footer } = Layout;

const routes = [
  {key:'1' ,path: 'link', component: <Link/>},
  {key:'2' ,path: 'cssInJs', component: <CssInJs/>},
  {key:'3' ,path: 'modifyVars', component: <ModifyVars/>},
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
          <Routes>
            {
              routes.map(({key, path, component}) => (
                <Route key={key} path={path} element={component} />
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