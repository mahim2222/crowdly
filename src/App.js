import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/home';
import FrinedPage from './pages/friend';
import ShopListPage from './pages/shoplist';
import Shop from './pages/shop';
import Profile from './pages/profile';
import Chatpage from './pages/chatpage.js';
import ViewProduct from './pages/viewproduct';
import Login from './pages/login';
import Register from './pages/register';
import {useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import AxiosConfig from './helpers/axiosconfig';
import AuthContext from './context/authcontext';
import Privateroute from './components/privateroute';

function App() {

const [currentUser,setCurrentUser]=useState(null);
const [redirectto,setRedirectTo]=useState(false);

useEffect(()=>{

async function get_user_info(){

const token=localStorage.getItem('x-auth-token');

if(!token || token===''){
setRedirectTo('/login');
}else{

const get_user=await AxiosConfig.post('/users/get_user',null,{headers:{'x-auth-token':token}});
setCurrentUser(get_user.data);

}


}
get_user_info();

},[]);


return (

<>
<Router>
{
	redirectto?
	<Redirect to={redirectto} />:null
}
<AuthContext.Provider value={{currentUser,setCurrentUser}}>
{
currentUser?
<>
<Privateroute exact path="/" component={Home} />
<Privateroute exact path="/friendlist" component={FrinedPage} />
<Privateroute exact path="/shoplist" component={ShopListPage} />
<Privateroute path="/shop" component={Shop} />
<Privateroute path="/profile" component={Profile} />
<Privateroute path="/chatlist" component={Chatpage} />
<Privateroute path="/viewproduct" component={ViewProduct} />
</>:null}

<Route path="/login" component={Login} />
<Route path="/register" component={Register}/>
</AuthContext.Provider>
</Router>

</>
  
);
}

export default App;
