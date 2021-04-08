import {useState,useEffect} from 'react';
import AxiosConfig from '../helpers/axiosconfig';
import BaseURL from '../helpers/baseurl';

const Friend=(props)=>{

const [loading,setLoading]=useState(true);
const [userinfo,setUserinfo]=useState([]);

useEffect(()=>{

async function fetch_user(){

try{
const token=localStorage.getItem('x-auth-token');
const all_info=await AxiosConfig.post('/friends/friendinfo',{uid:props.user_id},{headers:{'x-auth-token':token}})
setUserinfo(all_info.data)
setLoading(false)
}catch(err){
console.log(err)	
}

}
fetch_user();

},[props.user_id]);

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


</div>
</div>:
<div className="friendlist-loader">
<div className="dot-flashing"></div>
</div>	
}
</>
)
}

export default Friend;