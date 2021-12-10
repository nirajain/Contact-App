import React from "react";
import { Route,Routes} from "react-router-dom";
import { Switch} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App=()=> {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar/>
      <Switch>
        <Route exact path="/" component={()=><Home/>}/>
        <Route path ="/add">
          <AddContact/>
        </Route>
        <Route path ="/edit/:id">
          <EditContact/>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
