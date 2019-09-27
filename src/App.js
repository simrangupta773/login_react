import React from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  constructor(prop){
    super(prop)
    this.state = { count : 1 };
    this.state = {
      fullname:''
    }
  }
  
  handleInputChange(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]:event.target.value
    }) 
  }
 
  handleSubmit(event) {
    alert("kdljs");
    event.preventDefault();
    
  }
  render() {
    const {fullname} = this.state
    return (
      <div>
        <h1>Forms and Input</h1>
        <p>Full Name is : {fullname}</p>
        <form onSubmit = {this.handleSubmit}>
            First name:<br/>
            <input type="text" placeholder = "Your name" value={fullname} name ="fullname" onChange={this.handleInputChange}/>
            <p><button>Send Message</button></p>
        </form>
      </div>
    );
  }
}
