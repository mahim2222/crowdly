import {Link,useHistory} from 'react-router-dom';
import logingimg from '../images/login.png';
import AxiosConfig from '../helpers/axiosconfig';
import {useState,useContext} from 'react';
import AuthContext from '../context/authcontext';

const Login=()=>{

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [loading,setLoading]=useState(false);
const {setCurrentUser}=useContext(AuthContext);
const history=useHistory();

async function LoginHandler(e){

e.preventDefault();

try{
setLoading(true);
const islogged=await AxiosConfig.post('/users/login',{email:email,password:password});
localStorage.setItem('x-auth-token',islogged.data.token);
localStorage.setItem('auth-id',islogged.data.user.id);
setCurrentUser(islogged.data.user);

history.push('/');
}catch(err){
	console.log(err.response.data.message);
	setLoading(false);
}

}
	
return(
<>

<section className="auth_page">

<div className="auth_img">
<img src={logingimg} alt="" />
</div>

<div className="auth_form_wraper">

<form onSubmit={LoginHandler}>
<h3>Welcome Back</h3>
<h5>Enter your credentials to sign in.</h5>

<div className="auth_form_field">
<label>Email *</label>
<input type="email" placeholder="Your email" onChange={e=>setEmail(e.target.value)} />
</div>
<div className="auth_form_field">
<label>Password *</label>
<input type="password" placeholder="Your password" onChange={e=>setPassword(e.target.value)} />
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
<button type="submit" disabled={loading}>Login</button>
</div>

<div className="auth_form_field">
<span>Don't have an acount <Link to="/register">Register</Link></span>
</div>

</form>

</div>

</section>

</>
)
}

export default Login;