import React from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import  Button  from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form";
import { setAuthedUser } from '../actions/authedUser'

class Login extends React.Component{
    state={
        login:true
    }
    submit=(e)=>{
        const userId=this.user.value;
        e.preventDefault()
        
        if(userId!==''){
           this.props.dispatch(setAuthedUser(userId));
           console.log(userId)
        }
        else{
            this.setState({
                login:false
            })
        }
    }

    render(){
        return(
           <Card bg='light' className='text-center'>
               <Card.Header>LOG IN</Card.Header>
               <Card.Body>
                   <Form onSubmit={this.submit}>
                       <Form.Group controlId='form'>
                            <Form.Label>User Name</Form.Label>
                            {
                                this.state.login===false?
                                <p style={{color:'red'}}>YOU MUST LOG IN FIRST</p>:null
                            }
                            <Form.Control 
                                  as="select"
                                  ref={(id)=>this.user=id}
                            >
                             <option value=''>SELECT A USER</option>
                             {
                                 this.props.username.map((user)=>(
                                     <option value={user.id} key={user.id}>{user.name}</option>
                                 ))
                             }

                            </Form.Control>
                       </Form.Group>
                           <Button type='submit'> LOG IN</Button>
                   </Form>
                  


               </Card.Body>

           </Card>
        )
    }
}
function mapStateToProps({users}){
     return{
         username:Object.keys(users).map((id)=>({
           id:id,
           name:users[id].name,
         }))
     }
}
export default connect(mapStateToProps)(Login)