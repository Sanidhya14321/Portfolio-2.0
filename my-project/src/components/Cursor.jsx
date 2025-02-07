import React, { useState, useEffect, useRef } from "react";

function Cursor() {
  const cursorDotOutline = useRef(null);
  const cursorDot = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  /**
   * Check for Mobile Devices
   */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  /**
   * Mouse Events
   */
  useEffect(() => {
    if (isMobile) return; // Disable cursor effects on mobile

    const onMouseMove = (event) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
      positionDot(event);
    };

    const onMouseEnter = () => toggleCursorVisibility(true);
    const onMouseLeave = () => toggleCursorVisibility(false);
    const onMouseDown = () => toggleCursorSize(true);
    const onMouseUp = () => toggleCursorSize(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    requestRef.current = requestAnimationFrame(animateDotOutline);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;

  let { x, y } = mousePosition;
  let endX = x;
  let endY = y;

  /**
   * Position Cursor Dot
   */
  function positionDot(e) {
    endX = e.pageX;
    endY = e.pageY;
    cursorDot.current.style.top = `${endY}px`;
    cursorDot.current.style.left = `${endX}px`;
  }

  /**
   * Toggle Cursor Visibility
   */
  function toggleCursorVisibility(visible) {
    const opacity = visible ? 1 : 0;
    cursorDot.current.style.opacity = opacity;
    cursorDotOutline.current.style.opacity = opacity;
  }

  /**
   * Toggle Cursor Size
   */
  function toggleCursorSize(enlarged) {
    cursorDot.current.style.transform = enlarged
      ? "translate(-50%, -50%) scale(0.7)"
      : "translate(-50%, -50%) scale(1)";
    cursorDotOutline.current.style.transform = enlarged
      ? "translate(-50%, -50%) scale(5)"
      : "translate(-50%, -50%) scale(1)";
  }

  /**
   * Animate Cursor Outline
   */
  const animateDotOutline = () => {
    x += (endX - x) / 8;
    y += (endY - y) / 8;
    cursorDotOutline.current.style.top = `${y}px`;
    cursorDotOutline.current.style.left = `${x}px`;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDot} id="cursor-dot" />
    </>
  );
}

export default Cursor;
