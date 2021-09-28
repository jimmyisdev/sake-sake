import Main from "./Main";
import NavBar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router >
        <NavBar />
        <Main />
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
