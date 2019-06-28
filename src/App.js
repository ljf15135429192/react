import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
import Home from './pages/home/home';
import Text from './pages/text/text';
import About from './pages/about/about';

function App() {
  const { SubMenu } = Menu;
  return (
    <div className="App">
      <div className="header">
        <div>
        啦啦啦
        </div>

        <div>
          <Router>
        <Menu mode="horizontal">
          <Menu.Item key="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="text">
            <Link to="/text">text</Link>
          </Menu.Item>
          <Menu.Item key="about">
               <Link to="/about">about</Link>
          </Menu.Item>
        </Menu>
        <Route path="/" component={Home} exact />
        <Route path="/text" component={Text} />
        <Route path="/about" component={About} />
      </Router>
        </div>
  
      </div>
  
    </div>
  );
}

export default App;
