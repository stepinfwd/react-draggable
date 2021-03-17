import React from "react";
import SingleResume from "./singleResume";
import { useDrag } from 'react-dnd'
function ResumeContainer({ resume, isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: " CARD",
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  return (
    <div className="Resume__container__global">
      {resume.map((item, index) => (
        <>
          {item ? (
            <div ref={dragRef} style={{ opacity }} className="inner">
              <SingleResume key={item.id} index={index} resume={item} />
            </div>
          ) : (
            <div className="singleResume__container">
              <p>NO MORE...</p>
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export default ResumeContainer;
