import "./App.css";
import Navbar from "./Components/Navbar";
import BottomBar from "./Components/BottomBar";
import HomeComp from "./Pages/HomeComp";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
      <HomeComp />

      <BottomBar />
    </div>
  );
}

export default App;
