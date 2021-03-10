import React, { useState } from "react";
import { initialData } from "../data";
import SingleResume from "./singleResume";
import { Draggable } from "react-beautiful-dnd";

function ResumeContainer({ resume, category, selectedCategory }) {
  // const [resumeData, setresumeData] = useState(initialData);
  return (
    <div className="Resume__container__global">
      {resume.map((item, index) => (
        <>
          {item ? (
            <Draggable
              draggableId={`id-${index}`}
              index={index}
              key={index}
              type="TASK"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <SingleResume key={item.id} index={index} resume={item} />
                </div>
              )}
            </Draggable>
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
