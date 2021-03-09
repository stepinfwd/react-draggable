import React, { useState } from "react";
import { initialData } from "../data";
import SingleResume from "./singleResume";
import { Draggable } from "react-beautiful-dnd";

function ResumeContainer({resume}) {
  // console.log("resume in asdasda",resume)
  return (
    <div className="Resume__container__global">
      {resume.map((item,index) => (
        <Draggable draggableId={item.id} index={0}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
        <SingleResume  key={index} resume={item} />
          </div>
        )}
      </Draggable>
      ))}
    </div>
  );
}

export default ResumeContainer;
