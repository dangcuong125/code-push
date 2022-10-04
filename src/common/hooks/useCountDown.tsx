import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export const useCountDown = (initCount: number, lastSecond: number) => {
  const [count, setCount] = useState(initCount);

  useFocusEffect(
    React.useCallback(() => {
      setCount(initCount);
      return () => {};
    }, []),
  );

  useEffect(() => {
    const timerID = setInterval(() => {
      if (count < lastSecond) {
        clearInterval(timerID);
      } else setCount(count - 1);
    }, 1000);

    return () => clearInterval(timerID);
  });
  return count;
};
