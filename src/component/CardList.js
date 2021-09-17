import React from "react";
import CardView from "./Card";

class CardList extends React.Component{
    render(){
      const mystyle = {
        color: "green",
        padding: "10px",
        margin :"10px",
        fontFamily: "Arial",
        textAlign: "center",
        fontWeight:'bold',
        fontSize:"25pt"
      }
        return(
          <div>
              <p style={mystyle}>WOULD YOU RATHER</p>
              {
                  this.props.IDs.length?(
                    this.props.IDs.map((id)=><CardView key={id} id={id}></CardView>)
                  ):(
                      <p>empty</p>
                      )
              }
          </div>
        )
    }
}
export default CardList