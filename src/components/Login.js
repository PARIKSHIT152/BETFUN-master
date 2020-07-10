import React, { Component } from 'react'
import { Link, Redirect} from "react-router-dom";
import axios from 'axios';
// import '../Login.css'


export default class Login extends Component {

    constructor(props){
            super(props);
            this.state = {
               userName : '' ,
               password : '',
               redirectToReferrer : false
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
  
  
  
        handleChange(event){
                this.setState({
                    [event.target.name] : event.target.value
  
                });
        }
        handleSubmit(event){
                event.preventDefault();
  
                const user = {
                userName : this.state.userName,
                password : this.state.password
                };
  
          if(this.state.userName && this.state.password)
            {
         axios.post(`http://localhost:4100/api/login`,user)
         .then((response) =>
            {
                // alert("invalid email or password");
              if(!response.data.success){
                this.setState({redirectToReferrer: false});
               return alert("invalid email or password");
  
              }
                let userresponse = response;
                console.log(response);
                if(userresponse){
                sessionStorage.setItem('data',JSON.stringify(userresponse));
                this.setState({redirectToReferrer: true});
                }
  
            },this)
            .catch((error) => alert(error))
  
        }
    }
  
  
  
  
      render() {
  
          if (this.state.redirectToReferrer){
  
            return (<Redirect to={'/blockmarket'}/>)
      }
        // if (sessionStorage.getItem('data')){
  
        //    return (<Redirect to={'/blockmarket'}/>)
        //   }
  
         return (
          <div>
              {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>wallpaper App</Link>
                <div className="collapse navbar-collapse" >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
  
   */}
              <form onSubmit={this.handleSubmit} >
                  <h3>Sign In</h3>
  
                  <div className="form-group">
                      <label>Email address</label>
                      <input type="text" name="userName" onChange={this.handleChange} className="form-control" placeholder="Enter email" required />
                  </div>
  
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Enter password" required />
                  </div>
  
                  <div className="form-group">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                  </div>
  
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                  <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                  </p>
              </form>
          </div>
          );
      }
  }
  










// const Login = () => {
//     return (

//         <div className="body">
//         <form class="form-login">
//                         <h1 class="h3 mb-3 font-weight-normal">Welcome To Login</h1>
//                         <label for="username" class="sr-only">Username</label>
//                         <input type="text" class="form-control mb-2" name="username" placeholder="Enter Username" /><br />


//                         <label for="password" class="sr-only">Password</label>
//                         <input type="password" class="form-control mb-2" name="password" placeholder="Enter Password" /><br />

//                         <button type="submit" class="btn btn-primary btn-block" name="submit">Login</button>
//                     </form>
//         </div>            
//     )
// }

// export default Login;