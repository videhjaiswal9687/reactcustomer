import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Tab } from 'react-bootstrap';

export default class Post extends Component
{
    state={
        posts:[]
    }
    componentDidMount()
    {
        console.log("shivi patil")
        axios.get('http://jsonplaceholder.typicode.com/posts').then(response=>
        {
            console.log(response)
            this.setState(
                {
                    posts:response.data
                }
            )
            console.log(this.state.posts[0].id)
        }

        )
    }

    render()
    {
        return(
            <div>
                <h1>Post detials</h1>
                <Table border='1px solid black'>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>Id</th>
                            <th>title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post)=>
                        <tr>
                            <td>{post.userId}</td> 
                            <td>{post.id}</td> 
                            <td>{post.title}</td> 
                            <td>{post.body}</td> 
                        </tr>


                        )}
                    </tbody>
                </Table>
            </div>
        )
    }

}