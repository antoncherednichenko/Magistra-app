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
import Remember from './Components/Math/Remember/Remember';
import RuleArea from './Components/Rules/RuleArea';
import Rule from './Components/Rules/Rule/Rule';


function App({gameSettings}) {
 
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path={'/'} element={<Main />} />
        <Route exact path={'/games'} element={<Math />} />
        <Route exact path={'/maze'} element={<Game Game={Maze} />} />
        <Route exact path={'/table_shulte'} element={<Game Game={Shulte} />} />
        <Route exact path={'/solve'} element={<Game Game={Solve} />} />
        <Route exact path={'/remember'} element={<Game Game={Remember} />} />
        <Route exact path={'/rules'} element={<RuleArea />} />
        <Route exact path={'/:id'} element={<Rule />} />
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
