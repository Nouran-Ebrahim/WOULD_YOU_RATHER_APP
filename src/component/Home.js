import React from "react";
import { connect } from 'react-redux';
import  Tab  from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CardList from './CardList'
class Home extends React.Component{
    render(){
        return(
          <Tabs>
              <Tab eventKey="unanswerd" title="UN ANSWERD QUESTIONS">
              <CardList IDs={this.props.unAnswerdQuestions}></CardList>
              </Tab>
              <Tab eventKey="answerd" title="ANSWERD QUESTIONS">
              <CardList IDs={this.props.answerdQuestions}></CardList>
              </Tab>
          </Tabs>
        )
    }
}
function mapStateToProps({authedUser,questions,users}){
    const keys=Object.keys(users[authedUser].answers)
    const Values=Object.values(questions)
    const allid=Values.map((data)=>data.id)
    const answerdQuestions=allid.filter((id)=>keys.includes(id)).sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
    const unAnswerdQuestions=allid.filter((id)=>!keys.includes(id)).sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
    return{
        answerdQuestions,
        unAnswerdQuestions
    }
}
export default connect(mapStateToProps)(Home) 