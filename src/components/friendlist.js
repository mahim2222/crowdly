import {Link} from 'react-router-dom';

const Friendlist=(props)=>{
return(
<>
<div className="friendlist">
<div className="friendlist_pic">
<img src={props.pic} alt=""/>
</div>

<div className="friendlist_user">

<div className="friendlist_user_info">
<span>{props.name}</span> 
<div className="friendlist_user_status"><div className="user_online"></div> online</div>
</div>

<div className="friendlist_user_button">
<Link to="">Profile</Link><button>Add Friend</button>
</div>

</div>

</div>
</>
)
}

export default Friendlist;