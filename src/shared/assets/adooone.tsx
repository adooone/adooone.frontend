import React from 'react';

interface Props {
  width?: string;
  height?: string;
}

const AdoooneLogo: React.FC<Props> = ({ width = 30, height = 30 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 354 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2" filter="url(#filter0_d)">
        <circle
          cx="177.46"
          cy="112.563"
          r="86.5159"
          transform="rotate(90 177.46 112.563)"
          fill="url(#paint0_linear)"
        />
      </g>
      <g opacity="0.5" filter="url(#filter1_d)">
        <circle
          cx="177.461"
          cy="175.706"
          r="86.5159"
          transform="rotate(90 177.461 175.706)"
          fill="url(#paint1_linear)"
        />
      </g>
      <g filter="url(#filter2_d)">
        <circle
          cx="177.285"
          cy="241.629"
          r="86.5159"
          transform="rotate(90 177.285 241.629)"
          fill="url(#paint2_linear)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="85.9446"
          y="21.0469"
          width="183.032"
          height="183.032"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="85.9447"
          y="84.1904"
          width="183.032"
          height="183.032"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d"
          x="85.7693"
          y="150.113"
          width="183.032"
          height="183.032"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="90.9446"
          y1="32.8771"
          x2="236.656"
          y2="229.815"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2E2E2" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="90.9447"
          y1="96.0206"
          x2="236.656"
          y2="292.958"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2E2E2" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="90.7693"
          y1="161.943"
          x2="236.48"
          y2="358.881"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2E2E2" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AdoooneLogo;
