import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the VERY MERRY Home component</div>
      <button onClick={() => console.log('Hi there!')}>Press me!</button>
    </div>
  )
};

export default {
  component: Home
}; 