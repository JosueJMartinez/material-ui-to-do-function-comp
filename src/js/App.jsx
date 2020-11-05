import "../css/App.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import ToDoComponent from "./components/ToDoComponent";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ToDoComponent />
    </div>
  );
}

export default App;
