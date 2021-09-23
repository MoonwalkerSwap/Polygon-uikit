import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
     <path d="M920 2000 l0 -1080 265 0 265 0 2 811 3 811 786 -1 c433 -1 799 1 813 5 l26 6 0 264 0 264 -1080 0 -1080 0 0 -1080z"/>
     <path d="M2543 1992 l-533 -2 0 -265 0 -265 268 -2 267 -3 3 -267 c2 -247 4 -268 20 -268 57 0 157 26 221 57 144 69 257 220 281 378 6 41 9 187 8 355 l-3
285 -532 -3z"/>
    </Svg>
  );
};

export default Icon;
