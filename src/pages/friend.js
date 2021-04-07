import {useState,useEffect} from 'react';
import Header from '../components/header';
import Friendlist from '../components/friendlist';
import Friend from '../components/friends';
import Requestlist from '../components/requestlist';
import AxiosConfig from '../helpers/axiosconfig';
import BaseURL from '../helpers/baseurl';
import {HiUserGroup} from 'react-icons/hi';
import {MdGroup} from 'react-icons/md';
import {MdPersonAdd} from 'react-icons/md';
import {HiSearch} from 'react-icons/hi';
import {MdClose} from 'react-icons/md';

const FriendPage=()=>{

const [showsearch,setShowsearch]=useState(false);
const [tab,setTab]=useState('users');
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

let all_tabs=document.querySelectorAll('.friendlist_tabs_list');
all_tabs.forEach(tab=>{
	tab.classList.remove('active');
})
all_tabs[0].classList.add('active');
setTab('users');

const uid=localStorage.getItem('auth-id');
const all_users=await AxiosConfig.post('/friends',{me:uid});
setUsers(all_users.data)
console.log(all_users.data)

}catch(err){
	console.log(err)
}

}

//show friend requests
function show_firends(){

try{

let all_tabs=document.querySelectorAll('.friendlist_tabs_list');
all_tabs.forEach(tab=>{
	tab.classList.remove('active');
})
all_tabs[1].classList.add('active');
setTab('friends')

}catch(err){
	console.log(err)
}	


}

//show requests
function show_requests(){

try{

let all_tabs=document.querySelectorAll('.friendlist_tabs_list');
all_tabs.forEach(tab=>{
	tab.classList.remove('active');
})
all_tabs[2].classList.add('active');
setTab('requests')

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
<div className="friendlist_wraper">

{
Users.map(user=>{
return <Friendlist key={user._id} name={user.name} pic={BaseURL+'/users/pic/'+user.avatar}/>
})
}

</div>:null	
}

{
tab==='friends'?
<div className="friendlist_wraper">
<Friend/>
</div>:null	
}

{
tab==='requests'?
<div className="friendlist_wraper">
<Requestlist/>
</div>:null	
}

</>
);	
}

export default FriendPage;