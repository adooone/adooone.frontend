import { motion } from 'framer-motion';
import React, { FC } from 'react';
import Controls from './components/Controls';
import Slide from './components/Slide';
import useSlider from './hooks/useSlider';
import styles from './scss/slider.module.scss';

interface SliderProps {
  slides?: React.ReactNode[];
  controlsAppearDelay?: number;
  className?: string;
}

interface Slider extends FC<SliderProps> {
  Slide: FC;
}

const Slider: Slider = ({ slides, controlsAppearDelay }) => {
  const [index, handleMove] = useSlider();

  if (!slides) return null;
  return (
    <div className={styles.slider}>
      <div className={styles.slidesContainer}>
        <Slide>{slides[index]}</Slide>
      </div>
      <Controls
        disablePrevious={index === 0}
        disableNext={index === slides.length - 1}
        appearDelay={controlsAppearDelay}
        onMove={handleMove}
      />
    </div>
  );
};

Slider.Slide = Slide;

export default Slider;
