import "../css/App.css";
import { CssBaseline } from "@material-ui/core";

import ToDoComponent from "./components/ToDoComponent";
import PageContent from "./components/PageContent";
import { ThemeProviderCustom } from "./contexts/ThemeContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <ThemeProviderCustom>
        <PageContent>
          <CssBaseline />
          <NavBar />
          <ToDoComponent />
        </PageContent>
      </ThemeProviderCustom>
    </div>
  );
}

export default App;
