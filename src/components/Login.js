import React, { Component } from 'react'
// import {connect } from 'react-redux'

 class Login extends Component {
     handleChange =(e) =>{
         
         if (e.target.value !== ''){
             this.props.change (e.target.value);
         }
     }
    render() {
        // alert('please login first')
        return (
            <div className='App dark-red-gradiant'>
                <div className='login-parent dark-red-gradiant position-absolute top-50 start-50 translate-middle'>
                {/* <form > */}
                        <h2  > Login Form</h2>
                        <span><label htmlFor="users"> Choose user:  </label></span>
                        <select name="users" id="user" value='none'  onChange={this.handleChange}>
                            <option value="none" disabled>Choose User</option>
                            <option value="sarahedo">Sarah Edo</option>
                            <option value="tylermcginnis">Tyler McGinnis</option>
                            <option value="johndoe">John Doe</option>
                            
                        </select>
                        
                        {/* <input type="submit" value="Submit" /> */}
                    {/* </form> */}
                                
                </div>
            </div>
        )
    }
}

export default (Login)