import React, { Component } from 'react'
import {Link }from 'react-router-dom'

class NavBar extends Component {
    
    toggleActive =(e)=>{
      const links = document.getElementsByTagName('a')
      

      for (let i = 0; i < links.length; i++) {       
        links[i].classList.remove('active');            
      }
      e.target.classList.add('active')    
    }
    render() {
        return (
            <header className='navbar-container header'>
           
              <div className='nav row logo '>
                <img alt='avatar' className='navbar-brand logo-img' src='logo.jpg'/>
                {/* <div className='menu-container'> */}
                    <div className="nav nav-pills justify-content-end col-md align-top menu-container" >
                    

                    <Link className="nav-link active"  to="/home" onClick={this.toggleActive}>Home</Link>
                    <Link className="nav-link" to="/add"  onClick={this.toggleActive}>New Poll</Link>
                    
                    <Link className="nav-link" to="/leaderboard"  onClick={this.toggleActive}>leaderboard</Link>
                    <span><img alt='avatar' className='profile-avatar' src={`/avatars/${this.props.user}.jpg `}/></span>
                    <span>{this.props.user !=='' ? this.props.user :'USER NAME'}</span>
                    <span><Link to='/login' onClick={this.props.onLogOut}  >Logout</Link></span>
                    
                  </div>
                </div>
             </header>
        )
    }
}
export default NavBar