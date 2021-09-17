import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Avatar from './Avatar'
import ErorrPage from "./ErorrPage";
import { handleAddQuestionAnswer } from '../actions/shared'
class AddAnswer extends React.Component {
    state = {
        error: ''
    }
    submit(id, e) {
        e.preventDefault()
        const answer = this.form.answer.value
        console.log('the answer is', answer)
        if (answer !== '') {
            this.props.dispatch(handleAddQuestionAnswer(id, answer))
        } else {
            this.setState({
                error: 'you must answer'
            })
        }
    }
    render() {
        if (this.props.question === null) {
            return <ErorrPage></ErorrPage>
        }
        return (
            <Card>
                <Card.Header><Avatar avatarUrl={this.props.author.avatarURL} ></Avatar>
                    {this.props.author.name} ASKS
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={(e) => this.submit(this.props.question.id, e)}
                        ref={(ans) => (this.form = ans)}
                    >
                        {
                            this.state.error ? (
                                <p>{this.state.error}</p>
                            ) : null
                        }
                        <Form.Check
                        custom
                            type="radio"
                            id="optionOne"
                            label={this.props.question.optionOne.text}
                            value="optionOne"
                            name="answer"
                        />

                        <Form.Check
                        custom
                            type="radio"
                            id="optionTwo"
                            label={this.props.question.optionTwo.text}
                            value="optionTwo"
                            name="answer"
                        />
                        <Button type="submit">VOTE</Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}
function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id]
    return {
        question: question ? question : null,
        author: question ? users[question.author] : null
    }
}
export default connect(mapStateToProps)(AddAnswer)