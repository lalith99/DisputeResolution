import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';
import './App.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        console.log(error);
        
      })
  }
  render() {
    return (
       <div className="col-md-6">
       <form>
      <div class="field">
       <label for="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       
      </div>
       <div class="field">
      <label for="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
     <div className = 'login'> <button style= {{textAlign:"center"}} type="submit" onClick={this.login} class = 'login'>Login</button> </div>
     <div className = 'signup'> <button  onClick={this.signup} class= 'signup' >Signup</button> </div>
 </form>
 
 </div>
    );
  }
}
export default Login;