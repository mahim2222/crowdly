import {useState,useEffect} from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import PostForm from '../components/postform';
import Post from '../components/post';
import post2 from '../images/post/post2.jpg';
import {IoMdAdd} from 'react-icons/io';
import AxiosConfig from '../helpers/axiosconfig';
import BaseURL from '../helpers/baseurl';

const Home=()=>{

const [postForm,setPostForm]=useState(false);
const [AllPosts,setAllPosts]=useState([]);
const [AppendPost,setAppendPost]=useState([]);

useEffect(()=>{

async function get_posts(){

const all_posts=await AxiosConfig.get('/posts/all');
setAllPosts(all_posts.data);

}
get_posts();

},[]);


function update_post_list(post){

setPostForm(false);
setAppendPost([post,...AppendPost]);

}


return(
<>

<section id="home">
{postForm?
<PostForm hide={setPostForm} PostList={update_post_list} />:null
}

<Header page={0} />

<div id="home_wraper">

<div id="home_sidebar"><Sidebar/></div>
<div id="home_post">

<div className="post_toggle">
<div>
<img src={post2} alt=""/>
</div>

<div className="add_icon" onClick={e=>setPostForm(true)}>
<IoMdAdd/>
</div>

</div>

{
AppendPost.map(post=>{
return <Post key={post._id} content={post.text} ismedia={post.medialink} media={BaseURL+'/posts/media/'+post.medialink} type={post.posttype} />
})
}

{
AllPosts.map(post=>{
return <Post key={post._id} content={post.text} ismedia={post.medialink} media={BaseURL+'/posts/media/'+post.medialink} type={post.posttype} />
})
}
</div>
<div id="home_sponsure"></div>

</div>

</section>

</>
);	
}

export default Home;