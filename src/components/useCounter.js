import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useCounter = ({ startValue, endValue, duration }) => {
  const [count, setCount] = useState(startValue);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        let start = startValue;
        const incrementTime = duration / (endValue - startValue);

        const counter = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= endValue) {
            clearInterval(counter);
          }
        }, incrementTime);
      }
    },
  });

  return { ref, count };
};

export default useCounter;
