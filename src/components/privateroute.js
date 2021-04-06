import AuthContext from '../context/authcontext';
import {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';

const Privateroute=({component:Component,...rest})=>{

const {currentUser}=useContext(AuthContext);

return(
<Route {...rest} render={props=>(currentUser?<Component {...props}/>:<Redirect to="/login"/> )} />
)

}

export default Privateroute;