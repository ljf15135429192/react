
import React from 'react';
class About extends React.Component {
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
            关于
        </div>
      );
    }
  }
  export default About;