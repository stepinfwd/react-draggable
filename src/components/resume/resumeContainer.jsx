import React, { useState } from "react";
import initialData  from "../data";
import SingleResume from "./singleResume";
import { Draggable } from "react-beautiful-dnd";

function ResumeContainer() {
  const [resumeData, setresumeData] = useState(initialData);
  // console.log("resume asd", resumeData.record);
  return (
    <div className="Resume__container__global">
      {resumeData.record.map((resume, index) => (
        <Draggable
          // adding a key is important!
          key={resume.name}
          draggableId={resume.name}
          index={index}
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <SingleResume key={index} resume={resume} />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}

export default ResumeContainer;
