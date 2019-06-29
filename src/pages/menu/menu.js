

import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
class MenuList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
 
  }

  render() {
    return (
      <div>
         
        <Menu 
          mode="horizontal"
        >
          <Menu.Item key="/">
            <Link className="nav-text" to="/">
            
              首页
         </Link>
          </Menu.Item>
          <Menu.Item key="/text">
            <Link className="nav-text" to="/text">
            
              文章
         </Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link className="nav-text" to="/about">
            
              关于
         </Link>
          </Menu.Item>
        </Menu>
       
      </div>
    )
  }
}

export default MenuList
