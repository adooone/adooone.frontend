import { useState } from 'react';
import { DirectionType } from '~/shared/components/Slider/components/Controls';

type UseSlider = [number, (direction: DirectionType) => void];

export default function useSlider(): UseSlider {
  const [index, setIndex] = useState(0);

  const handleMove = (direction: DirectionType) => {
    setIndex((prev) => {
      const newIndex = direction === 'forward' ? prev + 1 : prev - 1;
      // if (newIndex < 0 || >)
      return newIndex;
    });
  };

  return [index, handleMove];
}
