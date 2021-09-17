
export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS';
export const ADD_QUESTION='ADD_QUESTION';
export const ADD_QUESTION_ANSWER='ADD_QUESTION_ANSWER';

export function receiveQuestions(questions){
    return {
        type:RECEIVE_QUESTIONS,
        questions
    }
}

 export function addQuestion(question){
   return{
       type:ADD_QUESTION,
       question
   }
}

export function addQuestionAnswer({ qid, answer,authedUser}){
   return{
       type:ADD_QUESTION_ANSWER,
       data:{
        qid,
        answer ,  
        authedUser, 
        
       }
   }
}

