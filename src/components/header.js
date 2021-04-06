import {useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {GiHouse} from 'react-icons/gi';
import {FaUserFriends} from 'react-icons/fa';
import {MdStore} from 'react-icons/md';
import {MdNotifications} from 'react-icons/md';
import {FaCaretDown} from 'react-icons/fa';
import {MdFeedback} from 'react-icons/md';
import {CgDarkMode} from 'react-icons/cg';
import {MdShoppingCart} from 'react-icons/md';
import {FiLogOut} from 'react-icons/fi';
import logo from '../images/logo.png';
import AuthContext from '../context/authcontext';

const Header=()=>{

const {setCurrentUser}=useContext(AuthContext);
const history=useHistory();

const ToggleNavSetting=()=>{
  document.querySelector('.nav_action_setting').classList.toggle('active');
}

const ToggleDarkTheme=()=>{
 if(localStorage.getItem("dark")===true){
  localStorage.setItem("dark",false)
 }else{
  localStorage.setItem("dark",true);
 }
 document.querySelector('html').toggleAttribute("dark");
}

function LogoutHandler(){

try{
setCurrentUser(null);
localStorage.clear();
history.push('/login');
}catch(err){
console.log('failed to logout')
}
  
}

return(
<>

<header>
<nav>
   <div className="nav_logo">
   <img src={logo} alt=""/>
   </div>

   <div className="nav_menu">
   	<ul>
   		<li className="active"><Link to="/"><GiHouse/></Link></li>
   		<li><Link to="/friendlist"><FaUserFriends/></Link></li>
   		<li><Link to="/"><BsFillChatDotsFill/></Link></li>
   		<li><Link to="/shoplist"><MdStore/></Link></li>
   	</ul>
   </div>

   <div className="nav_action">
    <ul>
   	<li><MdNotifications/></li>
      <li onClick={ToggleNavSetting}><FaCaretDown/></li>
    </ul>
    
    <div className="nav_action_setting">
      
      <Link to="/">
      <div className="feedback">
        <div className="icon">
          <MdFeedback/>
        </div>
        <div className="feedback_text">
          <h6>Give feedback</h6>
        </div>
      </div>
     </Link>

      <div className="theme">

        <div className="theme_icon">
          <div className="icon">
           <CgDarkMode/>
          </div>
          <h5>Dark Theme</h5>
        </div>

        <div>
          <label className="switch">
          <input type="checkbox" onClick={ToggleDarkTheme}/>
           <span className="slider round"></span>
          </label>
        </div>
      </div>

      <Link to="/">
      <div className="feedback">
        <div className="icon">
          <MdShoppingCart/>
        </div>
        <div className="feedback_text">
          <h6>Shopping Cart</h6>
        </div>
      </div>
     </Link>

     <button onClick={LogoutHandler}>
      <div className="feedback">
        <div className="icon">
          <FiLogOut/>
        </div>
        <div className="feedback_text">
          <h6>Logout</h6>
        </div>
      </div>
     </button>

    </div>

   </div>

</nav>
</header>

</>
);	
}

export default Header;