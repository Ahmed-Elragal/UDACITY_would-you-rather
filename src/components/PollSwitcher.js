import React, { Component } from 'react'
import { Redirect, withRouter  } from 'react-router'
import {connect } from 'react-redux'
import {isQuestion,isQuestionAnswered} from '../utils/api'

import AnsweredPoll from './AnsweredPoll'
import UnAnsweredPoll from './UnAnsweredPoll'

 class PollSwitcher extends Component {
    
        // constructor(props){
        //     super(props);
    
        //     this.state = {
        //         id : this.props.match.params.id
        //     }
        // }
    render() {
        const qid= new URLSearchParams(this.props.location.search).get("id")
         //this.props.location.search
        const {authedUser} = this.props //,id,isAnswered,match//,question,users
        // const qid =  match.params.id
        // console.log(`PollSwitcher [${qid}] Answered  [${authedUser}]: ${isQuestionAnswered(authedUser,qid)}`);

        if(! isQuestion(qid))
        {
            return(
                <div>invalid {qid}
                    <Redirect from={`/question/id/${qid}`}  to ={`/404/${qid}`}/>
                </div>
            )
        
        }
       if(isQuestionAnswered(authedUser,qid) ){
        return (
            <div>answered
            <AnsweredPoll args={this.props} id={qid}/>
            </div>
            )
        } else{ 
            return (
                <div>Unanswered
            <UnAnsweredPoll args={this.props} id={qid}/> 
            </div>
            )
        }
      
    }
}

function mapStateToProps(state) {
    //const {qid} = props.match.params
    return {
        authedUser :state.authedUser
        
    }
}
export default connect(mapStateToProps)( withRouter (PollSwitcher))