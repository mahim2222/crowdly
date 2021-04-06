import React from 'react';
import post1 from '../images/post/post1.jpg';
import {Link} from 'react-router-dom';

const ShopList=()=>{
return(
<>

<div className="shop_list">
<Link to="/shop">
<img src={post1} alt="" />

<div className="shop_list_title">
<h5>pc builder bangladesh</h5>
<p>
pc builder bd will create your custom
gaming pc in a afordable budget
</p>
</div>
</Link>
</div>



</>
);	
}

export default ShopList;