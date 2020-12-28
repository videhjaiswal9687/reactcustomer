import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



/*function Student(props)
{
  return(
    <div>
      <h1>Student Nmae:{props.name}</h1>
      <h1>student age:{props.age}</h1>
      <h1>Student Course:{props.course}</h1>
    </div>
  )
}

class Teacher extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>techer name:{this.props.name}</h1>
        <h1>Teacher Qualiffication:{this.props.qly}</h1>
        <hr>
        </hr>
        <Student name="rahul" age="21" course="ba"/>
      </div>
    )
  }
}
const element=<Teacher name="shivani"  qly="MBA"/>
ReactDOM.render(element,document.getElementById('root'));*/
/*const myElem=(
  <table style={{ backgroundColor:"red"}}>
    <tr>
      <th>Sudent Name</th>
      <th>Student id</th>
      <th>fees</th>
      <th>Course</th>
      </tr>
      <tr>
        <td>
          Deepti
        </td>
        <td>12432</td>
        <td>45000</td>
        <td>MBA</td>
      </tr>
      
  </table>
)
ReactDOM.render(myElem,document.getElementById('root'));*/

ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
