import { motion, Transition, Variants } from 'framer-motion';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userPreferences } from '~/core/store/atoms/user';

interface Props {
  width?: string;
  height?: string;
}

const circleVariants: Variants = {
  hide: { opacity: 0, y: -10 },
  appear: { opacity: 1, y: 0 },
};

const circleProps = (index: number) => ({
  cx: '177.46',
  cy: `${112.563 + index * 63}`,
  r: '86.5159',
});

const getDelayedTransition = (index: number): Transition => {
  return { duration: 0.4, delay: index * 0.3 + 0.5, ease: 'easeOut' };
};

const AdoooneLogo: React.FC<Props> = ({ width = 30, height = 30 }) => {
  const isDark = useRecoilValue(userPreferences.theme) === 'dark';
  const gradient = isDark ? 'darkGreenGradient' : 'lightGreenGradient';

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 354 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        initial="hide"
        animate="appear"
        variants={circleVariants}
        transition={getDelayedTransition(2)}
        // filter="url(#filter0_d)"
      >
        <circle
          {...circleProps(0)}
          opacity={isDark ? '0.2' : '0.1'}
          fill={`url(#${gradient})`}
        />
      </motion.g>
      <motion.g
        initial="hide"
        animate="appear"
        variants={circleVariants}
        transition={getDelayedTransition(1)}
        // filter="url(#filter1_d)"
      >
        <circle
          {...circleProps(1)}
          opacity={isDark ? '0.5' : '0.3'}
          fill={`url(#${gradient})`}
        />
      </motion.g>
      <motion.g
        initial="hide"
        animate="appear"
        variants={circleVariants}
        transition={getDelayedTransition(0)}
        // filter="url(#filter2_d)"
      >
        <circle {...circleProps(2)} fill={`url(#${gradient})`} />
      </motion.g>
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
          id="lightGradient"
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
          id="darkGradient"
          x1="90.9446"
          y1="32.8771"
          x2="236.656"
          y2="229.815"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#202020" />
          <stop offset="1" stopColor="#202020" />
        </linearGradient>
        <linearGradient
          id="darkGreenGradient"
          x1="85.2441"
          y1="163.848"
          x2="239.986"
          y2="372.991"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#379752" />
          <stop offset="1" stopColor="#07545F" />
        </linearGradient>
        <linearGradient
          id="lightGreenGradient"
          x1="85.2441"
          y1="163.848"
          x2="239.986"
          y2="372.991"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#37b762" />
          <stop offset="1" stopColor="#12746F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AdoooneLogo;
