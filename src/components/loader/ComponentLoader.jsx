import React from 'react';
//@ import dependencies
import Lottie from 'lottie-react';
import groovyWalkAnimation from './lottie.json';

function ComponentLoader() {
  return (
    <Lottie
      animationData={groovyWalkAnimation}
      loop={true}
      style={{
        height: 250,
      }}
    />
  );
}

export default ComponentLoader;
