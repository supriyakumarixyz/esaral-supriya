import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import "./SideBar.css";
import "./Home.css";
import "./Header.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
 
  const [apiData,setApiData]=useState([]);

  useEffect(() => {
    axios.get('https://apimocha.com/chapters/list').then((res) => {
      setApiData(res.data.data.node_tree);
    })
  }, []);
  return (
    <>
        <div className="grid-container">
          <Header />
            <Sidebar apiData={apiData}/>
          <Home apiData={apiData}/>
        </div>
    </>
  );
}

export default App;
