import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import CinemaHall from './components/CinemaHall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cinema-hall" element={<CinemaHall />} />
      </Routes>
    </Router>
  );
}

export default App;
