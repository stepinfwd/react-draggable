import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import ResumeCard from "./components/resume/resumeContainer";
import "./App.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import CategorySidebar from "./components/category/category-sidebar";
import CategoryContainer from "./components/category/category-container";
import ResumeContainer from "./components/resume/resumeContainer";

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Header />
      <div className="layout__container">
        <ResumeContainer />
        <CategorySidebar />
        <CategoryContainer/>
      </div>
=======
      <Header /> 
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="layout__container">
          <ResumeContainer />
          <CategorySidebar />
          <CategoryContainer />
        </div>
      </DragDropContext>

>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}

export default App;
