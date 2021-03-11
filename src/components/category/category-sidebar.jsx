import React, { useEffect, useState } from "react";
import listIcon from "../images/list.svg";
import addIcon from "../images/plus.svg";

function CategorySidebar({
  category,
  setselectedCategory,
  handleSelectedCategory,
  handleAddCategory
}) {
  const [channelName, setchannelName] = useState();

  useEffect(() => {
    if(channelName)
    handleAddCategory(channelName)
  }, [channelName])

  const  categoryCallback = () => {
    const data=(prompt("add a new category"));
    console.log("data",data)
    setchannelName(data)
  };
    // console.log("channel", channelName);

  handleSelectedCategory = (item) => {
    setselectedCategory(item);
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
              onClick={categoryCallback}
            ></img>
          </div>
        </div>
        <div className="sidebar__category__list">
          {console.log("category inside sidebar", category)}
          {category.map((item, index) => (
            <p onClick={() => handleSelectedCategory(item)} key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySidebar;
