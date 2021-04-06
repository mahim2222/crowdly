import {Link} from 'react-router-dom';
import logingimg from '../images/login.png';
import AxiosConfig from '../helpers/axiosconfig';
import {useState} from 'react';

const Register=()=>{

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirm,setConfirm]=useState('');
const [loading,setLoading]=useState(false);


async function RegisterHandler(e){

e.preventDefault();

try{
setLoading(true)
const new_user=await AxiosConfig.post('/users/register',{name:name,email:email,password:password,confirm:confirm});
console.log(new_user.data)
setLoading(false)
}catch(err){
	console.log(err.response.data.message)
}

}


return(
<>

<section className="auth_page">

<div className="auth_img">
<img src={logingimg} alt="" />
</div>

<div className="auth_form_wraper">

<form onSubmit={RegisterHandler}>

<h3>Register</h3>
<h5>Create your acount from here.</h5>

<div className="auth_form_field">
<label>Name *</label>
<input type="text" placeholder="Your fullname" onChange={e=>setName(e.target.value)}/>
</div>

<div className="auth_form_field">
<label>Email *</label>
<input type="email" placeholder="Your email" onChange={e=>setEmail(e.target.value)}/>
</div>

<div className="auth_form_field">
<label>Password *</label>
<input type="password" placeholder="Your password" onChange={e=>setPassword(e.target.value)}/>
</div>

<div className="auth_form_field">
<label>Confirm password *</label>
<input type="password" placeholder="Your password" onChange={e=>setConfirm(e.target.value)}/>
</div>

<div className="auth_form_field_action">
<div className="auth_remember_me">
<input type="checkbox" alt=""/>
<span>Remember me?</span>
</div>

<div className="auth_forgot_password">
<span><Link to="/login">Forgot password?</Link></span>
</div>
</div>

<div className="auth_form_field">
<button type="submit" disabled={loading}>Register</button>
</div>

<div className="auth_form_field">
<span>Already have an acount <Link to="/login">Login</Link></span>
</div>

</form>

</div>

</section>

</>
)
}

export default Register;