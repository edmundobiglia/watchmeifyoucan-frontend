import React from "react";

import { LogoSVG } from "./styles";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const Logo = ({ className, width, height }: Props) => {
  return (
    <LogoSVG
      className={className || ""}
      width={width || undefined}
      height={height || undefined}
      viewBox="0 0 36 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="logo-background"
        d="M0 10.7849C0 7.51313 2.65229 4.86084 5.92407 4.86084H26.4304C29.7022 4.86084 32.3545 7.51313 32.3545 10.7849V26.1267C32.3545 29.3985 29.7022 32.0508 26.4304 32.0508H5.92407C2.6523 32.0508 0 29.3985 0 26.1267V10.7849Z"
      />
      <path
        d="M35.9997 7.06331C35.9997 10.9643 32.8373 14.1266 28.9364 14.1266C25.0354 14.1266 21.873 10.9643 21.873 7.06331C21.873 3.16235 25.0354 0 28.9364 0C32.8373 0 35.9997 3.16235 35.9997 7.06331Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M21.4178 18.4491C22.1082 18.8224 22.1082 19.813 21.4178 20.1863L12.8612 24.8116C12.2033 25.1672 11.4043 24.6909 11.4043 23.9431L11.4043 14.6923C11.4043 13.9445 12.2033 13.4682 12.8612 13.8238L21.4178 18.4491Z"
        className="triangle"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="22.0496"
          y1="7.20001"
          x2="36.1364"
          y2="7.20001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5D71FF" />
          <stop offset="1" stopColor="#16EAEF" />
        </linearGradient>
      </defs>
    </LogoSVG>
  );
};

export default Logo;
