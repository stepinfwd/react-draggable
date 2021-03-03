import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import ResumeCard from "./components/resume/resumeCard";
import "./App.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ResumeCard />
      <Footer />
    </div>
  );
}

export default App;
