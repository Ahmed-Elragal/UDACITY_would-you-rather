import React, { Component } from 'react'
import{withRouter}from 'react-router-dom'


class NewPoll extends Component {
    state ={
        tQuestion : '',
        tOptA :'',
        tOptB :'',
    }
    
    handleChange = (e) =>{
        const val = e.target.val
        switch (e.target.name) {
            case 'txtQuestion':
                this.setState(() => ({
                    tQuestion : val
                }))
                break;
            case 'txtOptA':
                    this.setState(() => ({
                        tOptA : val
                    }))
            break;
            case 'txtOptB':
                    this.setState(() => ({
                        tOptB : val
                    }))
            break;
            default:
                break;
        }
    }
handleSubmit =() =>{
    const tQuestion = this.state.tQuestion
    const tOptA = this.state.tOptA
    const tOptB = this.state.tOptB
    
    alert(`new questions is \n ${tQuestion} \n OptA : ${tOptA} \n OptB: ${tOptB} `)
    // this.props.history.push('/')
    
}

    render() {
        return (
            <div>
                <h2>Create New Question </h2>
                <div>                
                    Would You rather : 
                    <br />  <br />
                </div>
                <div>
                    {/* <label htmlFor='txtOptA'><pre> Option A  </pre></label> */}
                    Option A <br />
                    <input width={'100px'}  type='text' name='txtOptA' value ={this.state.tOptA} onChange ={this.handleChange} />
                    <br />   <br />
                </div>
                <div>
                    {/* <label htmlFor='txtOptB'>  Option B  </label>
                     */}
                      Option B <br />
                    <input width={'100px'} type='text' name='txtOptB' value ={this.state.tOptB} onChange ={this.handleChange} />
                    <br />  <br />
                </div>
                <div>
                    <button onClick={this.handleSubmit} >Submit Question</button>
                </div>
            </div>
        )
    }
}
export default withRouter( NewPoll)
