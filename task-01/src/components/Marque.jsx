import React from 'react';
import javascriptLogo from '../assets/images/javascript.png';
import adobeIllustratorLogo from '../assets/images/adobe.png';
import figmaLogo from '../assets/images/figma.png';
import htmlLogo from '../assets/images/html.png';
import cssLogo from '../assets/images/css.png';
import reactLogo from '../assets/images/react.png';
import vueLogo from '../assets/images/vue.png';
import javaLogo from '../assets/images/java.png';
import mayaLogo from '../assets/images/maya.jpeg';
import mongoLogo from '../assets/images/mongodb.jpeg';
import sqlLogo from '../assets/images/sql.png';
import photoshopLogo from '../assets/images/photoshop.png';
import sketchupLogo from '../assets/images/sketchup.png';

const Marquee = () => {
  const logos = [
    javascriptLogo,
    adobeIllustratorLogo,
    figmaLogo,
    htmlLogo,
    cssLogo,
    reactLogo,
    vueLogo,
    javaLogo,
    mayaLogo,
    mongoLogo,
    sqlLogo,
    photoshopLogo,
    sketchupLogo,
  ];

  return (
    <div className="overflow-hidden bg-white py-4">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`logo ${index}`} className="h-10 mx-6" />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
