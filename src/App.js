import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Game from "./Components/Game/Game";
import GameHeader from "./Components/Game/GameHeader.jsx/GameHeader";
import Main from './Components/Main/Main';
import Math from './Components/Math/Math';
import Maze from './Components/Math/Maze/Maze'
import Test from './Components/Test/test';
import TestContainer from './Components/Test/test';

function App() {
 
  return (
    <BrowserRouter >
  <Routes>
    <Route exact path={'/'} element={<Main />} />
    <Route exact path={'/math'} element={<Math />} />
    <Route exact path={'/:id'} element={<Game />} />
    <Route exact path={'/math/maze'} element={<Game />} />
  </Routes>
</BrowserRouter>
  )
}

export default App;
