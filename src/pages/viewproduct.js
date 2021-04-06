import React from 'react';
import Header from '../components/header';
import v1 from '../images/viewproduct/v1.png';
import v2 from '../images/viewproduct/v2.png';

const ViewProduct=()=>{
return(
<>
<Header/>

<div id="view_product_wraper">

<div id="view_product">

<div id="view_product_img">
	<div id="view_cover">
	  <img src={v2} alt=""/>
    </div>
    <div id="view_attach">
    	<div className="view_attach">
    		<img src={v1} alt=""/>
    	</div>
    	<div className="view_attach">
    		<img src={v2} alt=""/>
    	</div>
    	<div className="view_attach">
    		<img src={v1} alt=""/>
    	</div>
    	<div className="view_attach">
    		<img src={v2} alt=""/>
    	</div>
    </div>
</div>

<div id="view_product_content">

    <div className="view_product_content">
		<h4>
			Intel 9th Gen Core i3 9100F Processor
		</h4>

		<table>
      <tbody>
    <tr>
      <td><strong>Price</strong></td>
      <td><span>7,300৳</span></td>
    </tr>
    <tr>
      <td><strong>Regular Price</strong></td>
      <td><span>8,140৳</span></td>
    </tr> 
    <tr>
      <td><strong>Status</strong></td>
      <td><span>In Stock</span></td>
    </tr> 
    <tr>
      <td><strong>Product Code</strong></td>
      <td><span>10624</span></td>
    </tr>
    <tr>
      <td><strong>Brand</strong></td>
      <td><span>INTEL</span></td>
    </tr>   
  </tbody>
    </table>
    
    <h5>Features</h5>
    <ul>
      <li>Model: Intel Core i3 9100F</li>
      <li>Base Frequency 3.60 GHz Up to 4.20 GHz</li>
      <li>Socket Supported FCLGA1151</li>
      <li>Max Memory Size 64GB</li>
    </ul>

    <div className="view_product_price">
      <span>7,300৳</span>
      <p>CASH DISCOUNT PRICE</p>
    </div>

    <div className="view_product_action">
      <div className="view_product_quantity">
        <ul>
          <li>+</li>
          <li>1</li>
          <li>-</li>
        </ul>
      </div>
      <div className="view_product_button">
        <button>Order Now</button>
      </div>
    </div>

	</div>

	

</div>

</div>

</div>

</>
);	
}

export default ViewProduct;