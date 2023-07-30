import "./App.css";
import ContextExample from "./components/ContextExample.js";
import EventHandlers from "./components/EventHandlers.js";
import RefExample from "./components/RefExample.js";
import State from "./components/State.js";
import { ThemeProvider } from "./components/context/ThemeContext.js";
function App() {
  return (
    <>
      <ThemeProvider>
        {/* <PostList /> */}
        {/* <EventHandlers /> */}
        {/* <State /> */}
        {/* <ContextExample /> */}
        <RefExample />
      </ThemeProvider>
    </>
  );
}

export default App;
