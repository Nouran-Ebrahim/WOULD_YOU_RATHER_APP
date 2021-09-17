import React from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import Card  from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";
import Avatar from './Avatar'
class CardView extends React.Component{
    render(){
        console.log('the question is',this.props.question)
        return(
           <Card>
               <Card.Header><Avatar avatarUrl={this.props.author.avatarURL} ></Avatar> 
               {this.props.author.name} ASKS
               </Card.Header>
               <Card.Body>
                   <Card.Text>{this.props.question.optionOne.text.slice(0,50)}.....?</Card.Text>
                   <Link to={`/questions/${this.props.question.id}`}>
                       <Button>VIEW</Button>
                   </Link>
               </Card.Body>
           </Card>
        )
    }
}
function mapStateToProps({questions,users},{id}){
    const question=questions[id]
    return{
        question:question?question:null,
        author:question?users[question.author]:null
    }
}
export default connect(mapStateToProps)(CardView)