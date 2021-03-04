import React, { useState } from "react";
import { intialData } from "../data";
import SingleResume from "./singleResume";
function ResumeContainer() {
  const [resumeData, setresumeData] = useState(intialData);
  console.log("resume asd", resumeData.record);
  return (
    <div className="Resume__container__global">
      {resumeData.record.map((resume,index) => (
        <SingleResume  key={index} resume={resume} />
      ))}
    </div>
  );
}

export default ResumeContainer;
