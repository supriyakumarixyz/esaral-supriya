import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import Test from "./components/Test";
import "./SideBar.css";
import "./Home.css";
import "./Header.css";

function App() {
  return (
    <>
        <div class="grid-container">
          <Header />
          <Sidebar />
          <Home />
        </div>
    </>
  );
}

export default App;
