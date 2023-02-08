import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/home" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/*" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
