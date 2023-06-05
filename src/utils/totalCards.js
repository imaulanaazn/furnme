import { useState } from 'react';

function totalCards(TotalSlides) {
  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  window.addEventListener('resize', () => setScreenWidth(window.outerWidth));
  let totalSlide = 1;
  if (screenWidth >= 1280) {
    totalSlide = TotalSlides.xl;
  } else if (screenWidth >= 1024) {
    totalSlide = TotalSlides.lg;
  } else if (screenWidth >= 768) {
    totalSlide = TotalSlides.md;
  } else if (screenWidth >= 640) {
    totalSlide = TotalSlides.sm;
  } else {
    totalSlide = TotalSlides.xs;
  }
  return totalSlide;
}
export default totalCards;
