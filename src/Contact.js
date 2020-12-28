import React,{Component} from  'react';

export default class Contact extends Component
{

      constructor(props)
      {
          super(props)
          this.initailState={
              name:"",
              email:"",
              city:"",
              message:"",
              gender:"",
            education:""
    
          }
           this.state=this.initailState;
          this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
      }

      handleChange(event)
      {
          const name=event.target.name;
          const value=event.target.value;
          this.setState(
              {
                  [name]:value
              }
          )
      }

     

      handleSubmit(event)
      {
        event.preventDefault();
        
        console.log(this.state);
       // this.setState(this.initailState);
      }


      render()
      {
          return(
              <div>
                  <h1>Contact Form</h1>
                  <form onSubmit={this.handleSubmit}>
                      <div>
                          Name:<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                      </div>
                     
                      <div>
                          Email:<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                      </div>
                      <div>
                          City:<select  name="city" value={this.state.message} onChange={this.handleChange}  >
                              <option value="">select city...</option>
                              <option  value="indore">indore</option>
                              <option value="puna">puna</option>
                              </select>
                      </div>
                      <div>
                          Message:<input type="message" name="message"  value={this.state.message} onChange={this.handleChange}  />
                      </div>
                      <div>
                         Gender:
                            <input type="radio" name="gender" value="male"  onChange={this.handleChange} />male
                            <input type="radio" name="gender" value="female" onChange={this.handleChange}/>female
                            <input type="radio" name="gender" value="other" onChange={this.handleChange}/>other
                         
                         </div>
                         
                       
                         
                      <div>
                        Education:
                        <input type="checkbox" name="education" value="graduation" onChange={this.handleChange} />Graduated
                        <input type="checkbox" name="education" value="postgraduation" onChange={this.handleChange} />postGraduated
                         

                      </div>
                      
                     

                      <div>
                          <button type="submit">Submit</button>
                      </div>

                  </form>
              </div>
          )
      }

}