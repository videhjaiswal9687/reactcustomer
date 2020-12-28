import React ,{Component} from 'react';

export default class Eventhandling extends Component{
    constructor(props)
    {
        super(props)

        this.state={
            isShow:true
        }

    }
   
showHideContent=(name,rollno)=>
(
    this.setState((state)=>(
        {
        isShow:!state.isShow
        }
    )),
    console.log(name,rollno)
)

render()
{
    return(
       <div>
           <hr></hr>
           <button onClick={()=>this.showHideContent("shivi",102)}>{this.state.isShow?'hide':'show'}</button>
           
       
       {this.state.isShow &&
        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>}
        <hr></hr>
        </div>
    )

}

}