import React, { Component } from 'react'
import {Link }from 'react-router-dom'

class NavBar extends Component {
    //handleLogOut (){}
    toggleActive =(e)=>{
      const links = document.getElementsByTagName('a')
      // var s ='' //for testing only

      for (let i = 0; i < links.length; i++) {       
        links[i].classList.remove('active');  
        // s+= `[${i}] {${links[i].outerHTML}} class ${links[i].classList.remove('active')} \n `      
      }
      e.target.classList.add('active')
      // console.log(s)
    }
    render() {
        return (
            <div className='navbar-container '>
            {/* <div className='logo'>
              
            </div> */}

            {/* <h1>Would you rather</h1> */}
            <div className='nav row logo '>
              <img alt='avatar' className='navbar-brand logo-img' src='logo.jpg'/>
              {/* <div className='menu-container'> */}
                  <div className="nav nav-pills justify-content-end col-md align-top menu-container" >
                  

                  <Link className="nav-link active"  to="/home" onClick={this.toggleActive}>Home</Link>
                  <Link className="nav-link" to="/new"  onClick={this.toggleActive}>New Poll</Link>
                  {/* <a className="nav-link"className="nav-link" href="#new">New Poll</a> */}
                  <Link className="nav-link" to="/leaderboard"  onClick={this.toggleActive}>leaderboard</Link>
                  <span><img alt='avatar' className='profile-avatar' src={`/avatars/${this.props.user}.jpg `}/></span>
                  <span>{this.props.user !=='' ? this.props.user :'USER NAME'}</span>
                  <span><Link to='/login' onClick={this.props.onLogOut}  >Logout</Link></span>
                  
                </div>
              </div>

            {/* </div> */}

          </div>
        )
    }
}
export default NavBar