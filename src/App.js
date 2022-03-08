import "./App.css";
import Navbar from "./components/Header/Header";
import Availablecakes from "./components/Meals/Availablecakes";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Availablecakes />
    </div>
  );
}

export default App;
