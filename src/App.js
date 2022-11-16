import { Navbar, Main, WordAnimation, Terminal, Desktop } from "./components";
import Cmatrix from "./components/desktop/terminal/cmatrix/Cmatrix";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Desktop />
      {/* <Cmatrix /> */}
    </div>
  );
}

export default App;
