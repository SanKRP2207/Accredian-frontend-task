import Refer from './components/Refer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Howrefer from './components/Howrefer';

function App() {
  return (

    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Refer />} />
          </Routes>
        </div>
        <div>
          <Howrefer />
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
