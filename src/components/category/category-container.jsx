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
      {console.log("Selsecasd",selectedCategory)}
      <CategoryContainerHeader
        selectedCategory={selectedCategory}
        className="category__container__header"
      />
      <div className="category__container__inner">
        {
          
          category
            .find((item) => item === selectedCategory)
            .items.map((innerItem, index) => (
              <>
                {console.log("inneriteam is", innerItem)}
                <SingleResume resume={innerItem} key={index} />
              </>
            ))}
      </div>
    </div>
  );
}

export default CategoryContainer;
