import React from "react";
import { Fragment } from "react";
import { Route , Switch } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NewQuestions from "./NewQuestion";
import Questions from './Questions'
import NavBar from "./NavigationBar";
import LeaderBoard from "./LeaderBoard";
import ErorrPage from "./ErorrPage";
class ProtectedRoute extends React.Component{
    render(){
        return(
           <BrowserRouter>
           <Fragment>
            <NavBar/>
           <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route  path='/questions/:id' component={Questions}></Route>
              <Route  path='/add' component={NewQuestions}></Route>
              <Route  path='/leaderboard' component={LeaderBoard}></Route>
              <Route component={ErorrPage}></Route>
           </Switch>
           </Fragment>
           </BrowserRouter>
        )
    }
}

  
  export default ProtectedRoute