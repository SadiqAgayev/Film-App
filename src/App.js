import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WatchLists from './components/WatchLists';
import Watched from './components/Watched';
import Add from './components/Add';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<WatchLists />} />
        <Route path='/watched' element={<Watched />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
