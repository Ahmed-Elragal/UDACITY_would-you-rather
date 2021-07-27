import React, { Component } from 'react'
import {connect} from 'react-redux'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import {Redirect} from 'react-router-dom'
//import {USER_ANSWER_QUESTION} from '../redux/actions/users'
import {handleAnswerQuestion} from '../redux/actions/questions'   //, QUESTION_ANSWER_QUESTION
import {convertDate} from '../utils/api'

 class UnAnsweredPoll extends Component {
    
    state ={
      optionOne : false,
      optionTwo :false,
      answer :'',
    } 
    handleChange =async (e) =>{
      // console.log('handleChange : Option \n ' , e.target.id);
      if (e.target.id === 'optionOne'){
        await this.setState( () => ({
          answer : 'optionOne',
          optionOne : true,
          optionTwo : false,
          
        }))

      }
      else if(e.target.id === 'optionTwo'){
        await this.setState( () => ({
          answer : 'optionTwo',
          optionOne : false,
          optionTwo : true,
          
        }))
      }
      // console.log('options : ', this.state);
    }
   handleSubmit =()=>{
     //e.preventDefault()
     const {id,authedUser,dispatch} = this.props   //,users,questions
     const {answer} = this.state
     const qid = id
     if(answer !== 'optionOne' && answer !== 'optionTwo'){
       alert('please choose one answer only '+answer)
       return;
     }    
     dispatch(showLoading() )
     dispatch(handleAnswerQuestion({authedUser,qid,answer}))
     dispatch(hideLoading() )

   }
    render() {
      
      const {id,questions,users} = this.props 
      const question = questions[id]
      if(!id){
       
        return (
          <div>inveld id
              <Redirect   to ={`/404/questions/${id}`}/>
          </div>
        )
      }
      
        return (    
          
          <div className='question-details'> 
            {/* <div className='question-user'> */}
            
              <img alt='avatar' className='avatar' src={ `../avatars/${question.author}.jpg`}/>
              <div className='question-details-data bg-color-blue-black' >               
                <div>
                   <p className='user-name'> { users[question.author].name} </p> 
                   <p> {convertDate(question.timestamp )}</p>
                   
                </div>                         
              <h3>Asks Would you rather :  </h3>
              <div>
                <input id='optionOne' type="radio" value="optionOne" 
                checked={this.state.optionOne} onChange ={ (e) =>(this.handleChange(e))} />
                <label htmlFor="optionOne">{question.optionOne.text}</label>
                
            </div>
                <div>
                <input id='optionTwo' type="radio" value="optionTwo"
                checked={this.state.optionTwo}  onChange ={ (e) =>(this.handleChange(e))} />
                <label htmlFor="optionTwo">{question.optionTwo.text}</label>                
            </div>
              <button onClick={this.handleSubmit} >Submit</button>
            
            </div>
          </div>   
        
        )
    }
}
function mapStateToProps (state){

  return {
    authedUser :state.authedUser,
    users :state.users,
    questions : state.questions,
  }
}
export default connect (mapStateToProps) (UnAnsweredPoll);