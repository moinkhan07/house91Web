import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";


function App() {

  return (
    <Router>
    <div className="App">
       <Navbar/>
       <Content/>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;
