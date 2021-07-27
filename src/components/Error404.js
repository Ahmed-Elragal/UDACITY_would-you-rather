import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Error404 extends Component {
    render() {
        
        return (
            <div>
                <h3 >Error 404 Page you requested can't be found :</h3>
                <p>url : {this.props.from}</p>
                <br/> <br/>
                <img alt='Error 404 Page not Found' src='/404.jpg' height='400px' width='400px'/>
                
            </div>
        )
    }
}
export default withRouter(Error404)