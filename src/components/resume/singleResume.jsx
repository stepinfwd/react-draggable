
function SingleResume({resume}) {
    console.log("resume is ",resume)
    console.log("asdasd");
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
