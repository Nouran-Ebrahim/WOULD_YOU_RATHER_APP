import React from "react";
import Score from "./Score";
import { connect} from "react-redux";
class LeaderBoard extends React.Component{
    render(){
        return(
          <div>
              <h2>LEADER BOARD</h2>
              {
                  this.props.userIDs.map((id)=>(
                       <Score key={id} id={id}></Score>
                  ))
              }
          </div>
        )
    }
}
function mapStateToProps({users}){
      const userIDs=Object.keys(users).sort((a,b)=>{
          const scoreA=users[a].questions.length+Object.keys(users[a].answers).length
          const scoreB=users[b].questions.length+Object.keys(users[b].answers).length
          return scoreB-scoreA
      })
      return{
        userIDs:userIDs
      }
}
export default connect(mapStateToProps)(LeaderBoard)