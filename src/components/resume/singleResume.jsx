<<<<<<< Updated upstream

function SingleResume({resume}) {
    console.log("resume is ",resume)
    console.log("asdasd");
    return (
=======
import React, { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
function SingleResume({ resume ,index}) {
  console.log("resume is ", resume);
  console.log("asdasd",index);
  return (
>>>>>>> Stashed changes
    <>
    <div className="singleResume__container">
        <p>name: {resume.name}</p>
        <p>{resume.resume}</p>
    </div>
    </>
    )
}

export default SingleResume
