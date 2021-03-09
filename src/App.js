import { DragDropContext } from "react-beautiful-dnd";
import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import CategorySidebar from "./components/category/category-sidebar";
import CategoryContainer from "./components/category/category-container";
import ResumeContainer from "./components/resume/resumeContainer";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { initialData } from "./components/data";
function App() {
  const [resume, setResume] = useState(initialData.record);
  const [category, setCategory] = useState([
    { id: 1, name: "devops", items: [] },
    { id: 2, name: "backend", items: [] },
    { id: 3, name: "junior frontend", items: [] },
    { id: 4, name: "business developmnent", items: [] },
    { id: 5, name: "Lead Engineer", items: [] },
  ]);
  const [selectedCategory, setselectedCategory] = useState(category[0]);

  const handleSelectedCategory = (selected) => {
    setselectedCategory(selected);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    console.log("result", result);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      resume,
      result.source.index,
      result.destination.index
    );

    setResume(quotes);
  };

  return (
    <div className="App">
      <Header />
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <div className="layout__container">
          <Droppable droppableId="droppable-1" type="PERSON">
            {(provided, snapshot) => (
              <div
                style={{
                  backgroundColor: snapshot.isDraggingOver
                    ? " #fff9f1"
                    : "rgba(79, 233, 174, 0.425)",
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <ResumeContainer resume={resume} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <CategorySidebar
            category={category}
            setselectedCategory={setselectedCategory}
            handleSelectedCategory={handleSelectedCategory}
          />
          <CategoryContainer selectedCategory={selectedCategory} />
        </div>
      </DragDropContext>

      <Footer />
    </div>
  );
}

export default App;
