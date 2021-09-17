import { showLoading } from "react-redux-loading";
import { hideLoading } from "react-redux-loading";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { addQuestion } from "./questions";
import { addQuestionAnswer } from "./questions";
import { getInitialData } from "../utils/api";
import { SaveQuestion } from "../utils/api";
import { SaveQuestionAnswer } from "../utils/api";

export function handleInitialDate() {
    return (dispatch) => {

        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })

    }
}
export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return SaveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }).then((question) => dispatch(addQuestion(question)))

            
    }
}

export function handleAddQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return SaveQuestionAnswer({
            qid,
            answer,
            authedUser
        }).then(() => 
            dispatch(addQuestionAnswer({

                qid,
                answer,
                authedUser
            })))
        
    }
}
