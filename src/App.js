import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import Book from './Components/Pages/Dashboard/User/Book/Book';
import BookingList from './Components/Pages/Dashboard/User/BookingList/BookingList';
import Review from './Components/Pages/Dashboard/User/Review/Review';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Signup from './Components/Pages/Login/Signup/Signup';
import Header from './Components/Pages/Shared/Header/Header';

function App() {
  return (
    <div>

      <Header className='bg-base-100'></Header>


      <Routes>

        {/* ----------- HOME Routes ----------- */}
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>


        {/* ----------- LOGIN Routes ----------- */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>



        {/* ----------- DASHBOARD Routes ----------- */}
        <Route path='/dashboard' element={
          <Dashboard></Dashboard>}>

          {/* DASHBOARD NESTED ROUTE */}
          <Route index element={<Book></Book>}></Route>
          <Route path='bookingList' element={<BookingList></BookingList>}></Route>
          <Route path='review' element={<Review></Review>}></Route>

        </Route>





      </Routes >


    </div >
  );
}

export default App;
