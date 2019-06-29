import React from 'react';
import './App.scss';
import MenuList from './pages/menu/menu'
import Home from './pages/home/home'

import About from './pages/about/about'

import Text from './pages/text/text'

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <MenuList></MenuList>
        </div>

        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/text" component={Text} />

        </div>
      </Router>
    </div>
  );
}

export default App;
