import {useContext,useState,useEffect} from 'react';
import AuthContext from '../context/authcontext';
import {Link} from 'react-router-dom';
import AxiosConfig from '../helpers/axiosconfig';

const Friendlist=(props)=>{

const [reqloading,setReqloading]=useState(false);
const [confirm,setConfirm]=useState(false);
const [requested,setRequested]=useState(false);
const [isfriend,setIsfriend]=useState(false);
const {currentUser}=useContext(AuthContext);

useEffect(()=>{

async function requested_check(){
const token=localStorage.getItem('x-auth-token');
const res=await AxiosConfig.post('/friends/requestedcheck',{follower:props.user_id,following:currentUser.id},{headers:{'x-auth-token':token}})

if(res.data){setRequested(true)}

}

requested_check();

async function friend_check(){
const token=localStorage.getItem('x-auth-token');
const res=await AxiosConfig.post('/friends/friendcheck',{follower:props.user_id,following:currentUser.id},{headers:{'x-auth-token':token}})
if(res.data){setIsfriend(true)}
}

friend_check();

},[currentUser.id,props.user_id]);

//adding friend request
async function friend_request(){
setReqloading(true);	
const token=localStorage.getItem('x-auth-token');
try{
await AxiosConfig.post('/friends/add',{follower:props.user_id,following:currentUser.id},{headers:{'x-auth-token':token}})
setReqloading(false)
setRequested(true);
}catch(err){
console.log(err.response.data.message)
}

}

//remove request
async function remove_request(){
setReqloading(true)
const token=localStorage.getItem('x-auth-token');

try{
await AxiosConfig.post('/friends/request_remove',{follower:props.user_id,following:currentUser.id},{headers:{'x-auth-token':token}})
setRequested(false);
setReqloading(false);
}catch(err){
console.log(err.response.data.message)
}

}

//remove friend
async function remove_friend(){
const token=localStorage.getItem('x-auth-token');
try{
await AxiosConfig.post('/friends/remove_friend',{follower:props.user_id,following:currentUser.id},{headers:{'x-auth-token':token}})
setIsfriend(false);
setConfirm(false);
}catch(err){
console.log(err)	
}

}

return(
<>

{
confirm?
<div className="remove_friend_wraper">
<div className="rf_warning">

<img src={props.pic} alt=""/>
<div className="warning_box">Do you want to unfriend ?</div>
<div className="rf_warning_btn">
<button onClick={remove_friend}>Confirm</button>
<button className="light" onClick={e=>setConfirm(false)}>Close</button>
</div>
</div>
</div>:null	
}

<div className="friendlist">
<div className="friendlist_pic">
<img src={props.pic} alt=""/>
</div>

<div className="friendlist_user">

<div className="friendlist_user_info">
<span>{props.name}</span> 
<div className="friendlist_user_status"><div className="user_online"></div> online</div>
</div>

<div className="friendlist_user_button">
<Link to="">Profile</Link>
{
requested?
<button className="light"
 onClick={remove_request}
 disabled={reqloading}>Cancel Request</button>:null
}

{
isfriend?
<button className="light" onClick={e=>setConfirm(true)}>Unfriend</button>:null
}

{
isfriend===false && requested===false?
<button onClick={friend_request} disabled={reqloading}>Add Friend</button>:null
}

</div>

</div>

</div>
</>
)
}

export default Friendlist;