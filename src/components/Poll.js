import React, { Component } from 'react'
import {Link } from  "react-router-dom"; //,Route, Redirect
/* import AnsweredPoll from './AnsweredPoll';
import RouterSecured from './RouterSecured'*/
import UnAnsweredPoll from './UnAnsweredPoll'; 
import AnsweredPoll from './AnsweredPoll'
import {convertDate} from '../utils/api'

 class Poll extends Component {
      

    render() {
        const {id,question,users,isAnswered} = this.props
        // console.log(`poll : id:${id} `,question);

        const gotoPoll = (id,answered) =>{
         
          if(isAnswered){
            // <Route path="/question/:id" component={Child}/>
            //  alert (id +'\n'+answered)
             return (
              <AnsweredPoll id={id} question={question} users={users} />
            )
          }
          else{
            // alert (id +'\n'+answered)
            return (
              <UnAnsweredPoll id={id} question={question} users={users} />
            )

          }
        
   }
        return (

          
            <div className='question-details'>  
            
            
                
            {/* <div className='question-user'> */}
            
              <img alt='avatar' className='avatar' src={ `avatars/${question.author}.jpg`}/>
              <div className='question-details-data' >
                <div>
                   <p className='user-name'> { users[question.author].name} </p> 
                   <p> {convertDate(question.timestamp )}</p>
                   
                </div>                         
              <h5>Asks Would you rather :  </h5>
              <div>{question.optionOne.text}</div>
              <div>{question.optionTwo.text}</div>
              <Link className='button' to ={`questions/${id}`}  onClick={ () => gotoPoll(id,isAnswered) } >view question</Link>
            </div>
          </div>   
        )
    }
}
export default Poll