import { useDrag } from "react-dnd";
import React, { useState, useEffect } from "react";
import initialData from "../src/components/data.js";
import ResumeCard from "./components/resume/resumeContainer";
import "./App.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import CategorySidebar from "./components/category/category-sidebar";
import CategoryContainer from "./components/category/category-container";
import ResumeContainer from "./components/resume/resumeContainer";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";

function App() {
  const [selectedCategory, setselectedCategory] = useState();

  function handleSelectedCategory(newValue) {
    setselectedCategory(newValue);
  }
  const [category, setcategory] = useState([
    { id: 1, name: "RESUME", items: initialData.record },
    { id: 2, name: "devops", items: [] },
    { id: 3, name: "backend", items: [] },
    { id: 4, name: "junior frontend", items: [] },
    { id: 5, name: "business developmnent", items: [] },
    { id: 6, name: "Lead Engineer", items: [] },
  ]);

  const onDragEnd = (result, current, setCurrent) => {
    const { source, destination } = result;
    console.log("SID DID", source, destination);
    console.log("result", result);

    if (!result.destination) return;
    if (source.droppableId !== destination.droppableId) {
      const sourcecategory = current[source.droppableId];
      console.log("source is ", sourcecategory);

      const destcurrent = current[destination.droppableId];
      console.log("dest is ", destcurrent);

      const sourceItems = [...sourcecategory.items];
      const destItems = [...destcurrent.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setCurrent({
        ...current,
        [source.droppableId]: {
          ...sourcecategory,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destcurrent,
          items: destItems,
        },
      });
    } else {
      console.log("current isFinite", current);
      const sid = current[source.droppableId];
      console.log("source is ", sid);

      const copiedItems = [...sid.items];
      // const [removed] = copiedItems.splice(source.index, 1);
      // copiedItems.splice(destination.index, 0, removed);
      // setCurrent({
      //   ...current,
      //   [source.droppableId]: {
      //     ...sid,
      //     items: copiedItems,
      //   },
      // });
      category[selectedCategory.id].items = copiedItems;
    }
  };
  const [current, setCurrent] = useState(category);

  return (
    <div className="App">
      <Header />
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, current, setCurrent)}
      >
        <div className="layout__container">
          <Droppable droppableId={selectedCategory.id} type="PERSON">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver
                    ? "rgba(79, 233, 174, 0.425)"
                    : " #f3f7f6",
                }}
                {...provided.droppableProps}
              >
                <ResumeContainer category={category[selectedCategory.id]} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <CategorySidebar
            selectedCategory={selectedCategory}
            category={category}
            handleSelectedCategory={handleSelectedCategory}
          />
          <CategoryContainer
            selectedCategory={selectedCategory}
            handleSelectedCategory={handleSelectedCategory}
          />
        </div>
        <Footer />
      </DragDropContext>
    </div>
  );
}

export default App;
