import React, { useState, useEffect } from "react";
import CategoryContainerHeader from "./category-container-header";
import { Draggable } from "react-beautiful-dnd";
function CategoryContainer({ selectedCategory }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {}, []);

  const sendMessage = (e) => {
    console.log(e);
  };
  return (
    <Droppable droppableId="droppable2">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {this.state.selected.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}
                >
                  {/* {item.content} */}
                  <div className="category__container mart-20">
                    <CategoryContainerHeader
                      selectedCategory={selectedCategory}
                      className="category__container__header"
                    />
                    <div className="category__container__inner"></div>
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default CategoryContainer;
