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
  const [currentRemoved, setcurrentRemoved] = useState("");
  const [category, setCategory] = useState([
    {
      id: 1,
      name: "devops",
      items: [
        {
          id: "id-1",
          name: "Patricia",
          resume: "https://resume-resource.com/before-after/ba-ex10.pdf",
        },
        {
          id: "id-2",

          name: "Lee",
          resume: "https://resume-resource.com/pdf/extec18.pdf",
        },
      ],
    },
    { id: 2, name: "backend", items: [] },
    { id: 3, name: "junior frontend", items: [] },
    { id: 4, name: "business developmnent", items: [] },
    { id: 5, name: "Lead Engineer", items: [] },
  ]);
  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  const [selectedCategory, setselectedCategory] = useState(category[0]);

  const id2List = {
    droppable1: resume,
    droppable2: selectedCategory.items ? selectedCategory.items : "",
  };

  const getList = (id) => id2List[id];
  const [taggedResume, setTaggedResume] = useState(category[0].items);

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
    const { source, destination } = result;
    console.log("result is", result);
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const finalData = reorder(
        resume,
        result.source.index,
        result.destination.index
      );

      setResume(finalData);
    } else {
      const result = moveResume(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      console.log("Called", result.droppable1);
      setResume(result.droppable1);
      // setCategory( ...result.droppable2 );

      // setselectedCategory(result.droppable2);
      // const copy = [...result.droppable2];
      // // setselectedCategory(selectedCategory.items[copy])
      {
        category.find((item) => item === selectedCategory).items.push(currentRemoved);
      }
      console.log("move result", result);
      console.log("move resume", resume);
      console.log("move category", category);
    }
    if (destination.droppableId === "droppable2") {
      // setTaggedResume(...taggedResume, selectedCategory);
      // console.log("tagged", taggedResume);
    }
  };

  // Moves an item from one list to another list.
  const moveResume = (
    source,
    destination,
    droppableSource,
    droppableDestination
  ) => {
    console.log("source", source);
    console.log("destination", destination);
    console.log("sourdroppableSourcece", droppableSource);
    console.log("droppableDestination", droppableDestination);
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    console.log("remov", removed);
    setcurrentRemoved(removed)
    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };
  useEffect(() => {
  }, [onDragEnd, moveResume,resume, category,currentRemoved]);
  return (
    <div className="App">
      <Header />
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <div className="layout__container">
          <Droppable droppableId="droppable1" type="RESUME">
            {(provided, snapshot) => (
              <div
                style={{
                  backgroundColor: snapshot.isDraggingOver
                    ? " #8a9a5b"
                    : "#00a572",
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
          <Droppable droppableId="droppable2" type="RESUME">
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
