import React from 'react';
import "./about.css";
import { TypeAnimation } from 'react-type-animation';

const FrontPage = () => {
  return (
    <div className="background">   
      <h1>
        <TypeAnimation
          sequence={["Hello World!", 1000]}
          speed={20}
          cursor={false}
        />
      </h1>
    </div>
  );
}

export default FrontPage;
