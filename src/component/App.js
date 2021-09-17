import React, { Component ,Fragment} from 'react'
import Login from './LogIn';
import { connect } from 'react-redux'
import { handleInitialDate } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import ProtectedRoute from './ProtectedRoute';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialDate())
  }
  render(){
    console.log('login',this.props.loadingBar.default)
    if ( this.props.loadingBar.default === 1) {
        return(<LoadingBar></LoadingBar>)
    }else{
      return (
        <Fragment>
           <div>
              {!this.props.authedUser?<Login/>:<ProtectedRoute/>}
          </div>
        </Fragment>
            );
    }
    
  }

}

function mapStateToProps ({ authedUser,loadingBar }) {
  console.log("the authedUser is",authedUser)
  return {
     authedUser ,
     loadingBar
  }
}

export default connect(mapStateToProps)(App) 