
import React from 'react';
import Button from 'antd/es/button';
class Home extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        name:1
      };
    }
  
    componentDidMount() {
      // 订阅更改

    }
  
    componentWillUnmount() {
      // 清除订阅

    }
  
    handleChange() {
        console.log(123)
    }
  
    render() {
      return (
        <div onClick={this.handleChange}>
         home
         <Button type="primary">Button</Button>
        </div>
      );
    }
  }
export default Home;