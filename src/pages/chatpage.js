import Header from '../components/header';
import Chatlist from '../components/chatlist';

const Chatpage=()=>{
return(
<>
<Header page={2}/>

<div className="chatlist_wraper">

<Chatlist/>

</div>
</>
)
}

export default Chatpage;