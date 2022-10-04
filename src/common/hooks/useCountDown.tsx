import { useEffect, useState } from 'react';

export const useCountDown = (initCount: number, lastSecond: number) => {
  const [count, setCount] = useState(initCount);

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
