import React, { Component } from 'react'

 class Poll extends Component {
      
     gotoPoll = (id,answered) =>{
            alert (id +'\n'+answered)
          
     }
     convrtDate =(timestamp) =>{
         
         const dt = new Date(timestamp)
         return dt.toLocaleString()
     }
    render() {
        const {id,question,users,isAnswered} = this.props
        console.log(`poll : id:${id} `,question);
        return (
            <div className='question-details'>
                
            {/* <div className='question-user'> */}
              <img alt='avatar' className='avatar' src={ `avatars/${question.author}.jpg`}/>
              <div className='question-details-data' >
                <div>
                   <p> { users[question.author].name} </p> 
                   <p> {this.convrtDate(question.timestamp )}</p>
                   
                </div>                         
              <h5>Asks Would you rather :  </h5>
              <div>{question.optionOne.text}</div>
              <div>{question.optionTwo.text}</div>
              <a onClick={ () => this.gotoPoll(id,isAnswered) } >view question</a>
            </div>
          </div>   
        )
    }
}
export default Poll