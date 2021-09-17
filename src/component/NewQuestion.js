import { Fragment } from "react";
import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from "react-router";
class NewQuestions extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
        gohome: false
    }
    inputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState(
            {
                [name]: value
            }
        )
    }

    submit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
        this.setState(            
            {
                optionOne: '',
                optionTwo: '',
                gohome: true
            }
        )
    }
    render() {
        if(this.state.gohome === true ) return <Redirect to="/"></Redirect> 
         console.log(this.state.gohome)
        return (
            <Fragment>
                <Card>
                    <Card.Text>WOULD YOU RATHER ..?</Card.Text>
                    <Card.Body>
                        <Form onSubmit={this.submit}>
                            <Form.Group controlId="one">
                                <Form.Label>1.</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='optionOne'
                                    value={this.state.optionOne}
                                    onChange={this.inputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="tow">
                                <Form.Label>2.</Form.Label>
                                <Form.Control
                                   type='text'
                                   name='optionTwo'
                                   value={this.state.optionTwo}
                                   onChange={this.inputChange}
                                />
                            </Form.Group>
                            <Button type='submit' disabled={this.state.optionOne===''||this.state.optionTwo===''} >submit</Button>
                        </Form>
                    </Card.Body>

                </Card>
            </Fragment>
        )
    }
}
export default connect()(NewQuestions)