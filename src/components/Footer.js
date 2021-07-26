import React, { Component } from 'react'

 class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
             
              <div className='footer-section'>
                 <h2 className='color-second'>my links</h2>
                 <div>
                  <a href='github.com/Ahmed-Elragal/'>My GitHub</a>
                  <a href='https://www.linkedin.com/in/ahmed-fawzy-elragal/'>My LinkedIn</a>
                  <a href='https://www.guru.com/freelancers/ahmed-fawzy-elragal'>My Guru</a>
                </div>
              </div>
               <div className='footer-section'> 
                  <h2 className='color-second'>resources</h2> 
                   <div >
                      <a href='http://www.udacity.com'>UDACITY</a>
                      <a href='https://reactjs.org'>React js</a>
                      <a href='https://redux.js.org'>Redux js </a>
                  </div>
                </div> 
               
              
           
          </footer>
        )
    }
}
export default Footer