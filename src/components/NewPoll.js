import React, { Component } from 'react'
import{withRouter}from 'react-router-dom'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../redux/actions/questions'


class NewPoll extends Component {
    state ={       
        tOptA :'',
        tOptB :'',
    }
    
    handleChange = (e) =>{
        const val = e.target.value
        // console.log(e.target.name,e.target.value);
        switch (e.target.name) {
            
            case 'txtOptionOne':
                    this.setState(() => ({
                        tOptA : val
                    }))
            break;
            case 'txtOptionTwo':
                    this.setState(() => ({
                        tOptB : val
                    }))
            break;
            default:
                break;
        }
    }
handleSubmit =() =>{
    
    const {tOptA ,tOptB }= this.state
    
    // console.log(tOptA,tOptB);
    

    if (tOptA === '' || tOptB ==='') {
        alert ('please Fill Option 1 and option 2')
        tOptA === ''  
            ? document.getElementsByName('txtOptionOne')[0].focus()
            : document.getElementsByName('txtOptionTwo')[0].focus()
        return
    }

    if (tOptA === tOptB) {
        alert('the 2 answers had to be diffrent')
        return
    }

    const {authedUser,dispatch} = this.props
    // console.log(`newPoll : `,tOptA,tOptB,authedUser);

    dispatch (handleAddQuestion({optionOneText : tOptA,optionTwoText : tOptB,author : authedUser}))

    
    
    
    alert(`new questions is Would you rather \n OptA : ${tOptA} \n OptB: ${tOptB} `)
     this.props.history.push('/home')
    
}

    render() {
        return (
        //     <div className='question-details'>  
            
        //       <img alt='avatar' className='avatar' src={ `avatars/${question.author}.jpg`}/>
        //       <div className='question-details-data' >
        //         <div>
        //            <p className='user-name'> { users[question.author].name} </p> 
        //            <p> {convertDate(question.timestamp )}</p>
                   
        //         </div>                         
        //       <h5>Asks Would you rather :  </h5>
        //       <div>{question.optionOne.text}</div>
        //       <div>{question.optionTwo.text}</div>
        //       <Link className='button' to ={`questions/${id}`}  onClick={ () => gotoPoll(id,isAnswered) } >view question</Link>
        //     </div>
        //   </div>   
            <div>
                <h3>Create New Question </h3>
                <div  className='new-question'>  
                <br />
                    <h4>Would You rather : </h4>
                   
                    <div className='new-question-details'>
                        <div  > 
                           
                            Option A <br />
                            <input className='input-option' type='text' name='txtOptionOne' value ={this.state.tOptA} onChange ={this.handleChange} />
                            <br />   <br />
                        </div>
                        <div>
                           
                            Option B <br />
                            <input className='input-option' type='text' name='txtOptionTwo' value ={this.state.tOptB} onChange ={this.handleChange} />
                            
                        </div>
                        <div>
                            <button onClick={this.handleSubmit} >Submit Question</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps (state){
    // console.log( 'DASHBOARD :map ',state);
    // console.log( 'store.questions',state.questions);
    return {
      authedUser :state.authedUser,
      users :state.users,
      questions : state.questions,
    }
  }
  export default connect (mapStateToProps) (withRouter( NewPoll))