import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import JSXDemo from './JSXDemo';
import Student from './Student';
import Employee from './Employee';
import Information from './Information';
import Constructor from './Constructor';
import Product from './Product';
import Product2 from './Product2';
import Contact from './Contact';
import { Component } from 'react';
import Eventhandling from './Eventhandling';
import Routing from './Routing';
import Bootstrap from './Bootstrap';
import Userdetial from './Userdetial';
import Post from './Post';
import Postrequest from './Postrequest';
import EmployeeRegister from './Postrequest';
import EmployeeList from './EmployeeList';
import Coustomer from './CustomerList';
import CustomerLogin from './CustomerLogin';
import CustomerLogout from './CustomerLogout';
import CustomerHome from './CustomerHome';
import { BrowserRouter as Router , Route, Link, Switch, Redirect} from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerRegistration from './CustomerRegistration';
import Update from './Update';
/*const studt1={
  name:"shivi patil",
  course:{
    name:'mba',
    duration:'4 year'
  },
  fee:'40000.o'

}
const studt2={
  name:"Deepti chouhan",
  course:{
    name:'BBA',
    duration:'4 year'
  },
  fee:'60000.o'

}
const emp={
  name:"kanhiya padithar",
  empid:"101",
  departement:"IT",
  salary:"32000.0"
}

const info={
  id:'1',
  name:"leann grahna",
  username:"bret",
  email:"sincare@april.bix",
  address:{
           street:"kulas light",
           suite:"apt.556",
           city:"indore",
           zipcode:"92998-3874",
          },
  
 geo:{
   lat:"-37.3159",
   lng:"81.1496"
 }
  

}*/

function App() {
  return (
    <div className="App">
     
    {/* <CustomerRegistration/>  */}
     {/*<Post/>*/}     
       {/* <EmployeeList
    />  */}
     {/* <Userdetial/>*/}
     {/*<EmployeeRegister/>*/}
     {/* <CustomerList/>
   */}
   <Router>
               <div>
                 <Switch>
                   <Route exact path='/home' component={CustomerHome}/>
                   <Route exact path='/logout' component={CustomerLogout}/>
                   <Route exact path='/login' component={CustomerLogin}/>
                   <Route exact path='/list' component={CustomerList}/>
                   <Route exact path='/register' component={CustomerRegistration}/>
                   <Route exact path='/Update' component={Update}/>
                 </Switch>
               </div>
               <CustomerLogin/>
   </Router>
         
    </div>
  
  );
}



export default App;










