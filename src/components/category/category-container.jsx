import React from "react";
import CategoryContainerHeader from "./category-container-header";
import { Draggable } from "react-beautiful-dnd";
import SingleResume from "../resume/singleResume";
function CategoryContainer({ selectedCategory, category }) {
  return (
    <div className="category__container mart-20">
      <CategoryContainerHeader
        selectedCategory={selectedCategory}
        className="category__container__header"
      />
      <div className="category__container__inner">
        {category
          .find((item) => item === selectedCategory)
          .items.map((innerItem, index) =>
            innerItem ? (
              <Draggable
                draggableId={`id2-${index}`}
                index={index}
                key={index}
                type="TASK"
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="inner"
                  >
                    <SingleResume resume={innerItem} key={index} />
                  </div>
                )}
              </Draggable>
            ) : (
              <div className="singleResume__container">
                <p>NO MORE...</p>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default CategoryContainer;
