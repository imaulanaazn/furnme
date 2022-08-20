import { useState } from 'react';

const shopCardTotalSlide = () => {
  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  window.addEventListener('resize', () => setScreenWidth(window.outerWidth));
  let totalSlide = 0;
  if (screenWidth >= 1024) {
    totalSlide = 4;
  } else if (screenWidth >= 768) {
    totalSlide = 3;
  } else {
    totalSlide = 1;
  }
  return totalSlide;
};
export default shopCardTotalSlide;
