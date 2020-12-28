import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button} from 'react-bootstrap';


export default class Postrequest extends Component{

    constructor(props)
    {
    super(props)
    this.intialState={
        name:"",
        id:"",
        salary:"",
        email:"",
        password:""

    }
    this.state=this.intialState;
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
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
let emp={
    name:this.state.name,
    id:this.state.id,
    salary:this.state.salary,
    email:this.state.email,
    password:this.state.password


}

axios.post("http://localhost:8081/EmployeeRecord/Register",emp).then(response=>
{
    console.log(response)
}
)
}


render()
{
    return(
        <div>
             <h2 style={{color:'red'}}>Employee Registration</h2> 
            <form onSubmit={this.handleSubmit}>
                <Table responsive>
                       <thead>
                           <tr>
                               <th>Employee Name</th>
                               <td>
                                   <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name"/>
                               </td>
                           </tr>
                           <tr>
                               <th>Employee Id</th>
                               <td>
                                   <input type="number" name="id" value={this.state.id} onChange={this.handleChange} placeholder="id"/>
                               </td>
                           </tr>
                           <tr>
                               <th>Employee salary</th>
                               <td>
                                   <input type="number" name="salary" value={this.state.salary}onChange={this.handleChange} placeholder="salary"/>
                               </td>
                           </tr>
                           <tr>
                               <th>Employee Email</th>
                               <td>
                                   <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"/>
                               </td>
                           </tr>
                           <tr>
                               <th>Employee Password</th>
                               <td>
                                   <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
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
        </div>
    )
}

}
