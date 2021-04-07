import {Link} from 'react-router-dom';
import pic from '../images/pic/pic2.jpg';
import video from '../images/video.mp4';

const Post=(props)=>{
return(
<>
<div className="post">

<div className="post_user">
<div className="post_user_info">

<div className="post_user_pic">
<Link to=""><img src={pic} alt="" /></Link>
</div>

<div className="post_user_detail">
<span>Md Mohiuddin</span>
<strong>8 m</strong>
</div>

</div>
<div className="post_user_action">
</div>
</div>

<div className="post_content">

<div className="post_text">
{props.content}
</div>

{
props.ismedia && props.type==='post'?
<div className="post_image_content">
<img src={props.media} alt="" />	
</div>:null
}

{
props.ismedia && props.type==='video'?
<div className="post_video_content">
<video controls src={props.media}></video>
</div>:null	
}

</div>

<div className="post_action"></div>
<div className="post_comment_box"></div>

<div className="post_comments_wraper"></div>

</div>
</>
)
}

export default Post;