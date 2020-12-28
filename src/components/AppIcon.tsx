import React from "react";
import { Icon } from '@types';

const AppIcon: Icon = ({ fill, ...props }) => {
  return (
    <svg
      width="20"
      height="24"
      fill={fill}
      data-license="License: https://fontawesome.com/license CHANGES: Sizing and color"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      >
        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
        <rect id="svg_2" height="156" width="46" y="122" x="137" stroke-width="1.5" stroke={fill} />
        <path transform="rotate(180, 160, 310)" id="svg_4" d="m104.00273,342.00026l55.99727,-64l55.99727,64l-111.99454,0z" stroke-width="1.5" stroke={fill} />
      </svg>
)};

export default AppIcon;
