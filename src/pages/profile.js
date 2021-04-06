import React from 'react';
import Header from '../components/header';
import ShopList from '../components/shops';
import Post from '../components/post';
import pic from '../images/pic/pic1.jpg';
import post1 from '../images/post/post1.jpg';

const Profile=()=>{

const show_tab=(e)=>{
var tab_li=document.querySelectorAll("#profile_navigate li");
 tab_li.forEach(tab=>{
 	tab.classList.remove("active");
 });

 e.target.classList.add("active");
 var show=e.target.getAttribute("tab");
 var hide=document.querySelectorAll('.profile_tabs');
 hide.forEach(tabs=>{
    tabs.classList.remove("active");
 });

 document.getElementById(show).classList.add("active");
	
}

return(
<>

<Header/>

<div id="profile_wraper">

<div id="profile_banner">
	<div id="profile_img">
		<div id="profile_pic">
			<img src={pic} alt="" />
		</div>
	</div>
	<div id="profile_navigator">
		<ul id="profile_navigate">
			<li className="active" onClick={show_tab} tab="profile_post_wraper" >Home</li>
			<li onClick={show_tab} tab="profile_shop" >Shop</li>
		</ul>
	</div>
</div>

<div id="profile_post_wraper" className="profile_tabs active">
<Post image={post1} />
</div>

<div id="profile_shop" className="profile_tabs">

<ShopList/>

</div>

</div>

</>

);
}

export default Profile;