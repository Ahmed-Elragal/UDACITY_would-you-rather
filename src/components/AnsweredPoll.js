import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {convertDate} from '../utils/api'

 class AnsweredPoll extends Component {
    render() {
      const {id,questions,users,authedUser} = this.props
      const question = questions[id]

      const votesOne = question.optionOne.votes.length
      const votesTwo = question.optionTwo.votes.length

      const totalVotes = question.optionOne.votes.length+
                          question.optionTwo.votes.length//votesOne /totalVotes )*100
      const PercentageOne =  (Math.round( (votesOne /totalVotes )*100 * 100) / 100).toFixed(2)
      const PercentageTwo =  (Math.round((votesTwo /totalVotes )*100 * 100) / 100).toFixed(2)
      
      
      const userVote = users[authedUser].answers[id]  
                        
      if(!id){
        // console.log('invalid id : ' +id)
        return (
          <div>inveld id
            <Redirect   to ={`/404/questions/${id}`}/>
          </div>
        )
      }
      // console.log('answered ' + id);     
      
        return (    
            <div className='question-details'>
            {/* <div className='question-user'> */}
            <img alt='avatar' className='avatar' src={ `../avatars/${question.author}.jpg`}/>
              <div className='question-details-data bg-color-blue-black' >               
                <div>
                   <p className='user-name'> { users[question.author].name} </p> 
                   <p> {convertDate(question.timestamp )}</p>
                   
                </div>                         
              <h5>Asks Would you rather :  </h5>
              <div className='option-details'> 
                              
                <p >{question.optionOne.text}
                {userVote === 'optionOne'&&( <span> ( your select) <img width='30px' height='30px' src={`../icons/vote.png`} alt='your select' /> </span> )} </p>
              <p> {`${votesOne} users select  of  ${totalVotes} users (${PercentageOne} %)` } </p>
                
            </div>
                <div className='option-details'>
                 
                <p >{question.optionTwo.text}  
                {userVote === 'optionTwo'&&( <span> ( your select) <img width='30px' height='30px' src={`../icons/vote.png`} alt='your select'/> </span> )} </p>
                <p> {`${votesTwo} users vote  of  ${totalVotes} users (${PercentageTwo} %)`} </p>
            </div>
              
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
export default connect (mapStateToProps) (AnsweredPoll)