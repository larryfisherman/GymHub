import React, { useState } from "react";
import styled from "styled-components";
import { Draggable } from "@hello-pangea/dnd";

export const RecipeIngredientsPopup = (index: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (initial: any) => {
    // Save the initial position of the popup when dragging starts
    setIsDragging(true);

    setPosition(initial.client);
  };

  const handleDrag = (event: any) => {
    // Update the position of the popup while dragging
    if (isDragging) {
      setPosition({
        x: position.x + event.deltaX,
        y: position.y + event.deltaY,
      });
    }
  };

  const handleDragMove = (event: any) => {
    // Update the position of the popup while dragging
    if (isDragging) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  const handleDragEnd = () => {
    // The drag has ended, you can update any state or perform any action if needed
    setIsDragging(false);
  };

  return (
    <Draggable draggableId={`ingredient-popup-${index}`} index={index}>
      {(provided) => (
        <div
          className="recipe-ingredients-popup"
          style={{
            left: position.x,
            top: position.y,
            position: "absolute",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
        >
          <h3>Recipe Ingredients</h3>
          {/* Your content for the popup */}
        </div>
      )}
    </Draggable>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 90%;
  background-color: #f8f8f8;
  position: absolute;
  z-index: 999;
`;
const Content = styled.div``;
