import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import AutoUpdate from './pages/AutoUpdate';
import ManualUpdate from './pages/ManualUpdate';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path='/automatic' element={ <AutoUpdate navigate={navigate} />} />
        <Route path='/manually' element={ <ManualUpdate navigate={navigate} /> } />
      </Routes>
    </div>
  );
}

export default App;