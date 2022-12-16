import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
const [blogs, setblogs] = useState(null);

const [name , setName] = useState("mario")
const [Pending, setPending ] = useState(TextTrackCue)
useEffect(()=>{
    fetch("http://localhost:8000/blogs")
    .then(res =>{ return res.json();})
    .then(data => {console.log(data); setblogs(data) ;setPending(false)}
    )}
    ,[])///if the value between [] changes, the useEffect will be act
return (
    <>
    <div className="home">
     {Pending && <div>Loading ...</div>}
    {blogs &&  <BlogList source={blogs} title="all blogs's"  /> }
    <button onClick={()=>setName('luigi')}>Change Name</button>
    <p>{name}</p>
    </div>
    </>
);
};

export default Home;
