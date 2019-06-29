

import React from 'react';

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        About
      </div>
    )
  }
}

export default About
