import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
// import LeftMenu from "./Comp/LeftMenu";
import { Layout } from 'antd';
import MyEditor from "./Comp/MyEditor";
// import TopTabs from "./Comp/TopTabs";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
      <React.Fragment>
          <Header>Header</Header>
          <Content>
              <MyEditor/>
          </Content>
          <Footer>Footer</Footer>
      </React.Fragment>
  )
}

export default App;
