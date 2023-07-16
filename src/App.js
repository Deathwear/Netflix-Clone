import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import TVshow from './pages/TVshow';
import Movie from './pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/movie' element={<Movie/>}/>
        <Route exact path='/netflix' element={<Netflix/>}/>
        <Route exact path='/player' element={<Player/>}/>
        <Route exact path='/tvshow' element={<TVshow/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
