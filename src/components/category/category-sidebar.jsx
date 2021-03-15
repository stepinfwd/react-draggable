import React, { useEffect, useState } from "react";
import listIcon from "../images/list.svg";
import Icon from "../images/plus.svg";
import deleteIcon from "../images/trash.svg";

function CategorySidebar({
  category,
  setselectedCategory,
  handleSelectedCategory,
  handleAddCategory,
}) {
  
  const  [channelName, setchannelName] = useState();

  const handleNewCategory = () => {
    const data = prompt("add a new category");
    console.log("data", data);
    setchannelName(data);
    handleAddCategory(data);
  };
  const handleDeleteCategory = () => {
    const data = alert("are you sure ? this cant be undone ");
    console.log("data", data);
  };

  handleSelectedCategory = (item) => {
    setselectedCategory(item);
  };

  const toggleSidebarList=()=>{

  }
  return (
    <div className="sidebar">
      <div className="sidebar__inner__container">
        <div className="sidebar__category">
          <div className="sidebar__header">
            <img className="sidebar__header__icon" alt="" src={listIcon} onClick={toggleSidebarList}></img>
            <h4>Categories</h4>
            <img
              className="sidebar__header__addIcon"
              alt=""
              src={Icon}
              onClick={handleNewCategory}
            ></img>
          </div>
        </div>
        <div className="sidebar__category__list">
          {category.map((item, index) => (
            <>
              <div
                className="sidebar__category__card"
                onClick={() => handleSelectedCategory(item)}
                key={index}
                
              >
                <p>
                  {item.name}
                  <span>
                    <img onClick={handleDeleteCategory}src={deleteIcon}></img>
                  </span>
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySidebar;
