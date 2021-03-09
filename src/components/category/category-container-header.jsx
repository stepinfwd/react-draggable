import React, { useState, useEffect } from "react";
function CategoryContainerHeader({selectedCategory}) {
  return (
    <div className="category__container__header">
        <h3>
          <span className="category__container__header__name">#{selectedCategory.name}</span>
        </h3>
    </div>
  );
}

export default CategoryContainerHeader;
