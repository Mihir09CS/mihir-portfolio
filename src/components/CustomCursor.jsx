import { useEffect, useRef } from 'react';
import { useMediaQuery, usePrefersReducedMotion } from '../hooks';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const hoveringRef = useRef(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasFinePointer = useMediaQuery('(pointer: fine)');
  const isLargeScreen = useMediaQuery('(min-width: 1025px)');
  const shouldEnableCursor = hasFinePointer && isLargeScreen && !prefersReducedMotion;

  useEffect(() => {
    document.body.classList.toggle('custom-cursor-enabled', shouldEnableCursor);

    if (!shouldEnableCursor) {
      return () => document.body.classList.remove('custom-cursor-enabled');
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleOver = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"], input, textarea, select, label');
      if (isInteractive !== null !== hoveringRef.current) {
        hoveringRef.current = isInteractive !== null;
        if (hoveringRef.current) {
          ring.classList.add('hovering');
        } else {
          ring.classList.remove('hovering');
        }
      }
    };

    const animate = () => {
      // Dot follows cursor exactly
      dot.style.left = `${posRef.current.x}px`;
      dot.style.top = `${posRef.current.y}px`;

      // Ring has spring lerp
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.14;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.14;
      ring.style.left = `${ringPosRef.current.x}px`;
      ring.style.top = `${ringPosRef.current.y}px`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [shouldEnableCursor]);

  if (!shouldEnableCursor) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
