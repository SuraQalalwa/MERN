import React, { useState } from  'react';


const UserForm = (props) => {
const [firstName, setfirstName] = useState("");
const [firstNameError, setfirstNameError] = useState("");
const [lastName, setlastName] = useState("");
const [lastNameError, setlastNameError] = useState("");
const [email, setEmail] = useState("");
const [emailError, setEmailError]= useState("");
const [password, setPassword] = useState("");
const [passwordError, setPasswordError]=useState("");
const [confirmpassword, setConfirmPassword] = useState("");
const [confirmpasswordError, setConfirmPasswordError]=useState("")

const handlefirstName = (e) => {
    setfirstName(e.target.value);
    if(e.target.value.length < 1) {
        setfirstNameError("firstName is required!");
    } else if(e.target.value.length < 2) {
        setfirstNameError("firstName must be 2 characters or longer!");
    } else {
        setfirstNameError("");
    }
}

const handlelastName = (e) => {
    setlastName(e.target.value);
    if(e.target.value.length < 1) {
        setlastNameError("lastName is required!");
    } else if(e.target.value.length < 2) {
        setlastNameError("lastName must be 2 characters or longer!");
    } else {
        setlastNameError("");
    }
}

const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 2) {
        setEmailError("Email must be at least 2 characters!");
    } else {
        setEmailError("");
    }
}

const handlepassword = (e)=>{
    setPassword(e.target.value);
    if(e.target.value.length>8){
        setPasswordError("Password must be at least 8 characters!")
    } else{
        setPasswordError("");
    }
}

const handleconfirmpassword= (e)=>{
    setConfirmPassword(e.target.value);
    if (password !== e.target.value){
        setConfirmPasswordError("Passwords must match")
    } else{
        setConfirmPasswordError("");
}
}

return(
    <>
    <div>
<form onSubmit={ (e) => e.preventDefault() }>
<div>
<label>First Name: </label> 
<input type="text"  onChange={ handlefirstName } />
        {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
</div>
<div>
    <label>Last Name: </label> 
<input type="text" onChange={handlelastName}  />
{
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
</div>
<div>
<label>Email Address: </label> 
<input type="text" onChange={handleEmail}/>
{
    emailError?
    <p style={{color:'red'}}>{emailError}</p>:
    ''
}
</div>
<div>
<label>Password: </label>
<input type="password" onChange={handlepassword} />
{
    passwordError?
    <p style={{color:'red'}}>{passwordError}</p>:
    ''
}
</div>
<div>
<label>Confirm Password: </label>
<input type="password" onChange={handleconfirmpassword} />
{
    confirmpasswordError?
    <p style={{color:'red'}}>{confirmpasswordError}</p>:
    ''
}
</div>
</form>
</div>

<div>
    <h2>Your Form Data</h2>
<p>First Name :{firstName}</p>
<p>Last Name :{lastName}</p>
<p>Email: {email}</p>
<p>Password:{password.type}</p>
<p>Confirm Password:{confirmpassword.type}</p>
</div>
</>
);
};

export default UserForm;
