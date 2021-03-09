import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import ResumeCard from "./components/resume/resumeContainer";
import "./App.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import CategorySidebar from "./components/category/category-sidebar";
import CategoryContainer from "./components/category/category-container";
import ResumeContainer from "./components/resume/resumeContainer";
import { initialData } from "./components/data";
function App() {
  const [resume, setResume] = useState(initialData.record);
  const [category, setCategory] = useState([
    { id: 1, name: "devops" },
    { id: 2, name: "backend" },
    { id: 3, name: "junior frontend" },
    { id: 4, name: "business developmnent" },
    { id: 5, name: "Lead Engineer" },
  ]);
  const [selectedCategory, setselectedCategory] = useState(category[0]);

  const handleSelectedCategory = (selected) => {
    setselectedCategory(selected);
  };
  return (
    <div className="App">
      <Header />
      <DragDropContext>
        <div className="layout__container">
          <ResumeContainer resume={resume} />
          <CategorySidebar category={category} setselectedCategory={setselectedCategory}  handleSelectedCategory={handleSelectedCategory}/>
          <CategoryContainer selectedCategory={selectedCategory}/>
        </div>
      </DragDropContext>

      <Footer />
    </div>
  );
}

export default App;
