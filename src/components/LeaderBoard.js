import React, { Component } from 'react'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                <ul className='questions-list'>
                      <li>
                        <div className='user-details'>
                          {/* <div className='question-user'> */}
                          
                            <img alt='avatar' className='avatar' src='avatars/sarahedo.jpg'/>
                            
                            
                            <div className='user-details-data' >
                            
                              <div>sarahedo</div>                         
                            <h5>statics</h5>
                            <div>Ansewered Questions : 3</div>
                            <div>Asked Questions : 6 </div> 
                            </div>
                            <div className='score'> score:<br/> 9 </div>
                         
                        </div>                  
                      </li>

                      <li>
                        <div className='user-details'>
                          {/* <div className='question-user'> */}
                          
                            <img alt='avatar' className='avatar' src='avatars/johndoe.jpg'/>
                            
                            
                            <div className='user-details-data' >
                            
                              <div>johndoe</div>                         
                            <h5>statics</h5>
                            <div>Ansewered Questions : 3</div>
                            <div>Asked Questions : 4 </div> 
                            </div>
                            <div className='score'> score:<br/> 6 </div>
                         
                        </div>                  
                      </li>
                    </ul>                
            </div>
        )
    }
}
export default LeaderBoard