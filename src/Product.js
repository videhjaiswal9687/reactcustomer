import React,{Component} from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productId:'',
             qty:0,
             isCart: true
        }  
    }



    componentDidMount()
    {
        console.log("shouldComponentUpdate!!!")
        
    }

    addToCart = (pid) => (
        this.setState((state) =>(
            {
                productId:pid, qty: state.qty + 1 
            }
        ))
    )

    removeCart=()=>(
        this.setState(
            {
                isCart:false
            }
        )
    )

    render()
    {
        return(
            <div>
                 <button onClick={()=> this.addToCart(1)}>addToCart 1</button>
                <button onClick={() => this.addToCart(2)}>addToCart 2</button>
                <button onClick={() => this.addToCart(3)}>addToCart 3</button><br></br>
                {this.state.isCart && 
                <Cart productId={this.state.productId} qty={this.state.qty}/>}
                {! this.state.isCart && <h2>Card has been removed</h2>}
                <button onClick={this.removeCart}>Remove Cart</button>
            </div>
        )
    }
}
class Cart extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            productId:this.props.productId,
            qty:this.props.qty
        }
    }

    componentDidMount()
    {
        console.log("componentDidMount called !!!!")
    }

    static getDrivedStateFromProps(props,state)
    {
        if(props.qty!==state.qty)
        {
            console.log("getDerivedStateFromProps")
            return {qty: props.qty};
        }
        return null
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        if(this.props.qty!==nextProps.qty)
        {
            console.log("shouldComponentUpdate!!!")
            return true
        }
        return false
    }

    componentWillUnmount()
    {
        console.log("ComponentUnamount!!!")
        return true
    }
    render()
    {
        console.log("render method called!!!")
        return(
            <div>

                Carts Item:-{this.state.qty}
            </div>
        )
    }

}