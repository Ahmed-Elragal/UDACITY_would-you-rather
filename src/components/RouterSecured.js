import React , { Component }  from 'react'
import { Route, Redirect } from  "react-router-dom";

class  RouterSecured extends Component {
    render() {
        const {condition,isExact,falsePath} = this.props
        //console.log('routerSecured Props : path ',this.props.path );
        if(condition === true){
            
            return (
                
                <Route  path={this.props.path} exact ={isExact} render={() => this.props.component } />
            )
        }
        else{
            
            //console.log(`false :[path] ${this.props.path } [compo] ${this.props.component.type.name}` );
            return (
                <Redirect  to={falsePath}  />
            )
        }      
    }
}

export default RouterSecured;
/* 
import  React from  "react";


const  RouterSecured: React.FC<{
        component: React.FC;
        path: string;
        exact: boolean;
    }> = (props) => {

    const condition = performValidationHere();

    return  condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
        (<Redirect  to="/page/login"  />);
};
export  default  RouterSecured; */