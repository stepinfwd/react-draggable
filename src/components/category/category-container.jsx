import React, { useState, useEffect } from "react";
import CategoryContainerHeader from "./category-container-header";
function CategoryContainer() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {

  }, []);

  const sendMessage = (e) => {
  console.log(e)
  };
  return (
    <div className="category__container mart-20">
      <CategoryContainerHeader />
      <div className="category__container__inner">
        {/* {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))} */}
      </div>
    </div>
  );
}

export default CategoryContainer;