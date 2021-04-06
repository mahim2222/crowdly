import React from 'react';
import {Link} from 'react-router-dom';
import shop1 from '../images/shop/shop1.jpg';
import pic from '../images/pic/pic2.jpg';
import pic1 from '../images/pic/pic1.jpg';
import Header from '../components/header';
import Product from '../components/product';
import p1 from '../images/product/p1.jpg';
import p3 from '../images/product/p3.jpg';
import p4 from '../images/product/p4.jpg';
import p5 from '../images/product/p5.jpg';
import p6 from '../images/product/p6.jpg';
import p7 from '../images/product/p7.jpg';
import p8 from '../images/product/p8.jpg';
import {AiFillEye} from 'react-icons/ai';
import {MdDelete} from 'react-icons/md';
import {MdPhone} from 'react-icons/md';
import {RiMessage2Fill} from 'react-icons/ri';

const Shop=()=>{

const Toggle_navigate=(e)=>{
   var tabs=document.querySelectorAll('#shop_navigate li');
   tabs.forEach(tab=>{
   	tab.classList.remove('active');
   });

   var tabitem=document.querySelectorAll('.shop_tabs');
   tabitem.forEach(tabitem=>{
   	tabitem.classList.remove('active');
   });

   e.target.classList.add('active');
   var showitem=e.target.getAttribute('tab');
   document.getElementById(showitem).classList.add('active');

}


return(
<>
<Header/>

<div id="shop_wraper">

<div id="shop_detail">
	<div id="shop_banner">
		<img src={shop1} alt=""/>
	</div>
	<div id="shop_navigator">
		<div id="shop_navigator_user">
			<div id="shop_navigator_user_detail">
				<img src={pic} alt=""/>
				<div>
				<h4>PC Builder Bangladesh</h4>
				<span>224K subscribers</span>
			    </div>
			</div>

			<div id="shop_navigator_follow">
				<button>follow</button>
			</div>

		</div>
		<div id="shop_navigator_menu">
			<ul id="shop_navigate">
				<li className="active" tab="shop_product" onClick={Toggle_navigate}>Products</li>
				<li tab="shop_about" onClick={Toggle_navigate}>About</li>
				<li tab="shop_order" onClick={Toggle_navigate}>Order</li>
			</ul>
		</div>
	</div>
</div>

<div id="shop_product" className="shop_tabs active">
	<div className="shop_product"><Product image={p1}/></div>
	<div className="shop_product"><Product image={p3}/></div>
	<div className="shop_product"><Product image={p4}/></div>
	<div className="shop_product"><Product image={p5}/></div>
	<div className="shop_product"><Product image={p3}/></div>
	<div className="shop_product"><Product image={p6}/></div>
	<div className="shop_product"><Product image={p7}/></div>
	<div className="shop_product"><Product image={p8}/></div>
</div>

<div id="shop_about" className="shop_tabs">
	<h4>Description</h4>
	<p>
		PC Builder Bangladesh is the first video based technology  podcast in Bangladesh.
	</p>
    <p> 
       	We create video regarding gaming, tech news, tutorials and pc builds. You can learn about gaming, gaming pc, pc building tutorials and other pc issues. Apart from these we also unbox and review pc components and other tech gadgets. You can join local and international tech gossips as well.
     </p>  	 
      <p>
        Subscribe and join us over youtube. We are also available on other social handles, feel free to communicate us over those as well. We are tech enthusiasts like you, please help us grow.
       </p>
       <p>
        We would love to unbox and review your products.
        Feel free to mail us at the following address.
       </p>

       <div className="shop_desc_line"></div>

       <h4>Detail</h4>
       <ul>
       	<li>Shop Opened <strong> 28 dec 2020</strong></li>
       	<li>Location : <strong> Bangladesh</strong></li>
       </ul>
       <div className="shop_desc_line"></div>
</div>

<div id="shop_order" className="shop_tabs">
	<table>
		<thead>
			<tr>
				<th>Pic</th>
				<th>Time</th>
				<th>Name</th>
				<th>Contact</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><img src={pic} alt=""/></td>
				<td> <span>30 dec 2020</span> </td>
				<td><span>Md Mohiuddin</span></td>
				<td>
				  <ul>
					 <li><Link to=""><MdPhone/></Link></li>
					 <li><Link to=""><RiMessage2Fill/></Link></li>
				  </ul>
				</td>
				<td>
					<Link to=""><AiFillEye/></Link>
					<Link to=""><MdDelete/></Link>
				</td>
			</tr>
			<tr>
				<td><img src={pic1} alt=""/></td>
				<td> <span>30 dec 2020</span> </td>
				<td><span>Md Mohiuddin</span></td>
				<td>
				  <ul>
					 <li><Link to=""><MdPhone/></Link></li>
					 <li><Link to=""><RiMessage2Fill/></Link></li>
				  </ul>
				</td>
				<td>
					<Link to=""><AiFillEye/></Link>
					<Link to=""><MdDelete/></Link>
				</td>
			</tr>
			<tr>
				<td><img src={pic} alt=""/></td>
				<td> <span>30 dec 2020</span> </td>
				<td><span>Md Mohiuddin</span></td>
				<td>
				  <ul>
					 <li><Link to=""><MdPhone/></Link></li>
					 <li><Link to=""><RiMessage2Fill/></Link></li>
				  </ul>
				</td>
				<td>
					<Link to=""><AiFillEye/></Link>
					<Link to=""><MdDelete/></Link>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</div>

</>
);
}

export default Shop;