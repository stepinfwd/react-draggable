import React, { useState, useEffect } from "react";
import listIcon from "../images/list.svg";
import addIcon from "../images/plus.svg";

function CategorySidebar({category,setselectedCategory,handleSelectedCategory}) {
  // const [category, setcategory] = useState([
  //   { id: 1, name: "devops" },
  //   { id: 2, name: "backend" },
  //   { id: 3, name: "junior frontend" },
  //   { id: 4, name: "business developmnent" },
  //   { id: 5, name: "Lead Engineer" },
  // ]);

  useEffect(() => {}, []);

  const handleAdd = () => {
    const channelName = prompt("add a new category");
  };
   handleSelectedCategory = (item) => { <div className="singleResume__container">
        <p>name: {item.name}</p>
        <p>{item.resume}</p>
    </div>
    setselectedCategory(item)
  };

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
          {category.map((item,index) => (
            <p onClick={()=>handleSelectedCategory(item)}  key={index}>{item.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySidebar;
