import React from "react";
import  Image  from "react-bootstrap/Image";
class Avatar extends React.Component{
    render(){
        return(
          <Image
          src={this.props.avatarUrl}
          alt="image"
          width="50"
          height="50"
          roundedCircle
          />
           
          
        )
    }
}
export default Avatar