import React, { useState } from "react";
import { initialData } from "../data";
import SingleResume from "./singleResume";
function ResumeContainer({resume}) {
  // const [resumeData, setresumeData] = useState(initialData);
  console.log("resume asd", resume.record);
  return (
    <div className="Resume__container__global">
      {resume.map((resume,index) => (
        <SingleResume  key={index} resume={resume} />
      ))}
    </div>
  );
}

export default ResumeContainer;
