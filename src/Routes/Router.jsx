import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:charId' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
