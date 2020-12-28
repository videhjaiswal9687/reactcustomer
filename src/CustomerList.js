import React, { Component } from 'react'
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Redirect, Link} from 'react-router-dom';


export default class CustomerList extends Component{


    constructor(props) {
        super(props)
    
        this.state = {
             cusList:[],
             getId:"",
             name:"",
             gender:"",
             account_no:"",
             balance:"",
             accounttype:"",
             email:""
        }
    }

    componentDidMount()
    {
       this.getCusList()
    }

    getCusList()
    {
        axios.get('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/').then(response=>
        {
            let list=response.data
            this.setState({
                cusList:list
            }) 
            console.log(this.state.cusList)
        }
        )
    }

    update = (getUser) => {
    
        this.setState((state)=>(
            {
                getId:getUser.id,
                name:getUser.name,
                gender:getUser.gender,
                account_no:getUser.account_no,
                balance:getUser.balance,
                accounttype:getUser.accounttype,
                email:getUser.email
            }
        ))
    }

    onDeleteEmpRecord(empID) {
        alert(empID);
        axios.delete('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/' + empID + '/', {
            empId: empID,
        }).then(response => {
            console.log("Data:", response);
           this.getCusList()
        })
            .catch(error => {
                console.log("Error:", error)
            })
    }
   
    onUpdateData(empID){
        alert(empID);
        
    }  
    

    render()
    {

        if(this.state.name !== "" && this.state.email !== "")
        {
          //  console.log(this.state.name);
            return <Redirect
            to={{
            pathname: "/Update",
            state: { 
                getId:this.state.getId,
                name: this.state.name ,
                gender:this.state.gender,
                account_no:this.state.account_no,
                balance:this.state.balance,
                accounttype:this.state.accounttype,
                email:this.state.email,
            }
          }}
        />
        }

        return(

            <div>
                <Table responsive border='1px solid black'>
                       <thead>
                           <tr>
                               <th colSpan='10 ' bgcolor='navyblue'><h1 align="center" style={{color:'white'}}>Customer List</h1></th>
                           </tr>
                           <tr>
                               <th>id</th>
                               <th>name</th>
                               <th>account_no</th>
                               <th>balance</th>
                               <th>accounttype</th>
                               <th>pub_date</th>
                               <th>email</th>
                               <th>password</th>
                               <th colSpan='2'> Action </th>
                           </tr>
                       </thead>
                       <tbody>
                           { 
                            this.state.cusList.map((cust) =>
                                <tr>
                                    <td>{cust.id}</td>
                                    <td>{cust.name}</td>
                                    <td>{cust.account_no}</td>
                                    <td>{cust.balance}</td>
                                    <td>{cust.accounttype}</td>
                                    <td>{cust.pub_date}</td>
                                    <td>{cust.email}</td>
                                    <td>{cust.password}</td>
                                    {<td><Button variant="danger"
                                    onClick={() => this.onDeleteEmpRecord(cust.id)}>Delete</Button></td>}
                                
                         {<td> <Button variant="info"
                               onClick={()=> this.update(cust)}>Update</Button></td>}
                                </tr>
                            )
                           }
                           
                       </tbody>
                </Table>
            </div>
        )
    }

}