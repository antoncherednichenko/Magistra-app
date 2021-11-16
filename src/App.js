import './App.css';
import Main from './Components/Main/Main';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path={'/'} element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
