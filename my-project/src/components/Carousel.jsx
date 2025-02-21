import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const DEFAULT_ITEMS = [
    { id: 1, title: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png', description: 'A NoSQL database for scalable and flexible data storage.' },
    { id: 2, title: 'Express.js', icon: 'https://img.icons8.com/ios/50/000000/express-js.png', description: 'A minimal and fast Node.js framework for building web applications.' },
    { id: 3, title: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png', description: 'A JavaScript library for building dynamic and interactive UIs.' },
    { id: 4, title: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png', description: 'A runtime for executing JavaScript on the server side.' },
    { id: 5, title: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png', description: 'A backend-as-a-service platform for app development.' },
    { id: 6, title: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png', description: 'A versatile, high-level programming language for multiple domains.' },
    { id: 7, title: 'C', icon: 'https://img.icons8.com/color/48/000000/c-programming.png', description: 'A low-level programming language for system development and performance.' },
    { id: 8, title: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png', description: 'An extension of C with object-oriented programming support.' },
    { id: 9, title: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png', description: 'A core web technology for dynamic and interactive content.' },
    { id: 10, title: 'TypeScript', icon: 'https://img.icons8.com/color/48/000000/typescript.png', description: 'A superset of JavaScript adding static typing and scalability.' },
    { id: 11, title: 'Pandas', icon: 'https://img.icons8.com/color/48/000000/pandas.png', description: 'A Python library for data manipulation and analysis.' },
    { id: 12, title: 'NumPy', icon: 'https://img.icons8.com/color/48/000000/numpy.png', description: 'A Python library for numerical computing and matrix operations.' },
    { id: 13, title: 'Next.js', icon: 'https://img.icons8.com/color/48/000000/nextjs.png', description: 'A React framework for server-side rendering and static site generation.' },
    { id: 14, title: 'Solidity', icon: 'https://img.icons8.com/color/48/000000/solidity.png', description: 'A programming language for writing Ethereum smart contracts.' },
    { id: 15, title: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png', description: 'A utility-first CSS framework for rapid UI design.' },
    { id: 16, title: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png', description: 'A CSS framework for responsive, mobile-first web development.' },
    { id: 17, title: 'Material UI', icon: 'https://img.icons8.com/color/48/000000/material-ui.png', description: 'A React component library following Google’s Material Design.' },
];


const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1; // Animate to clone.
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      },
    };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden md:p-4 p-2 ${round
        ? "rounded-full border border-white" 
        : "rounded-[24px] border border-[#222]"
        }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${round
                ? "items-center justify-center text-center bg-[#060606] border-0"
                : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
                } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className={`${round ? "p-0 m-0" : "mb-6 p-5"}`}>
                <img src={item.icon} alt="logo" className="flex w-full h-full object-contain items-center justify-center rounded-full bg-[#060606]" />
              </div>
              <div className="p-10">
                <div className="mb-1 font-black text-lg text-white">
                  {item.title}
                </div>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div
        className={`flex w-full justify-center ${round ? "absolute z-20 bottom-16 left-1/2 -translate-x-1/2" : ""
          }`}
      >
        <div className="flex w-[300px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                ? round
                  ? "bg-white"
                  : "bg-[#333333]"
                : round
                  ? "bg-[#555]"
                  : "bg-[rgba(51,51,51,0.4)]"
                }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
