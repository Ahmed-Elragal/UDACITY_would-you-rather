import React, { Component } from 'react'
import {connect} from 'react-redux'
import Poll from './Poll'
// import Login from './Login'


 class DashBoard extends Component {

 getAnsweredQuestions = (uid) =>{
    const {questions} = this.props  
    var  res = Object.values(questions).filter (qes=> (qes.optionOne.votes.includes(uid) || qes.optionTwo.votes.includes(uid) ))
    res.sort( (a,b) => b.timestamp - a.timestamp ) 
    return res;
 }

 getUnansweredQuestions = (uid) =>{
    const {questions} = this.props  
    const res = Object.values(questions).filter (qes=> (!qes.optionOne.votes.includes(uid) && !qes.optionTwo.votes.includes(uid) ) )
    res.sort( (a,b) => b.timestamp - a.timestamp ) 
    return res;

 }
 
    render() {
      // if (this.props.LoginUser === ''  || this.props.LoginUser ===null)
      // {
      //   return(
      //     <Login />
      //   )
      // }
      const {users} = this.props
      const answeredQuestions =this.getAnsweredQuestions(this.props.user)
      const unansweredQuestions =this.getUnansweredQuestions(this.props.user)
      console.log('getanswered questions ' ,answeredQuestions)
      console.log('UNanswered questions ' ,unansweredQuestions)
        return (
            <div className='scollable'>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#unanswered" type="button" role="tab" aria-controls="unanswered" aria-selected="true">UnAnswered Questions</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#answered" type="button" role="tab" aria-controls="answered" aria-selected="false">Answered Questions</button>
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                  </li> */}
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="unanswered" 
                    role="tabpanel" aria-labelledby="unanswered-tab">
                    <ul className='questions-list'>

                      {unansweredQuestions.map( (ques) => (
                        <li key ={ques.id} >
                          <Poll question = {ques} id={ques.id} users={users} isAnswered={false} />
                        </li>
                      ))}
                    </ul>
                 </div>
                  <div className="tab-pane fade" id="answered" role="tabpanel" aria-labelledby="answered-tab">
                  <ul className='questions-list'>
                  {answeredQuestions.map( (ques) => (
                        <li key ={ques.id} >
                          <Poll question = {ques} id={ques.id} users={users}  isAnswered={true}/>
                        </li>
                      ))}


                    </ul>



                  </div>
                  {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div> */}
                </div>        
   
            </div>
        )
    }
}
function mapStateToProps (state){
  // console.log( 'DASHBOARD :map ',state);
  // console.log( 'store.questions',state.questions);
  return {
  authedUser :state.authedUser.authedUser,
    users :state.users,
    questions : state.questions,
  }
}
export default connect (mapStateToProps) (DashBoard);