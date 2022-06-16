import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ShowTodo from "./Components/ShowTodo";
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
