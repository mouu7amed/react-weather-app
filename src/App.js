import { Route, Routes } from 'react-router-dom'
import { Main } from './components/Main/Main';
import { NotFound } from './components/NotFound/NotFound';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
