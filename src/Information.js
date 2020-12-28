import React, {Component} from 'react';

export default class Information extends Component
{
    render()
    {
        return(
            <div>
                <hr></hr>
                <h3>Id:{this.props.information.id}</h3>
                <h3>Name:{this.props.information.name}</h3>
                <h3>Username:{this.props.information.username}</h3>
                <h3>Email:{this.props.information.email}</h3>
                 <Address address={this.props.information.address}/>
                 <Geo geo={this.props.information.geo}/>
            </div>
        )
    }
}

function Address(props)
{
    return(
        <div>
            <h3>Street:{props.address.street}</h3>
            <h3>Suite:{props.address.suite}</h3>
            <h3>City:{props.address.city}</h3>
            <h3>Zipcode:{props.address.zipcode}</h3>
        </div>
    )
}

function Geo(props)
{
    return(
        <div>
            <h3>Lat:{props.geo.lat}</h3>
            <h3>lng:{props.geo.lng}</h3>
        </div>
    )
}