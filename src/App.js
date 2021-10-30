import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import initializeAuthentication from './Firebase/firebase.init';
import Menubar from './component/Menubar/Menubar';
import Packages from './component/Packages/Packages';
import Home from './component/Home/Home';
import SignIn from './component/SignIn/SignIn'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import SignUp from './component/SignUp/SignUp';


// firebase authentication
initializeAuthentication();



function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/packages">
            <Packages></Packages>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
