import { useState } from 'react';
import { DirectionType } from '~/shared/components/Slider/components/Controls';

interface UseSliderProps {
  onItemChanged?: (index: number) => void;
}
type UseSlider = [number, (direction: DirectionType) => void];

export default function useSlider({ onItemChanged }: UseSliderProps): UseSlider {
  const [index, setIndex] = useState(0);

  const handleMove = (direction: DirectionType) => {
    setIndex((prev) => {
      const newIndex = direction === 'forward' ? prev + 1 : prev - 1;
      onItemChanged && onItemChanged(newIndex);
      return newIndex;
    });
  };

  return [index, handleMove];
}
