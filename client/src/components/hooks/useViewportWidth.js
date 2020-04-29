import { useEffect, useState } from 'react';

const useViewportWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timer = null;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setWidth(window.innerWidth), 300);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};

export default useViewportWidth;
