import { useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import CategorySidebar from "./components/category/category-sidebar";
import CategoryContainer from "./components/category/category-container";
import ResumeContainer from "./components/resume/resumeContainer";

function App() {
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);
  return (
    <div className="App">
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="layout__container">
          <ResumeContainer />
          <CategorySidebar />
          <CategoryContainer />
        </div>
      </DragDropContext>

      <Footer />
    </div>
  );
}

export default App;
