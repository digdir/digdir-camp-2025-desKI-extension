import StartPage from './pages/startPage/startPage';
import { GridMenu } from './pages/gridMenu';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/grid" element={<GridMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
