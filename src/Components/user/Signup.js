import './CSSfiles/Signup.css';
 import profile from "../Images/login1.jpg";
 import email from "../Images/login2.jpg";
 import pass from "../Images/pass.jpg";
 import phone from "../Images/phone.jpg";
 import cpass from "../Images/cpass.jpg";

function Signup() {
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
           <h1 style={{fontFamily:"sans-serif"}}>Signup</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="Email" className="name"/>
           </div>
           <br></br>
           <div>
             <img src={phone} alt="phone" className="email"/>
             <input type="text" placeholder="Phonenumber" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
           <div className="second-input">
             <img src={cpass} alt="pass" className="email"/>
             <input type="password" placeholder="Confirmpassword" className="name"/>
           </div>
          <div className="login-button">
         <a href="/"><button>Register</button></a>
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

export default Signup;
