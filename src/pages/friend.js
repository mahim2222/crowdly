import {useState,useEffect,useContext} from 'react';
import Header from '../components/header';
import Friendlist from '../components/friendlist';
import Friend from '../components/friends';
import Requestlist from '../components/requestlist';
import AxiosConfig from '../helpers/axiosconfig';
import BaseURL from '../helpers/baseurl';
import AuthContext from '../context/authcontext';
import {HiUserGroup} from 'react-icons/hi';
import {MdGroup} from 'react-icons/md';
import {MdPersonAdd} from 'react-icons/md';
import {HiSearch} from 'react-icons/hi';
import {MdClose} from 'react-icons/md';

const FriendPage=()=>{

const [showsearch,setShowsearch]=useState(false);
const [loading,setLoading]=useState(false);
const {currentUser}=useContext(AuthContext);
const [tab,setTab]=useState('users');
const [ff,setff]=useState('Follower');
const [Users,setUsers]=useState([]);

useEffect(()=>{

async function get_users(){

const uid=localStorage.getItem('auth-id');
const all_users=await AxiosConfig.post('http://localhost:4000/friends',{me:uid});
setUsers(all_users.data)

}
get_users();

},[])

//show users
async function show_users(e){

try{
setLoading(true);
let all_tabs=document.querySelectorAll('.friendlist_tabs_list');
all_tabs.forEach(tab=>{
	tab.classList.remove('active');
})
all_tabs[0].classList.add('active');
setTab('users');

const all_users=await AxiosConfig.post('/friends',{me:currentUser.id});
setUsers(all_users.data)
setLoading(false);
}catch(err){
	console.log(err)
}

}

//show friend requests
async function show_firends(){

try{
setLoading(true)
let all_tabs=document.querySelectorAll('.friendlist_tabs_list');
all_tabs.forEach(tab=>{
	tab.classList.remove('active');
})
all_tabs[1].classList.add('active');
setTab('friends')

//get all the friends
const token=localStorage.getItem('x-auth-token');
const all_friend=await AxiosConfig.post('friends/allfollower',{me:currentUser.id},{headers:{'x-auth-token':token}})
setUsers(all_friend.data);
setLoading(false)
}catch(err){
	console.log(err)
}	


}

//show requests
async function show_requests(){

try{
setLoading(true)
let all_tabs=document.querySelectorAll('.friendlist_tabs_list');
all_tabs.forEach(tab=>{
	tab.classList.remove('active');
})
all_tabs[2].classList.add('active');
setTab('requests');

//get all the requests
const token=localStorage.getItem('x-auth-token');
const all_request=await AxiosConfig.post('/friends/allrequest',{me:currentUser.id},{headers:{'x-auth-token':token}});
setUsers(all_request.data)
setLoading(false)
}catch(err){
	console.log(err)
}	
}

//get follower
async function get_follower(){
const all_tabs=document.querySelectorAll('.ff_tab button');
all_tabs.forEach(tab=>{
	tab.classList.remove('active')
})
all_tabs[0].classList.add('active');
setff(all_tabs[0].innerHTML);

try{
const token=localStorage.getItem('x-auth-token');
const all_follower=await AxiosConfig.post('/friends/allfollower',{me:currentUser.id},{headers:{'x-auth-token':token}})
setUsers(all_follower.data)
}catch(err){
	console.log(err)
}

}

//get following
async function get_following(){
const all_tabs=document.querySelectorAll('.ff_tab button');
all_tabs.forEach(tab=>{
	tab.classList.remove('active')
})
all_tabs[1].classList.add('active');
setff(all_tabs[1].innerHTML)

try{
const token=localStorage.getItem('x-auth-token');
const all_following=await AxiosConfig.post('/friends/allfollowing',{me:currentUser.id},{headers:{'x-auth-token':token}})
setUsers(all_following.data);
}catch(err){
	console.log(err)
}

}


return(
<>
<Header page={1}/>

<div className="friendlist_tabs">
<ul>
<li className="friendlist_tabs_list active" onClick={show_users}><HiUserGroup/></li>
<li className="friendlist_tabs_list" onClick={show_firends}><MdGroup/></li>
<li className="friendlist_tabs_list" onClick={show_requests}><MdPersonAdd/></li>
<li onClick={e=>setShowsearch(true)}><HiSearch/></li>
</ul>

{
showsearch?
<div className="friendlist_search">
<div className="friendlist_search_input"><input type="text" placeholder="Search here..." /></div>
<div className="friendlist_search_closer" onClick={e=>setShowsearch(false)}><MdClose/></div>
</div>:null
}

</div>

{
tab==='users'?
<div>
{
loading===false?
<div className="friendlist_wraper">
{
Users.map(user=>{
return <Friendlist key={user._id}
        name={user.name}
        pic={BaseURL+'/users/pic/'+user.avatar}
        user_id={user._id}
        />
})
}
</div>:<div className="friendlist_wraper">Loading</div>	
}
</div>:null
}


{
tab==='friends'?
<div>
{
loading===false?
<div className="friendlist_wraper">
<div className="ff_tab">
<button className="active" onClick={get_follower}>Follower</button>
<button onClick={get_following}>Following</button>
</div>

<div className="ff_wraper">

{
ff==='Follower'?
<div>
{
Users.map(user=>{
return <Friend key={user._id} user_id={user.following} />
})	
}
</div>:null	
}

{
ff==='Following'?
<div>
{
Users.map(user=>{
return <Friend key={user._id} user_id={user.follower}/>
})	
}
</div>:null	
}

</div>

</div>:<div className="friendlist_wraper">Loading</div>	
}
</div>:null
}


{
tab==='requests'?
<div>
{
loading===false?
<div className="friendlist_wraper">
{
Users.map(request=>{
return <Requestlist key={request._id} user_id={request.following}/>
})	
}
</div>:<div className="friendlist_wraper">Loading</div>	
}
</div>:null	
}

</>
);	
}

export default FriendPage;