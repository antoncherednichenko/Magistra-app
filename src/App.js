
import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import './App.css';
import Game from "./Components/Game/Game";
import Main from './Components/Main/Main';
import Math from './Components/Math/Math';
import Maze from "./Components/Math/Maze/Maze";
function App() {
 
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path={'/'} element={<Main />} />
        <Route exact path={'/math'} element={<Math />} />
        <Route exact path={'/:id'} element={<Game />} />
        <Route exact path={'/math/maze'} element={<Maze />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
