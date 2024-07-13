
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import Alert from './component/Alert';
import React from "react";
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
// } from "react-router-dom";

function App() {
 
  
  return(
    <>
       {/* <BrowserRouter> */}
    <Navbar title="BusinessHub" home="Home" />
    <Alert alert="this is akbar"/>
    <div className="container">
    <Textform heading="Enter the text to analyze"/>
    <About />
    
      {/* <Switch>
        <Route exact path="/about">
   
        </Route>
        <Route exact path="/">
       
        </Route>
      </Switch> */}
     
 
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
