import React from 'react';
import {Link} from 'react-router-dom';
import pic from '../images/pic/pic1.jpg';
import homeico from '../images/icon/home.png';
import friendico from '../images/icon/friends.png';
import messageico from '../images/icon/message.png';

const Sidebar=()=>{
return(
<>

<div id="sidebar">

<div className="sidebar_profile">
<div className="sidebar_pic">
<img src={pic} alt="" />
</div>

<div className="sidebar_user_info">
<h6>Md Mohiuddin</h6>
<span>@mahim4444</span>
</div>

</div>


<div className="sidebar_menu">
	<ul>
		<li><Link to="/"><img src={homeico} alt=""/><span>home</span></Link>
		</li>
		<li><Link to="/"><img src={friendico} alt=""/><span> friends</span></Link>
		</li>
		<li><Link to="/"><img src={homeico} alt=""/><span> Store</span></Link>
		</li>
		<li><Link to="/"><img src={messageico} alt=""/><span> Message</span></Link>
		</li>
	</ul>
</div>

</div>

</>
);
}

export default Sidebar;