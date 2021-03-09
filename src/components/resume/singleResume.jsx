import React, { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
function SingleResume({ resume, index }) {
  return (
    <>
      <div className="singleResume__container">
        <p>name: {resume.name}</p>
        <p>{resume.resume}</p>
      </div>{" "}
    </>
  );
}

export default SingleResume;
