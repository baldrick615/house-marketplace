import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<SignIn />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        {/*  Navbar */}
        <Navbar />

      </Router>



    </>
  );
}

export default App
