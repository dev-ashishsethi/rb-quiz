import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/Nav/Nav';
import { Route, Routes } from 'react-router';
import { Home } from './Pages/Home/Home';
import { Ques } from './Pages/Ques/Ques';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
       <Route path={"/"} element={<Home/>}/>
       <Route path={"/quiz/:quizId"} element={<Ques/>}/>
     </Routes>
    </div>
  );
}

export default App;
