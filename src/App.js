import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import initializeAuthentication from './Firebase/firebase.init';
import Menubar from './component/Menubar/Menubar';
import Home from './component/Home/Home';
import SignIn from './component/SignIn/SignIn'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import SignUp from './component/SignUp/SignUp';
import AuthProvider from './hooks/context/AuthProvider';
import PrivateRoute from './hooks/PrivateRoute/PrivateRoute';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Dashbord from './component/Dashbord/Dashbord';
import MyBooking from './component/MyBooking/MyBooking';
import AllBooking from './component/AllBooking/AllBooking';
import AddNewService from './component/AddNewService/AddNewService';
import Gellary from './Gellary/Gellary';
import AboutUs from './component/AboutUs/AboutUs';
import ContactUs from './component/ContactUs/ContactUs';




// firebase authentication
initializeAuthentication();



function App() {
  return (
    <div className="body">
      <AuthProvider>
        <BrowserRouter>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/gellary">
              <Gellary></Gellary>
            </PrivateRoute>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/servicedetails/:servicedetailsId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/dashbord">
              <Dashbord></Dashbord>
            </PrivateRoute>
            <PrivateRoute path="/mybooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/allbooking">
              <AllBooking></AllBooking>
            </PrivateRoute>
            <PrivateRoute path="/service">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
