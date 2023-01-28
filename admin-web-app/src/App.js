import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';

// importing pages
import Home from './pages/Home/Home';
import Attendance from './pages/Attendance/Attendance';
import AddCustomer from './pages/AddCustomer/AddCustomer';
import FindCustomer from './pages/FindCustomer/FindCustomer';
import UpdateCustomer from './pages/UpdateCustomer/UpdateCustomer';

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route element={<Home />} path='/admin/home' />
            <Route element={<Attendance />} path='/admin/attendance' />
            <Route element={<AddCustomer />} path='/admin/addCustomer' />
            <Route element={<FindCustomer />} path='/admin/findCustomer' />
            <Route element={<UpdateCustomer />} path='/admin/updateCustomer' />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
