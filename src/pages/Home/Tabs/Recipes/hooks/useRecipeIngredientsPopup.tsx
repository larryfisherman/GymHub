import { useState, useRef } from "react";

export const useRecipeIngredientsPopup = () => {
  const popupRef = useRef<any>(null);
  const isDragging = useRef(false);
  const initialPosition = useRef({ x: 0, y: 0 });

  const [filterValue, setFilterValue] = useState("");

  const handleMouseDown = (event: any) => {
    isDragging.current = true;
    initialPosition.current = {
      x: event.clientX - popupRef.current.offsetLeft,
      y: event.clientY - popupRef.current.offsetTop,
    };
  };

  const handleMouseMove = (event: any) => {
    if (!isDragging.current) return;

    const x = event.clientX - initialPosition.current.x;
    const y = event.clientY - initialPosition.current.y;
    popupRef.current.style.left = `${x}px`;
    popupRef.current.style.top = `${y}px`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return {
    popupRef,
    isDragging,
    initialPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    filterValue,
    setFilterValue,
  };
};
