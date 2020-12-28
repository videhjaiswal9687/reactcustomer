import React ,{Component} from 'react';

export default class Employee extends Component
{
    render()
    {
        return(
            <div>
                <hr></hr>
                <h1>Employee Information</h1>
                
                <h1>Name:{this.props.employee.name}</h1>
                <h1>EmpId={this.props.employee.empid}</h1>
                <h1> salary={this.props.employee.salary}</h1>
                <h1> departement={this.props.employee.departement}</h1>
            </div>
        )
    }
}
 
  