import "../css/App.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import ToDoComponent from "./components/ToDoComponent";
import PageContent from "./components/PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <PageContent>
          <CssBaseline />
          <ToDoComponent />
        </PageContent>
      </ThemeProvider>
    </div>
  );
}

export default App;
