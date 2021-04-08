import {useState,useEffect,useContext} from 'react';
import AuthContext from '../context/authcontext';
import AxiosConfig from '../helpers/axiosconfig';
import BaseURL from '../helpers/baseurl';

const Requestlist=(props)=>{

const [loading,setLoading]=useState(true);
const {currentUser}=useContext(AuthContext);
const [userinfo,setUserinfo]=useState([]);	

useEffect(()=>{

//fetch user info
async function fetch_info(){
try{
const token=localStorage.getItem('x-auth-token');
const user_info=await AxiosConfig.post('/friends/requesterinfo',{uid:props.user_id},{headers:{'x-auth-token':token}})
setUserinfo(user_info.data)	
setLoading(false)
}catch(err){
console.log(err)
}

}

fetch_info()

},[props.user_id])

//accept request
async function accept_request(){
const token=localStorage.getItem('x-auth-token');
const res=await AxiosConfig.post('/friends/accept',{follower:currentUser.id,following:props.user_id},{headers:{'x-auth-token':token}})
console.log(res.data)
}

return(
<>
{
loading===false?
<div className="friendlist">
<div className="friendlist_pic">
<img src={BaseURL+'/users/pic/'+userinfo.avatar} alt=""/>
</div>

<div className="friendlist_user">

<div className="friendlist_user_info">
<span>{userinfo.name}</span> 
<div className="friendlist_user_status"><div className="user_online"></div> online</div>
</div>

<div className="request_user_button">
<button onClick={accept_request}>Accept</button>
<button className="light">Delete</button>
</div>

</div>
</div>:
<div className="friendlist-loader">
<div className="dot-flashing"></div>
</div>	
}
</>
)
}

export default Requestlist;