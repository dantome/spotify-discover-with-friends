import './App.css';
import Homepage from './pages/js/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoggedIn from './components/LoggedIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/loggedin" element={<LoggedIn />} />
          <Route path="/callback" element={<LoggedIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
