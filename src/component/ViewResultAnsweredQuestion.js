import React from "react";
import { connect } from "react-redux";
import Card  from "react-bootstrap/Card";
import  ProgressBar  from "react-bootstrap/ProgressBar";
import Avatar from './Avatar'
import ErorrPage from "./ErorrPage";
//import { Redirect } from "react-router";
class ViewResult extends React.Component{

    render(){
        if(this.props.question===null){
            return <ErorrPage></ErorrPage>
          }
        const TotalVotes=this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length
        const optionOnePerecentage=Math.round((this.props.question.optionOne.votes.length/TotalVotes)*100)
        const optionTwoPerecentage=Math.round((this.props.question.optionTwo.votes.length/TotalVotes)*100)
        return(
           <Card>
               <Card.Header><Avatar avatarUrl={this.props.author.avatarURL} ></Avatar> 
               {this.props.author.name} RESULT
               </Card.Header>
               <Card.Body>
                   <div>
                   <p  id="optionOne">{this.props.question.optionOne.text}</p>
                   
                  <p>{this.props.question.optionOne.votes.includes(this.props.authedUser)?<span style={{color:"green"}}>your choise</span>
                  :null}</p>
                  <ProgressBar
                  now={optionOnePerecentage}
                  label={`${optionOnePerecentage}%`}
                  />
                  <Card.Text>CHOSEN BY {this.props.question.optionOne.votes.length} OUT OF {TotalVotes} USERS</Card.Text>
                   </div>
                   <div >
                   <p id="optionTwo">{this.props.question.optionTwo.text}</p>
                   <p>{this.props.question.optionTwo.votes.includes(this.props.authedUser)?<span style={{color:"green"}}>your choise</span>
                  :null}</p>
                  <ProgressBar
                  now={optionTwoPerecentage}
                  label={`${optionTwoPerecentage}%`}
                  />
                  <Card.Text>CHOSEN BY {this.props.question.optionTwo.votes.length} OUT OF {TotalVotes} USERS</Card.Text>
                   </div>  
               </Card.Body>
           </Card>
        )
    }
}
function mapStateToProps({questions,users,authedUser},{id}){
    const question=questions[id]
    return{
        question:question?question:null,
        author:question?users[question.author]:null,
        authedUser
    }
}
export default connect(mapStateToProps)(ViewResult)