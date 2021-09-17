import { _getQuestions } from "./_DATA";
import { _getUsers } from "./_DATA";
import { _saveQuestion } from "./_DATA";
import { _saveQuestionAnswer } from "./_DATA";

export function getInitialData(){
    return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
		users,
		questions
	}));
}
export function SaveQuestion(question){
    return _saveQuestion(question)
}

export function SaveQuestionAnswer(data){
    return _saveQuestionAnswer(data)
}