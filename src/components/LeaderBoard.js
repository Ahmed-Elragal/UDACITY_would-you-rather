import React, { Component } from 'react'
import {connect} from 'react-redux'


class LeaderBoard extends Component {


  
  // constructor(props){
  //   super(props)
    
  // }
    render() {
      const {users} = this.props
    
      const usersByScore = Object.values (users).sort( (a,b) =>  (b.questions.length + Object.values(b.answers).length) -  (a.questions.length +Object.values(a.answers).length) )
        return (
            <div>
              
                <ul className='questions-list'>
                  {usersByScore.map ((user) => (
                    <li key ={user.id}>
                    <div className='user-details'>
                      {/* <div className='question-user'> */}
                      
                        <img alt='avatar' className='avatar' src={`avatars/${user.id}.jpg`}/>
                        
                        
                        <div className='user-details-data' >
                        
                          <div className='user-name'>{user.name}</div>                         
                        <h5>statics</h5>
                        <div>Ansewered Questions : {Object.values(user.answers).length}</div>
                        <div>Asked Questions :  {user.questions.length} </div> 
                        </div>
                        <div className='score'> score:<br/> {Object.values(user.answers).length + user.questions.length} </div>
                     
                    </div>                  
                  </li>
                  ))}
                      
                    </ul>                
            </div>
        )
    }
}
function mapStateToProps (state){
  
  return {
    authedUser :state.authedUser,
    users :state.users,
    //questions : state.questions,
  }
}
export default connect (mapStateToProps) (LeaderBoard)