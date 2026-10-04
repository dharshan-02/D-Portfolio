import { useRef, useState } from 'react';

export function useDraggableScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
    // Optional: Prevent text selection while dragging
    document.body.style.userSelect = 'none';
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    document.body.style.userSelect = '';
  };

  const onMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = '';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll-fast multiplier
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    style: { cursor: isDragging ? 'grabbing' : 'grab' },
  };
}
