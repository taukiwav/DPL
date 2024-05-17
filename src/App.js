import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Fixtures from './components/pages/Fixtures';
import Results from './components/pages/Results';
import SignUp from './components/pages/SignUp';
import Table from './components/pages/Table';
import Stats from './components/pages/Stats';
import Clubs from './components/pages/Clubs';
import Highlights from './components/pages/Highlights';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/results" element={<Results />} />
          <Route path="/table" element={<Table/>} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
