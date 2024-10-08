import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages and components 
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar></Navbar> */}
        <div className="pages">
          <Routes>
            <Route path='/' element={<LoginPage></LoginPage>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
