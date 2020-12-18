import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
<svg viewBox="0 0 106 28" height="30px" style={{fontFamily: "'Merriweather',Georgia,Serif", fontWeight: 600, fontSize: '16px'}}>
  <text x="0" y="15" fill={fill}>Iron pal</text>
</svg>
  );
}