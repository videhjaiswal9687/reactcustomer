import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button} from 'react-bootstrap';
import { Redirect, Link} from 'react-router-dom';

export default class CustomerRegistration extends Component
{


    constructor(props) {
        super(props)
    
        this.initialState = {
            name:"",
            gender:"",
            balance:"",
            account_no:"",
            accounttype:"",
            email:"",
            password:""
            
          }
          this.state = this.initialState;
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }


handleChange(event)
{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        //computed property syntax
        [name]:value
    })


}

handleSubmit(event)
{

    event.preventDefault()
    console.log(this.state)
    let cus = {
        name:this.state.name,
        gender:this.state.gender,
        balance:this.state.balance,
        account_no:this.state.account_no,
        accounttype:this.state.accounttype,
        email:this.state.email,
        password:this.state.password
    }
    axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/register",cus).then(response =>
    {
        console.log(response)
    })  

}

render()
{
    return(
        <div>
        <h2 style={{color:'red'}}>Customer Registration</h2>
        <form align="center" onSubmit={this.handleSubmit}>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Customer Name:</th>
                        <td>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Customer gender:</th>
                        <td>
                            <input type="radio" name="gender" value="male" onChange={this.handleChange} />male
                            <input type="radio" name="gender" value="female" onChange={this.handleChange} />female
                        </td>
                    </tr>
                    <tr>
                        <th>Customer balance:</th>
                        <td>
                            <input type="number" name="balance" value={this.state.balance} onChange={this.handleChange} placeholder="balnce"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Customer Account_no:</th>
                        <td>
                            <input type="number" name="account_no" value={this.state.account_no} onChange={this.handleChange} placeholder="Email"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Customer Accounttype:</th>
                        <td>
                            <input type="text" name="accounttype" value={this.state.accounttype} onChange={this.handleChange} placeholder="Password"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Customer Email:</th>
                        <td>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Password"/>
                        </td>
                    </tr>
                    
                    <tr>
                        <th>Customer Password:</th>
                        <td>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                        </td>
                        
                    </tr> 
                    <tr>   
                        <td></td>
                        <td>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </td>
                    </tr>
                </thead>
            </Table> 
        </form>
        <Link to='/login'>Login</Link>
    </div>
    )
}


}