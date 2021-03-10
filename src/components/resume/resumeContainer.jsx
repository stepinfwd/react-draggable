import React, { useState } from "react";
import { initialData } from "../data";
import SingleResume from "./singleResume";
import { Draggable } from "react-beautiful-dnd";

function ResumeContainer({ resume ,category,selectedCategory}) {
  // const [resumeData, setresumeData] = useState(initialData);
  return (
    <div className="Resume__container__global">
      {resume.map((resume, index) => (
        <Draggable draggableId={`id-${index}`} index={index} type="TASK">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <SingleResume key={resume.id} index={index} resume={resume} />
              
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}

export default ResumeContainer;
