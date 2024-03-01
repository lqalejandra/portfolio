import React from 'react';
import '../style/index.css';
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
  // height: '5 vh',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  bottom: '10px',
  width:'inherit'


};

const LeCarousel: React.FC = () => (
  <Carousel autoplay>
    <div>
      
      <img src="https://i.pinimg.com/564x/1a/09/89/1a09898da9d5b8ff010ff8aada1f3045.jpg" alt="/"/>
      <h3 style={contentStyle}>i</h3>
    </div>
    <div>
    <img src="https://i.pinimg.com/564x/1a/09/89/1a09898da9d5b8ff010ff8aada1f3045.jpg" alt="/"/>
      <h3 style={contentStyle}>am</h3>
    </div>
    <div>
    <img src="https://i.pinimg.com/564x/1a/09/89/1a09898da9d5b8ff010ff8aada1f3045.jpg" alt="/"/>
      <h3 style={contentStyle}>tired</h3>
    </div>
    <div>
    <img src="https://i.pinimg.com/564x/1a/09/89/1a09898da9d5b8ff010ff8aada1f3045.jpg" alt="/"/>
      <h3 style={contentStyle}>today</h3>
    </div>
  </Carousel>
);

export default LeCarousel;