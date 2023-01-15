import './App.css';
import { Nav } from './Components/Nav/Nav';
import { Route, Routes,Outlet } from 'react-router';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Outlet/>
    </div>
  );
}

export default App;
