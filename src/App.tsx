import LoginPage from "./pages/LoginPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUpPage from "./pages/SignUpPage";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Netflix/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/player" element={<Player/>}/>
    <Route path="/tv" element={<TvShow/>}/>
    <Route path="/movie" element={<MoviePage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
