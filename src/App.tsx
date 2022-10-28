import Main from "./pages/Main";
import WebHeader from "./components/webHeader";
import Webfooter from "./components/webFooter"

function App() {
  return (
    <>
      <div style={{}}>
        <WebHeader />

        <hr />

        <Main />
        <Webfooter/>
      </div>
    </>
  );
}

export default App;
