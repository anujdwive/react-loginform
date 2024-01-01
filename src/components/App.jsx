import React, {useState} from "react";
import img1 from "./images/user.png";
import img2 from "./images/email.png";
import img3 from "./images/padlock.png";
import "./css/styles.css";

function App(){

    const [action, setAction] = useState("Sign Up")



    return (
        <div className="container">
            <div className="header">
                <div className="formType">{action}</div>
                <div className="underLine"></div>
                </div>
                <div className="inputs">
                {action==="Login"?<div></div>:<div className="input"><img className="img" src={img1} alt=""/><input type="text" placeholder="Name"/></div>}    
                    <div className="input">
                    <img className="img" src={img2} alt=""/>
                    <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input">
                    <img className="img" src={img3} alt=""/>
                    <input type="password" placeholder="Password"/>
                    </div>
                    {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                    
                    <div className="btn-container">
                        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>SignUp</div>
                        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                    </div>

                </div>
            
        </div>
    );
};

export default App;