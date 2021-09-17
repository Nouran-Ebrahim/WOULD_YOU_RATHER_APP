import React from "react";
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Button  from "react-bootstrap/Button";
import { connect } from 'react-redux'
import Avatar from "./Avatar";
import {restAuthedUser} from '../actions/authedUser'
class NavBar extends React.Component {
    logout=()=>{
        this.props.dispatch(restAuthedUser(this.props.user.id))
    }
    render() {
        const style = {
            color: "green",
            fontFamily: "Arial",
            textAlign: "center",
            fontWeight:'bold',
            fontSize:"15pt"
          }
        return (
            <Nav fill variant="tabs" className="my-3 border">
             <Nav.Item as={Link} to='/' exact>Home</Nav.Item>
             <Nav.Item as={Link} to='/add' >New Question</Nav.Item>
             <Nav.Item as={Link} to='/leaderboard'> Leader Board </Nav.Item>
             <Nav.Item>{<span style={style}>hello {this.props.user.name}</span> }</Nav.Item>
             <Nav.Item><Avatar avatarUrl={this.props.user.avatarURL}></Avatar> </Nav.Item>
             <Button onClick={this.logout}> LOG OUT </Button>
            </Nav>


        )
    }
}
function mapStateToProps({users,authedUser}){
return{
    user:users[authedUser]
}
}
export default connect(mapStateToProps)(NavBar) 