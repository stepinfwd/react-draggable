import { DragDropContext } from "react-beautiful-dnd";
import React, { useState } from "react";
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
  const [newCategory, setNewCategory] = useState();
  const [selectedCategory, setselectedCategory] = useState(category[0]);

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */

  const id2List = {
    droppable1: resume,
    droppable2: selectedCategory.items ? selectedCategory.items : "",
  };

  // FUNCTION TO GET CORRESPONDING LIST
  const getList = (id) => id2List[id];

  // function to handle addition of category
  const handleCategoryAddition = (target) => {
    // setNewCategory(target);
    const _new = { id: "6", name: target, items: [] };
    setCategory([...category, _new]);
    console.log("newcategory", target);
    console.log("category", category);
  };

  // to get currently selected category
  const handleSelectedCategory = (selected) => {
    setselectedCategory(selected);
  };

  // to reorder items within a droppable
  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    console.log("result", result);
    return result;
  };
  // to move item from one droppable to another
  const moveResume = (
    source,
    destination,
    droppableSource,
    droppableDestination
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
  };

  // drag function for items using react beautiful dnd
  const onDragEnd = (result) => {
    console.log("Result", result);
    const { source, destination } = result;
    if (!result.destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId == "droppable1") {
        const finalData = reorder(
          resume,
          result.source.index,
          result.destination.index
        );
        setResume(finalData);
      } else {
        const finalData = reorder(
          selectedCategory.items,
          result.source.index,
          result.destination.index
        );
        const newCategory = [];
        // code to update newly dragged item to resume-droppable-container
        category.forEach((item) => {
          if (item === selectedCategory) item.items = finalData;
          newCategory.push(item);
        });
        setCategory(newCategory);
      }
    } else {
      const result = moveResume(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      setResume(result.droppable1);
      const newCategory = [];
      // code to update newly dragged item to resume-droppable-container
      category.forEach((item) => {
        if (item === selectedCategory) item.items = result.droppable2;
        newCategory.push(item);
      });
      setCategory(newCategory);
    }
  };

  return (
    <div className="App">
      <Header />
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <div className="layout__container">
          <Droppable
            droppableId="droppable1"
            type="RESUME"
            className="droppable"
          >
            {(provided, snapshot) => (
              <div
                className="droppable__resume__container"
                style={{
                  backgroundColor: snapshot.isDraggingOver
                    ? " #4fb185"
                    : "#4fb185",
                  flex: "0.3 ",
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
            handleAddCategory={handleCategoryAddition}
          />

          <Droppable
            droppableId="droppable2"
            type="RESUME"
            className="droppable"
          >
            {(provided, snapshot) => (
              <div
                style={{
                  backgroundColor: snapshot.isDraggingOver ? "#ffffff" : "",
                  flex: "0.7 ",
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <CategoryContainer
                  selectedCategory={selectedCategory}
                  category={category}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      <Footer />
    </div>
  );
}

export default App;
