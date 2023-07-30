import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Layout/Footer';
import Header from './Component/Layout/Header';
import Home from './Component/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
