import React, { useState } from "react";
import { initialData } from "../data";
import SingleResume from "./singleResume";

function ResumeContainer({ resume }) {
  // console.log("resume in asdasda",resume)
  return (
    <div className="Resume__container__global">
      {resume.map((item, index) => (
        <SingleResume key={index} resume={item} />
      ))}
    </div>
  );
}

export default ResumeContainer;
