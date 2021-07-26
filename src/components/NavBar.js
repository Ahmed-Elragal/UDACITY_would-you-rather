  import React, { Component } from 'react'
  import {Link }from 'react-router-dom'
  import {connect} from 'react-redux'

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
                      <div className="nav navbar-dark bg-dark  justify-content-end col-md align-top menu-container" >
                      

                      <Link className="nav-link active"  to="/home" onClick={this.toggleActive}>Home</Link>
                      <Link className="nav-link" to="/add"  onClick={this.toggleActive}>New Poll</Link>
                      
                      <Link className="nav-link" to="/leaderboard"  onClick={this.toggleActive}>leaderboard</Link>
                      <span><img alt='avatar' className='profile-avatar' src={`/avatars/${this.props.user}.jpg `}/></span>
                      <span>{this.props.users !=='' ? this.props.state.users[this.props.user].name :'USER NAME'}</span>
                      <span><Link to='/login' onClick={this.props.onLogOut}  >Logout</Link></span>
                      
                    </div>
                  </div>
              </header>
          )
      }
  }
  function mapStateToProps (state){
    // console.log( 'store.users',state);
    return {
      authedUser :state.authedUser,
      state 
    }
  }
  export default connect (mapStateToProps)( NavBar)