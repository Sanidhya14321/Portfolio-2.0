import { useState, useEffect } from "react";
import Carousel from "./Carousel"; // Import your Carousel component

const ResponsiveCarousel = () => {
  const [baseWidth, setBaseWidth] = useState(400);

  useEffect(() => {
    const updateBaseWidth = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setBaseWidth(250); 
      } else if (width < 768) {
        setBaseWidth(300); 
      } else {
        setBaseWidth(400); 
      }
    };

    updateBaseWidth(); // Set initial width
    window.addEventListener("resize", updateBaseWidth);
    
    return () => window.removeEventListener("resize", updateBaseWidth);
  }, []);

  return (
    <Carousel
      baseWidth={baseWidth}
      autoplay={true}
      autoplayDelay={1700}
      pauseOnHover={true}
      loop={true}
      round={true}
    />
  );
};

export default ResponsiveCarousel;
