import { Draggable } from "react-beautiful-dnd";
function SingleResume({ resume ,index}) {
  console.log("resume is ", resume);
  console.log("asdasd",index);
  return (
    <>
    <div className="singleResume">
    
            <p>name: {resume.name}</p>
            <p>{resume.resume}</p>
     
      </div>
    </>
  );
}

export default SingleResume;
