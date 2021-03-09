import React, { useState, useEffect } from "react";
function SingleResume({ resume ,index}) {
  // console.log("resume is ", resume);
  // console.log("asdasd",index);
  return (
    <>
    <div className="singleResume__container">
        <p>name: {resume.name}</p>
        <p>{resume.resume}</p>
    </div>
    </>
    )
}

export default SingleResume
