import {users ,questions} from './_DATA'

export function isQuestion (qid){
  return questions[qid] !== undefined
}

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  export function convertDate (timestamp) {
         
    const dt = new Date(timestamp)
    return dt.toLocaleString()
}
  
  export function _getUsers () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
    })
  }
  export function isQuestionAnswered(authedUser,qid)
  {
    console.log(`AuthedUser : ${authedUser} \n opt1 : ${questions[qid].optionOne.votes.includes(authedUser)} 
      opt2 : ${questions[qid].optionTwo.votes.includes(authedUser)}`);
    
    if (questions[qid].optionOne.votes.includes(authedUser) ||questions[qid].optionTwo.votes.includes(authedUser))
    {
      console.log(`opt1 : ${questions[qid].optionOne.votes.includes(authedUser)} 
      opt2 : ${questions[qid].optionTwo.votes.includes(authedUser)}`);
      return true
    }
    else{return false}
  }
  
  export function _getQuestions () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...questions}), 1000)
    })
  }
  
  function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    }
  }
  
  export function _saveQuestion (question) {
    return new Promise((res, rej) => {
      const authedUser = question.author;
      const formattedQuestion = formatQuestion(question);
  
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        }
        
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            questions: users[authedUser].questions.concat([formattedQuestion.id])
          }
        }
  
        res(formattedQuestion)
      }, 1000)
    })
  }
  
  export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            answers: {
              ...users[authedUser].answers,
              [qid]: answer
            }
          }
        }
  
        questions = {
          ...questions,
          [qid]: {
            ...questions[qid],
            [answer]: {
              ...questions[qid][answer],
              votes: questions[qid][answer].votes.concat([authedUser])
            }
          }
        }
  
        res()
      }, 500)
    })
  }
  