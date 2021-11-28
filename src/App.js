import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Game from "./Components/Game/Game";
import Main from './Components/Main/Main';
import Math from './Components/Math/Math';
import Shulte from './Components/Math/Shulte/Shulte';
import { connect } from 'react-redux';
import Solve from './Components/Math/Solve/Solve';
import Maze from './Components/Math/Maze/Maze'


function App({gameSettings}) {
 
  return (
    <BrowserRouter >
  <Routes>
    <Route exact path={'/'} element={<Main />} />
    <Route exact path={'/math'} element={<Math />} />
    <Route exact path={'/russian_leng'} element={<Math />} />
    <Route exact path={'/maze'} element={<Game game={<Maze />} />} />
    <Route exact path={'/table_shulte'} element={<Game game={<Shulte />} />} />
    <Route exact path={'/solve'} element={<Game game={<Solve />} />} />
  </Routes>
</BrowserRouter>
  )
}
const mapStateToProps = state => (
  {
    gameSettings: state.gameSettings
  }
)
export default connect(mapStateToProps)(App);
