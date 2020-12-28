import React, { Component } from 'react'
import axios from 'axios';
import { Button , Table } from 'react-bootstrap';
import { Redirect, Link} from 'react-router-dom';

export default class CustomerLogin extends Component
{
    constructor(props) {
        super(props)
    
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token==null)
        {
            loggedIn=false
        }
        this.initialState = {
            email:"",
            password:"",
            loggedIn
        }
        this.state = this.initialState;
        this.onhandleChange = this.onhandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onhandleChange(event)
    {
       const name = event.target.name;
       const value = event.target.value;
       this.setState({
           //computed property syntax
           [name]:value
       })
    }

    handleSubmit(e)
    {
      e.preventDefault()
      const {email,password}=this.state;
      console.log(this.state)
      let user = {
          email:this.state.email,
          password:this.state.password
      }
      axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login",user).then(response =>{
          console.log(response)
           console.log(response.data.data)  
         let dict=response.data.data

         //const ID = dict["Id"]
         //localStorage.setItem("Id",ID)

          if(email===this.state.email && password===this.state.password)
          {
              localStorage.setItem("token","logincheck")
              this.setState({
                  loggedIn:true
              })
          }
      })
    }

   

    render()
    {
        if(this.state.loggedIn)
        {
            return<Redirect to='/home'></Redirect>
        }
        return(
            <div>
            <h2><marquee style={{color:'red'}}>Customer Login</marquee></h2>
            <form onSubmit={this.handleSubmit}>
            <Table responsive >
              <thead>
                  <tr>
                      <th>Email:</th>
                      <td>
                          <div>
                              <input type="text" name="email" value={this.state.email} onChange={this.onhandleChange} placeholder="Name" />
                          </div>
                      </td>
                  </tr>
                  <tr>
                      <th>Password:</th>
                      <td>
                          <div>
                              <input type="password" name="password" value={this.state.password} onChange={this.onhandleChange} placeholder="password" />
                          </div>
                      </td>
                  </tr>
                  <tr>
                      <td></td>
                      <td>
                          <Button variant="secondary" type="Submit">
                              Login
                          </Button>
                      </td>
                  </tr>
              </thead>
            </Table>
            
            </form>
            <Link to='/register'>Register</Link>
        </div>
        )
    }

}