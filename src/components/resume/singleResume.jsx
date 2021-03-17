import React, { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDrag } from 'react-dnd'
function SingleResume({ resume, index }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "KNIGHT",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <div
        className="singleResume__container"
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: "bold",
          cursor: "move",
          backgroundColor:"#431234"
        }}
      >
        <p>name: {resume.name}</p>
        <p>{resume.resume}</p>
      </div>{" "}
    </>
  );
}

export default SingleResume;
