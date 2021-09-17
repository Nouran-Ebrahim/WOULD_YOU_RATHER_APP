import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Avatar from './Avatar'
class Score extends React.Component{
    render(){
        return(
         <Card>
             <Card.Header>
                 <Avatar avatarUrl={this.props.user.avatarURL}/>
                 {this.props.user.name}
             </Card.Header>
             <Card.Body>
                 <Card.Text>ANSWERD:{Object.keys(this.props.user.answers).length}</Card.Text>
                 <Card.Text>CREATED:{this.props.user.questions.length}</Card.Text>
                 <Card.Footer>SCORE:{Object.keys(this.props.user.answers).length+this.props.user.questions.length}</Card.Footer>
             </Card.Body>
         </Card>
        )
    }
}
function mapStateToProps({users},{id}){
   return{
       user:users[id]
   }
}
export default connect(mapStateToProps)(Score)