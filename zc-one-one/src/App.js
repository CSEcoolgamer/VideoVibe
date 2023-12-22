import {Routes, Route} from 'react-router-dom';

import HomePage from './Pages/Home';
import Roompage from './Pages/Room';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/room/:roomId' element={<Roompage />} />
    </Routes>

  );
}

export default App;
