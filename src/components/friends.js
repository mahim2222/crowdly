import React from 'react';
import pic from '../images/pic/pic1.jpg';
import {Link} from 'react-router-dom';

const FriendList=()=>{
return(
<>

<div className="friend_list">

<img src={pic} alt="" />
<div className="friend_list_info">
<h6>Md Mohiuddin</h6>

<div className="friend_list_button">
<Link to="/profile">Profile</Link>
<Link to="">Add Friend</Link>
</div>

</div>

</div>

</>
);	
}

export default FriendList;