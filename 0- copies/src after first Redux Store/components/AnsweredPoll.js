import React, { Component } from 'react'

 class AnsweredPoll extends Component {
    render() {
        return (
            <div className='question-details'>
            {/* <div className='question-user'> */}
              <img alt='avatar' className='avatar' src='logo192.png'/>
              <div className='question-details-data' >
                <div>user name</div>                         
              <h5>Asks Would you rather : </h5>
              <div className='option-details your-vote'>option 1</div>
              <div className='option-details'>option 2</div>
              
            </div>
          </div>   
        )
        
    }
}
export default AnsweredPoll