import React ,{Component} from 'react';


export default class Constructor extends Component
{
    constructor(props)
    {
        super(props)
        
            this.state={
                count:this.props.count,
                name:this.props.name,
                
            }
           this.stateHandling=this.stateHandling.bind(this) 
        
    }

    updateCounter=()=>
    {
        this.setState((state)=>(
        {
            count:state.count+1,
            name:state.name+""+"shivani",
        }
        )
        )
    }

    stateHandling()
    {
        this.updateCounter()
    }


    render()
    {
        
        return(
<div align="center">
                <h2>Counter</h2>
                <button onClick={this.stateHandling}>Click me </button>
                <h2>{this.state.count}</h2>
                <h2>{this.state.name}</h2>
        
        <h2></h2>
            </div>

        )
    }
}