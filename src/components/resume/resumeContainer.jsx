import React, { useState, useEffect } from "react";
import { intialData } from "../data";
import SingleResume from "./singleResume";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

function ResumeContainer() {
  const [resumeData, setresumeData] = useState(intialData);
  console.log("resume asd", resumeData.record);
  return (
    <div className="Resume__container__global">
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, snapshot) => (
          <div
            // ref={provided.innerRef}
            innerRef={provided.innerRef}
            style={
              {
                // backgroundColor: snapshot.isDraggingOver ? "red" : "grey",
              }
            }
            {...provided.droppableProps}
          >
            {provided.placeholder}
            {resumeData.record.map((resume, index) => (
              <Draggable draggableId={index} index={index}>
                {(provided, snapshot) => (
                  <div
                    className="singleResume__container"
                    innerRef={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <SingleResume key={index} resume={resume} />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default ResumeContainer;
