import React, { Component } from 'react'
import {connect} from 'react-redux'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
// import {Redirect} from 'react-router-dom'
import {convertDate} from '../utils/api'

 class UnAnsweredPoll extends Component {
  
  
    state ={
      optionOne : false,
      optionTwo :false,
      ansewer :'',
    } 
    handleChange = (e) =>{
      console.log('handleChange : Option \n ' , e.target.id);
      if (e.target.id === 'optionOne'){
        this.setState( () => ({
          optionOne : true,
          optionTwo : false,
          ansewer : 'optionOne'
        }))

      }
      else if(e.target.id === 'optionTwo'){
        this.setState( () => ({
          optionOne : false,
          optionTwo : true,
          ansewer : 'optionTwo'
        }))
      }
      console.log('options : ', this.state);
    }
   handleSubmit =(e)=>{
     e.preventDefault()
     const {id,authedUser,users,questions,dispatch} = this.props
     dispatch(showLoading() )
    //  await dispatch()




   }
    render() {
      // alert('unasnswered')
      const {id,questions,users,isAnswered} = this.props
      const question = questions[id]
      if(!id){
        console.log('invalid id : ' +id)
        return (
          <div>inveld id</div>
          // <Redirect from={`/question/id/${id}`}  to ={`/404/${id}`}/>
        )
      }
      console.log('unanswered ' + id);
      
      // const { qid } = useParams()
        return (    
          
          <div className='question-details'>  
            {/* {
            isAnswered ? 
            <RouterSecured condition = {this.props.authedUser === ''  || this.props.authedUser ===null} 
            path={`/question/id/${id}`}component={<AnsweredPoll id ={ id} />}
            isExact={true} falsePath ={'/login'} />
            :<RouterSecured condition = {this.props.authedUser === ''  || this.props.authedUser ===null} 
            path={`/question/id/${id}`}component={<UnAnsweredPoll id ={ id} />}
            isExact={true} falsePath ={'/login'} />
            
            } */}
            
                
            {/* <div className='question-user'> */}
            
              <img alt='avatar' className='avatar' src={ `../avatars/${question.author}.jpg`}/>
              <div className='question-details-data' >
                <div>
                   <p> { users[question.author].name} </p> 
                   <p> {convertDate(question.timestamp )}</p>
                   
                </div>                         
              <h5>Asks Would you rather :  </h5>
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
              <button  >Submit</button>
            
              
            </div>
          </div>   
        
        )
    }
}
function mapStateToProps (state,dispatch){
  // console.log( 'DASHBOARD :map ',state);
  // console.log( 'store.questions',state.questions);
  return {
  authedUser :state.authedUser.authedUser,
    users :state.users,
    questions : state.questions,
  }
}
export default connect (mapStateToProps) (UnAnsweredPoll);