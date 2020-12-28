import React,{Component} from 'react';

export default class Student extends Component{
    render()
    {
        return(
            <div>
                <h1>Name:{this.props.student.name}</h1>
                <Course course={this.props.student.course}/>
                <Fee fee={this.props.student.fee}/>
            </div>
        )
    }
}

function Course(props)
{
    return(
        <div>
            <h3>Course:{props.course.name}</h3>
            
            <h3>duration:{props.course.duration}</h3>
        </div>
    )
}
 
const Fee=(props)=>
{
    return(
        <div>
            <h4>Fee:{props.fee}</h4>

        </div>
    )
}