import {useState} from 'react';
import {MdClose} from 'react-icons/md';
import {IoMdImage} from 'react-icons/io';
import {FaRegFileVideo} from 'react-icons/fa';
import {BsPlus} from 'react-icons/bs';
import AxiosConfig from '../helpers/axiosconfig';

const PostForm=(props)=>{


const [type,setType]=useState('post');
const [ViewCover,setViewCover]=useState(null);
const [text,setText]=useState('');
const [medialink,setMedialink]=useState(null);

async function AddPost(){

let formData=new FormData();

if(type==='slider'){

console.log('this is time to add a slider')

}else{

formData.append('type',type);
formData.append('text',text);
formData.append('medialink',medialink);

const res=await AxiosConfig.post('/posts/add',formData);
props.PostList(res.data)

}

}

function CoverImgSetup(e){
setMedialink(e.target.files[0])

const reader=new FileReader();
reader.onload=()=>{
setViewCover(reader.result)
}
reader.readAsDataURL(e.target.files[0])

}


function setposttype(e){

try{

const typebtns=document.querySelectorAll('.btn-posttype');
typebtns.forEach(btn=>btn.classList.remove('active'))
setType(e.target.innerHTML)
e.target.classList.add('active')

}catch(e){
	console.log(e)
}

}

//seting sliders

function Setsliders(e){

const reader=new FileReader();
reader.onload=()=>{
let el=document.createElement('div');
el.classList.add('pf_slide_img');
let img=document.createElement('img');
img.src=reader.result;
el.append(img);
document.querySelector('.pf_slide_append').append(el);
}
reader.readAsDataURL(e.target.files[0])

}


return(
<>

<div className="postform_wraper">
<div className="postform">

<div className="postform_title">
<h3>Create Post</h3>
<div className="postform_closer" onClick={e=>props.hide(false)}><MdClose/></div>
</div>

<div className="postform_tabs">
<button onClick={setposttype} className="btn-posttype">post</button>
<button onClick={setposttype} className="btn-posttype">video</button>
<button onClick={setposttype} className="btn-posttype">slider</button>
</div>

{
type==='post'?
<div>
<div className="postform_content">
<textarea rows="6" placeholder="what's on your mind"
onChange={e=>setText(e.target.value)}
/>
</div>



{
	ViewCover?
	<div className="pf_show_img">
	<img src={ViewCover} alt=""/>
	</div>:null
}

<div className="img_selector">
<input type="file" onChange={CoverImgSetup}/>
<div className="img_icon"><IoMdImage/></div>
</div>
</div>:null	
}

{
type==='video'?
<div className="pf_video_content">

<textarea
placeholder="write something about video.."
onChange={e=>setText(e.target.value)}
rows="6"
/>

<div className="pf_video_selector">
<input type="file" onChange={e=>setMedialink(e.target.files[0])}/>

<div className="pf_video_show">
</div>

<div className="pf_video_icon">
<FaRegFileVideo/>
</div>

</div>

</div>:null	
}

{
type==='slider'?
<div className="pf_slider_content">
<textarea
placeholder="write something about the slider..."
rows="4"
onChange={e=>setText(e.target.value)}
/>

<div className="pf_slider_selector">

<div className="pf_slide_append">
</div>

<div className="slider_add_icon">
<input type="file" onChange={Setsliders} /><BsPlus/>
</div>

</div>

</div>:null	
}


<div className="post_submit">
{
 text===''?
 <button disabled>post</button>
 :<button onClick={AddPost}>post</button>	
}
</div>

</div>
</div>

</>
);	
}

export default PostForm;