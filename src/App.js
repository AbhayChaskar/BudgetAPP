import './App.css';
import React,{Suspense} from 'react';
import ErrorBoundary from './Components/Errorboundry';
import {BrowserRouter as Router,Route,Routes,Switch,NavLink} from 'react-router-dom';
// import SocialLogin from './Components/SocialLogin';
const Home = React.lazy(() => import('./Components/Home'));
const Login = React.lazy(() => import('./Components/Login'));
const Registration = React.lazy(() => import('./Components/Registration'));
// const ScLogin = React.lazy(() => import('./Components/SocialLogin'));

function App() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div className="text-center">Please wait ...</div>}> 
          <Router>
            <Routes>
              <Route path="/" element={<Registration/>}/>
              <Route path="/login" element={<Login/>}/>  
              <Route path="/home" element={<Home/>}/>  
              {/* <Route path="/sociallogin" element={<ScLogin/>}/>     */}
            </Routes>  
          </Router>      
        </Suspense>  
      </ErrorBoundary>
    </>
  );
}

export default App;
