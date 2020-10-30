import "../css/App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";

import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <>
        <CssBaseline />
        <ToDo />
      </>
    </div>
  );
}

export default App;
