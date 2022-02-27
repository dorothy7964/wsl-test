import React, { useEffect, useState } from 'react';

const useWhell = () => {
  const [wheelType, setWheelType] = useState<string>('minus');

  const updateWhell = (delta: number) => {
    if (delta > 0) {
      return setWheelType('plus');
    }
    return setWheelType('minus');
  };

  useEffect(() => {
    window.addEventListener('wheel', (e: any) => {
      const delta = Math.sign(e.deltaY);
      updateWhell(delta);
    });
    return () => window.removeEventListener('wheel', (e: any) => updateWhell(e.deltaY));
  }, []);

  return {
    wheelType,
  };
};

export default useWhell;
