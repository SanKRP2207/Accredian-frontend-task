import Refer from './components/Refer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/refer' element={<Refer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
