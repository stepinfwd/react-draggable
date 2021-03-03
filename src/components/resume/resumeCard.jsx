import React,{useState} from 'react'
import {intialData} from "../data"
import SingleResume from './singleResume'
function ResumeCard() {
const [resumeData, setresumeData] = useState(intialData)
console.log("resume asd",resumeData.record)
    return (
        <div>
            {resumeData.record.map((resume)=>
             (   <SingleResume resume={resume}/>)
        
            )}
        </div>
    )
}

export default ResumeCard
