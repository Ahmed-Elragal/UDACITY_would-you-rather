import React, { Component, Fragment } from 'react'
import { Switch, withRouter } from  "react-router-dom";
import {connect} from 'react-redux'
import '../App.css';
import {handleInitialData} from '../redux/actions/shared'
import NavBar from './NavBar';
import Footer from './Footer'
import Login from './Login';
import DashBoard from './DashBoard';
import RouterSecured from './RouterSecured'
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard'
import {setAuthedUser} from '../redux/actions/authedUser'
import {showLoading,hideLoading, LoadingBar} from 'react-redux-loading-bar'
import PollSwitcher from './PollSwitcher';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(showLoading())
    this.props.dispatch( handleInitialData())
    .then (() => {
      this.props.dispatch(hideLoading())
    })
    
    
  }
  state = {
    loginedUser :'',
  }

  handleChangeUser =async (user) =>{    
    const {dispatch,authedUser} = this.props
    dispatch(showLoading())
    
    await dispatch(setAuthedUser(user))
     alert(`welcome ${user} logined to ${authedUser}`)
      dispatch(hideLoading())
      this.props.history.push('/home')
  }
  logout = () =>{
    const {dispatch,authedUser} = this.props
    dispatch(setAuthedUser(''))
    this.props.history.push('/login')
    alert('you have been logged out , please login again \n Current user :'+authedUser)
  }
  render() {
    const {users} = this.props.state
    // console.log(`APP > [${users[authedUser].name}] users` ,users)
    return (
        <div className="App dark-red-gradiant full-height"  >
          <LoadingBar  style={{ backgroundColor: 'yellow', height: '10px' }} />
         
         
          <RouterSecured condition = {(this.props.authedUser === ''  || this.props.authedUser ===null )} 
          path={'/login'}component={<Login change ={ this.handleChangeUser} />}
          isExact={true} falsePath ={'/login'} />
           
            <div className='main-container'>
             
                  <RouterSecured condition ={ this.props.authedUser !==''} path={'/'}
                  component={<NavBar user={this.props.authedUser} userName ={this.props.authedUser} onLogOut= {this.logout}/>}
                  isExact={false}falsePath ={'/login'} />
                
                  <div className='body-container centered'  >
                      
                        <h1> Would You Rather ?</h1> 
                    <Fragment>
                      <Switch>
                        <RouterSecured condition ={ this.props.authedUser !==''} path={'/home'}
                        component={<DashBoard user={this.props.authedUser}/>}
                        isExact={true} falsePath ={'/login'} />

                        <RouterSecured condition ={ this.props.authedUser !==''} path={'/quesion/'}
                        component={<PollSwitcher user={this.props.authedUser}/>}
                        isExact={false} falsePath ={'/login'} />

                        <RouterSecured condition ={ this.props.authedUser!==''} path={'/add'}
                        component={<NewPoll />}
                        isExact={true}falsePath ={'/login'} />
                        
                        <RouterSecured condition ={ this.props.authedUser!==''} path={'/leaderboard'}
                        component={<LeaderBoard />}
                        isExact={true}falsePath ={'/login'} />

                      </Switch>     
                   </Fragment>
                  </div>
                  <RouterSecured condition ={this.props.authedUser !==''} path={'/'}
                component={<Footer />}
                isExact={false}falsePath ={'/login'} />               
            </div>            
          </div>
    );
    
  }
}
function mapStateToProps (state){
  // console.log( 'store.users',state);
  return {
    authedUser :state.authedUser,
    state
  }
}
export default connect (mapStateToProps)(withRouter(App));
