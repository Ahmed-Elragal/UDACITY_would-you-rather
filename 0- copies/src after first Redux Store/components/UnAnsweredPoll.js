import React, { Component } from 'react'

 class UnAnsweredPoll extends Component {
    render() {
        return (
            <div className='question-details'>
            {/* <div className='question-user'> */}
              <img alt='avatar' className='avatar' src='logo192.png'/>
              <div className='question-details-data' >
                <div>user name</div>                         
              <h5>Asks Would you rather </h5>
            <div>
                <input id='optionOne' type="radio" value="optionOne" />
                <label for="optionOne">option one</label>
                
            </div>
                <div>
                <input id='optionOne' type="radio" value="optionOne" />
                <label for="optionOne">option one</label>                
            </div>
              <button>view question</button>
            </div>
          </div>   
        
        )
    }
}
export default UnAnsweredPoll