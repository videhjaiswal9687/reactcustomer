import React, { Component } from 'react'

export default class Product2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productId:'',
             qty:0,
             isCart: true
        }
    }
    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount()
    {
        // console.log("Execute after componet render !!!")
    }

    addToCart = (pid) => (
        this.setState((state) =>(
            {
                productId:pid, qty: state.qty + 1 
            }
        ))
    )
    
    removeCart = () =>
    (
        this.setState(
            {
                isCart: false
            }
        )
    )

    render() {
        // console.log("Render method called !!!!")
        return (
            <div>
                <button onClick={() => this.addToCart(1)}>addToCart 1</button>
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
    constructor(props) {
        super(props)
        this.state = {
             productId: this.props.productId,
             qty: this.props.qty
        }
    }
    componentDidMount()
    {
        console.log("componentDidMount called !!!!")
    }
    //called automatically when changes found in props or state
    static getDerivedStateFromProps(props,state)
    {
        if(props.qty !== state.qty)
        {
            //console.log(props.qty,state.qty)
            console.log("getDerivedStateFromProps")
            return {qty: props.qty};
        }
        return null
    }
    //Called to determine whether the change in props and state should trigger a re-render.
    shouldComponentUpdate(nextProps, nextState)
    {
        if(this.props.qty !== nextProps.qty)
        {
           //console.log(this.props.qty, nextProps.qty)
           console.log("shouldComponentUpdate!!!")
           return true
        }  
        return false  
    }

    //Called immediately before a component  is destroyed
    componentWillUnmount()
    {
        console.log("shouldComponentUpdate!!!")
           return true
    }
    render()
    {
        console.log("render method called!!!")
        return(
            <div>
                Cart Items:- {this.state.qty}
            </div>
        )
    }
    
}