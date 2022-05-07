import './Signin.css';
 import profile from "../Images/login1.jpg";
 import email from "../Images/login2.jpg";
 import pass from "../Images/login3.jpg";

function Signin() {
  return (
    
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile}  alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1 style={{fontFamily:"sans-serif"}}>Login</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <p style={{fontFamily:"monospace",fontSize:"20px"}}><a href="#">Forgotpassword </a></p><p style={{fontFamily:"monospace",fontSize:"20px"}}><a href="#">SignUp</a></p>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Signin;