

import React from 'react';

import { Carousel } from 'antd';

import './home.scss'
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date(),
      list: [
        'http://45.32.40.126/images/1.jpg',
        'http://45.32.40.126/images/2.jpg',
        'http://45.32.40.126/images/3.jpg',
        'http://45.32.40.126/images/4.jpg',
  
      ]
    };
  }
  render() {
    console.log(this.state.list);
    let list = this.state.list.map((item) => {
      return (
        <div key={item} className='img-box'>
          <img src={item} alt='' />
        </div>
      )
    })
    return (
      <div>
        Home   
        <div>
          <Carousel autoplay>
            {list}
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Home
