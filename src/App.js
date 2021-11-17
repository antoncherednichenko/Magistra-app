
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import './App.css';
import Main from './Components/Main/Main';
import Math from './Components/Math/Math';
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path={'/'} element={<Main />} />
        <Route exact path={'/math'} element={<Math />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
