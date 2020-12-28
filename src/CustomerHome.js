import React ,{Component} from 'react';
import {Redirect,Link} from 'react-router-dom';
import CustomerList from './CustomerList';

export default class CustomerHome extends Component
{
    constructor(props)
    {
        super(props)
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token==null)
        {
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    }


    render()
    {
        if(this.state.loggedIn===false)
        {
            return<Redirect to='/home'></Redirect>
        }
        return(
            <div>
                <h1>this is a home page</h1>
                <Link to='/logout' style={{float:'right',marginRight:'40px'}}><h2>Logout </h2></Link>
                <Link to='/list' style={{textDecoration:'underline'}}>
                    <h2>Customer List</h2>
                </Link>
            </div>
        )
    }
}