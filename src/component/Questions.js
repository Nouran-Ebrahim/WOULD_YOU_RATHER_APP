import React from "react";
import { connect } from "react-redux";
import AddAnswer from './AddAnswerQuestion'
import ViewResult from './ViewResultAnsweredQuestion'
class Questions extends React.Component{
    render(){
        const id=this.props.match.params.id
        console.log('the qestion id',id)
        const answerd=this.props.answers.hasOwnProperty(id)?true:false
        return(
          <div>
              <h2>WOULD YOU RATHER</h2>
            {
                answerd?<ViewResult id={id}></ViewResult>:<AddAnswer id={id}></AddAnswer>
            }
          </div>
        )
    }
}
function mapStateToProps({authedUser,users}){
    const answers=users[authedUser].answers
    console.log('user answers',answers)
    return{
        answers
    }
}
export default connect(mapStateToProps)(Questions)