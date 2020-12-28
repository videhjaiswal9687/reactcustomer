import React from 'react';
import { BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom';
import Contact  from './Contact';

function Routing() 
{
    return(
        <div>
            <Router>
                <div>
                    <Header/>
                    <hr></hr>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route  path='/service' component={Service}></Route>
                        <Route path='/contact' component={Contact}></Route>
                        <Route  path='/about' component={About}></Route> 
                        <Route path='/user' component={User}></Route>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

function User({match})
{
    console.log(match)
    return(
        <div>
            <ul>
                <li>
                    <Link to={`${match.url}/1`}>Shivani Patil</Link>
                </li>
                <li>
                    <Link to={`${match.url}/2`}>sourabh Patil</Link>
                </li>
                <Switch>
                    <Route path={`${match.path}/:id`} component={Users}/>
                </Switch>
            </ul>
        </div>
    )
}

function Users({match})
{
    return(
        <div>
            <h1>user detials</h1>
             <p>User Id:{match.params.id}</p>
    
        </div>
    )
}
function About()
{
    return(
        <div>
            <h1>about</h1>
        </div>

    )
}
function Home()
{
    return(
        <div>
            <h1>Home page</h1>
            <p>this is home page</p>
        </div>
    )
}

function Service()
{
    return(
        <div>
            <h1>Service page</h1>
            <p>this is service</p>
        </div>
    )
}

function NoMatch()
{
    return(
        <div>
          <h1>Error 404</h1> 
          <p>OOPS! Page is not found</p> 
        </div>

    )
}

function Header()
{
    return(
        <div>

            <ul>
                <li>
                    <Link to='/'> Home</Link>
                </li>
                <li>
                    <Link to={{pathname:'/service'}} >Service</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/user'>User</Link>
                </li>

            </ul>
        </div>

    )
}

export default Routing;