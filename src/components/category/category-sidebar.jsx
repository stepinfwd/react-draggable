import React, { useState, useEffect } from "react";
import initialData from "../data";
import listIcon from "../images/list.svg";
import addIcon from "../images/plus.svg";
import { v4 as uuidv4 } from "uuid";

function CategorySidebar({selectedCategory,handleSelectedCategory}) {
const [category, setcategory] = useState({
    [uuidv4()]: { id: 1, name: "RESUME", items: initialData.record },
    [uuidv4()]: { id: 2, name: "devops", items: [] },
    [uuidv4()]: { id: 3, name: "backend", items: [] },
    [uuidv4()]: { id: 4, name: "junior frontend", items: [] },
    [uuidv4()]: { id: 5, name: "business developmnent", items: [] },
    [uuidv4()]: { id: 6, name: "Lead Engineer", items: [] },
  });
  useEffect(() => {}, []);

  const handleAdd = () => {
    const channelName = prompt("add a new category");
  };
  // const handleSelectedCategory = (e) => {
  //   console.log("category selected", e.target.innerText);
  //   setselectedCategory(e.target.innerText)
  // };
  return (
    <div className="sidebar">
      <div className="sidebar__inner__container">
        <div className="sidebar__category">
          <div className="sidebar__header">
            <img className="sidebar__header__icon" alt="" src={listIcon}></img>
            <h4>Categories</h4>
            <img
              className="sidebar__header__addIcon"
              alt=""
              src={addIcon}
              onClick={handleAdd}
            ></img>
          </div>
        </div>
        <div className="sidebar__category__list">
          {Object.keys(category).map((item, index) => (
            <p onClick={()=>handleSelectedCategory(category[item].name)} key={index}>
              {category[item].name}
              {console.log(item)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySidebar;
