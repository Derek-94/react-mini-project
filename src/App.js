import './App.css';
import Geolocation from "./components/Geolocation"
import Timer from "./components/Timer"

function App() {
  return (
    <>
      <div className = "location-data">
        <Geolocation />
      </div>
      <div className = "timer">
        <Timer />
      </div>
    </>
  );
}

export default App;
