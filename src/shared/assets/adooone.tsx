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
      viewBox="0 0 238 438"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ooo</title>
      <defs>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="57.3053773%"
          gradientTransform="translate(0.500000,0.500000),scale(0.562500,1.000000),rotate(90.000000),scale(1.000000,1.289292),translate(-0.500000,-0.500000)"
          id="radialGradient-1"
        >
          <stop stopColor="#282828" stopOpacity="0" offset="0%"></stop>
          <stop
            stopColor="#1F1F20"
            stopOpacity="0.319431949"
            offset="4.91712416%"
          ></stop>
          <stop
            stopColor="#0F0F10"
            stopOpacity="0.896442067"
            offset="62.1595228%"
          ></stop>
          <stop stopColor="#0D0D0E" offset="100%"></stop>
        </radialGradient>
        <linearGradient
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
          id="linearGradient-2"
        >
          <stop stopColor="#13655C" offset="0%"></stop>
          <stop stopColor="#379752" offset="100%"></stop>
        </linearGradient>
        <circle id="path-3" cx="105.6" cy="105.2" r="105.2"></circle>
        <filter
          x="-4.3%"
          y="-2.9%"
          width="108.6%"
          height="108.6%"
          filterUnits="objectBoundingBox"
          id="filter-4"
        >
          <feOffset
            dx="0"
            dy="3"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.18627076 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-5" cx="105.6" cy="210.4" r="105.2"></circle>
        <filter
          x="-4.3%"
          y="-2.9%"
          width="108.6%"
          height="108.6%"
          filterUnits="objectBoundingBox"
          id="filter-6"
        >
          <feOffset
            dx="0"
            dy="3"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.18627076 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <linearGradient
          x1="85.05123%"
          y1="85.1984561%"
          x2="13.0921665%"
          y2="18.3523168%"
          id="linearGradient-7"
        >
          <stop stopColor="#13655C" offset="0%"></stop>
          <stop stopColor="#379752" offset="100%"></stop>
        </linearGradient>
        <circle id="path-8" cx="105.4" cy="315.593834" r="105.2"></circle>
        <filter
          x="-11.4%"
          y="-5.7%"
          width="122.8%"
          height="122.8%"
          filterUnits="objectBoundingBox"
          id="filter-9"
        >
          <feOffset
            dx="0"
            dy="12"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="6"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.262347028 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Home-Page-FullHD-Copy"
          transform="translate(-830.000000, -300.000000)"
        >
          <g
            id="logo-group"
            transform="translate(847.000000, 305.000000)"
            fillRule="nonzero"
          >
            <g id="ooo" transform="translate(7.600000, 0.000000)">
              <g
                id="Oval-Copy-5"
                opacity="0.0980515253"
                transform="translate(105.600000, 105.200000) rotate(90.000000) translate(-105.600000, -105.200000) "
              >
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-4)"
                  xlinkHref="#path-3"
                ></use>
                <use fill="url(#linearGradient-2)" xlinkHref="#path-3"></use>
              </g>
              <g
                id="Oval-Copy-4"
                opacity="0.397530692"
                transform="translate(105.600000, 210.400000) rotate(90.000000) translate(-105.600000, -210.400000) "
              >
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-6)"
                  xlinkHref="#path-5"
                ></use>
                <use fill="url(#linearGradient-2)" xlinkHref="#path-5"></use>
              </g>
              <g
                id="Oval"
                transform="translate(105.400000, 315.593834) rotate(90.000000) translate(-105.400000, -315.593834) "
              >
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-9)"
                  xlinkHref="#path-8"
                ></use>
                <use fill="url(#linearGradient-7)" xlinkHref="#path-8"></use>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default AdoooneLogo;
