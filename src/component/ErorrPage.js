import React from "react";
import { Link } from 'react-router-dom'
class ErorrPage extends React.Component {

    render() {
        const mystyle={
            textAlign: "center",
            width:'30%',
            height:"30%",
            marginLeft:"35%"
          }
        return (
            <div>
             <div> <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--sQ7Uw8o1--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg"
              alt="im"
              style={mystyle}
              ></img></div>
              <div style={{textAlign: "center"}}><button> <Link to='/'>RETURN TO HOME PAGE</Link> </button></div>

            </div>
        )
    }
}
export default ErorrPage