import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    let timer = null;
    function updateSize() {
      clearTimeout(timer);
      timer = setTimeout(() => setSize(window.innerWidth), 300);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return [size];
};

export default useWindowSize;
