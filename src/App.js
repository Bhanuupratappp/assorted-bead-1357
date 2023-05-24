
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './AllRoutes/Navbar';

function App() {
  return (
    <div style={{fontFamily: "Roboto, sans-serif",}} className="App">
      <Navbar />
      <AllRoutes />
      
    </div>
  );
}

export default App;
