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
        //const qid= new URLSearchParams(this.props.location.search).get("id")
        
        const qid= this.props.location.pathname.replace("/questions/", "")
        // console.log( 'poll switcher:' , this.props.location.pathname.replace("/questions/", ""))
         //this.props.location.search
        const {authedUser} = this.props //,id,isAnswered,match//,question,users
        // const qid =  match.params.id
        // console.log(`PollSwitcher [${qid}] Answered  [${authedUser}]: ${isQuestionAnswered(authedUser,qid)}`);

        if(! isQuestion(qid))
        {
            return(
                <div>invalid {qid}
                    {/* {console.log(`POLLSWITCHER: not valid question[${qid}]`)} */}
                    <Redirect from={`/questions/${qid}`}  to ={`/404/questions/${qid}`}/>
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
    //const {qid} = this.props.match.params
    return {
        authedUser :state.authedUser
        
    }
}
const withRouterPollSwitcher = withRouter(PollSwitcher)
export default connect(mapStateToProps)(withRouterPollSwitcher)