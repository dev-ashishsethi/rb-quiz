import './App.css';
import { Nav } from './Components/Nav/Nav';
import { Route, Routes } from 'react-router';
import { Home } from './Pages/Home/Home';
import { Ques } from './Pages/Ques/Ques';
import { ScorePage } from './Pages/Score/Score';
import { SignIn } from './Pages/SignIn/SignIn';
import { SignUp } from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
       <Route path={"/"} element={<Home/>}/>
       <Route path={"/quiz/:quizId"} element={<Ques/>}/>
       <Route path={"/Score"} element={<ScorePage/>}/>
       <Route path={"/SignIn"} element={<SignIn/>}/>
       <Route path={"/SignUp"} element={<SignUp/>}/>
     </Routes>
    </div>
  );
}

export default App;
