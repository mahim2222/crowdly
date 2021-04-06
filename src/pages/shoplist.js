import React from 'react';
import Header from '../components/header';
import {HiSearch} from 'react-icons/hi';
import ShopList from '../components/shops.js';

const ShopListPage=()=>{
return(
<>

<Header/>

<div className="friend_list_wraper">

<div id="friend_search">
<form>
<input type="text" placeholder="search here"/>
<button type="submit"><HiSearch/></button>
</form>
</div>

<ShopList/>

</div>

</>
);	
}


export default ShopListPage;