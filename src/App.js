import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import Service from './Component/Service/Service';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';
import Signup from './Component/Signup/Signup';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/dashboard' && <Header />}
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      {location.pathname !== '/dashboard' && <Footer />}
    </div>
  );
}

export default App;
