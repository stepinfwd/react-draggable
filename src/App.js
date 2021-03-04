import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import ResumeCard from "./components/resume/resumeCard";
import "./App.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import CategorySidebar from "./components/category/category-sidebar";
import CategoryContainer from "./components/category/category-container";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="layout__container">
        <ResumeCard />
        <CategorySidebar />
        <CategoryContainer/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
