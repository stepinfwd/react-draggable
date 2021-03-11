import React from "react";
import SingleResume from "../resume/singleResume";
import CategoryContainerHeader from "./category-container-header";
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
          .items.map((innerItem, index) => (
            <>
              <SingleResume resume={innerItem} key={index} />
            </>
          ))}
      </div>
    </div>
  );
}

export default CategoryContainer;
