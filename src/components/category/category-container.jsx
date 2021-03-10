import React, { useState, useEffect } from "react";
import SingleResume from "../resume/singleResume";
import CategoryContainerHeader from "./category-container-header";
function CategoryContainer({ selectedCategory, category }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {}, []);

  const sendMessage = (e) => {
    console.log(e);
  };
  return (
    <div className="category__container mart-20">
      <CategoryContainerHeader
        selectedCategory={selectedCategory}
        className="category__container__header"
      />
      <div className="category__container__inner">
        {/* {CategoryContainerHeader.find(x with id of selected category).item.map((item) => (
          <SingleResume
          resume={item}
          />
        ))} */}

        {console.log(
          "container map",
          category.find((item) => item === selectedCategory)
        )}
        {category
          .find((item) => item === selectedCategory)
          .items.map((innerItem) => (
            <p>{innerItem}</p>
          ))}
      </div>
    </div>
  );
}

export default CategoryContainer;
