import React from "react";
function SingleCat({ resume }) {
  return (
    <>
      <div className="singleResume__container">
        <p>name: {resume.name}</p>
        <p>{resume.resume}</p>
      </div>{" "}
    </>
  );
}

export default SingleCat;
