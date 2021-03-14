import React, { FC } from 'react';
import Slide from '~/shared/components/Slider/components/Slide';
import './Slider.scss';

interface SliderProps {
  className?: string;
}

interface Slider extends FC<SliderProps> {
  Title: FC;
}

const Slider: Slider = ({ children }) => {
  return <div className="Slider">{children}</div>;
};

Slider.Title = Slide;

export default Slider;
