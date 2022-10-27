import "./App.css";
import { Link } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <hr />
        <Main />
      </div>
    </>
  );
}

export default App;
