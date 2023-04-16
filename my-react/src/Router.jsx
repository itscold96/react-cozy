import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;