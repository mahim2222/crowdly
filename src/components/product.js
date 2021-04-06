import React from 'react';
import {Link} from 'react-router-dom';

const Product=(props)=>{
return(
<>

<Link to="/viewproduct">

<div className="product">
<div className="product_img">
	<img src={props.image} alt=""/>
	<div className="product_content">
		<span>Ryzen 3 1300X Gaming PC</span>
		<ul>
			<li>XFX RX 5600 XT THICC II Pro 6GB GDDR6 Graphics Card</li>
			<li>AMD Ryzen 3 1300X Processor</li>
			<li>Team Elite Plus 4GB RAM</li>
			<li>Gigabyte GT 710 2GB Graphics</li>
		</ul>
	</div>
</div>
</div>

</Link>

</>
)
}

export default Product;