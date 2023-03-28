// import logo from './logo.svg';
// import './App.css';


// import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import Home from './components/Home';

// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
// import Registation from './components/Registration'
// import NavigationBar from './components/NavigationBar';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import ChangePass from './components/ChangePass';
// function App() {

//   return (
//     <div className="App">
     
//       <BrowserRouter>
     

  
//         <Router>
                 
          
//                         <Switch > 
//                         <Route path="/" exact component={Login} />
//                              <Route path="/dashboard" exact component={Dashboard} />
//                              <Route path="/register" exact component={Registation} />
//                             <Route path="/home" exact component={Home} />
//                             <Route path="/cpassword" exact component={ChangePass} />


                          
                            
               
//                        </Switch> 
                       
                 
               
//                 </Router>
      
   
     
      
//      </BrowserRouter>
  

     
    
     
     
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import React,{Suspense} from 'react'
import MyErrorBoundary from './components/MyErrorBoundry';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const ChangePass = React.lazy(() => import('./components/ChangePass'));
const Login = React.lazy(() => import('./components/Login'));
const Home = React.lazy(() => import('./components/Home'));
const Registration = React.lazy(() => import('./components/Registration'));
function App() {
  return ( 
    <>
  
    <Suspense fallback={<h1>Loading...</h1>}>
        <Router>
          <Switch>
              <Route path="/" exact component={Login}/> 
              <Route path="/dashboard" exact component={Dashboard}/>
              <Route path="/register" exact component={Registration}/>
              <Route path="/home" exact component={Home} />
         <Route path="/cpassword" exact component={ChangePass} />
            
              
          </Switch>
        </Router>
      </Suspense>
    
    </>
  );
}

export default App;

