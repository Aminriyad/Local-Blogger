import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

const [blogs, setblogs] = useState(null);
const [name , setName] = useState("mario")
const [Pending, setPending ] = useState(true);
const [error, setError] = useState(null)

useEffect(()=>{
    fetch("http://localhost:1111/blogs")
    .then(res => {if(!res.ok){throw Error("cant get data for ya")}
    /*
    1. notice that it only works if you change blogs ot blogss not the number
    2. throw Error("cant get data for ya") shows only if fetching was successful (right local host, wrong name like blogss )
    but inside the object they couldn't find blogss so the throw go throught
    3. respone, res, is only if the data searched for is there, success in fetching is neccasery, otherway massege will be "failed to fetch"*/
    return res.json();})
    .then(data => {
        console.log(data); 
        setblogs(data) ;
        setPending(false);
        setError(null)}
    /*
    1. console.log(data), return the data to th console,
    2. setblogs(data), makings blogs = whatever the fuck fetch("http://localhost:1111/blogs") retruns,
    3. setPending(false) will make it a falsy value and <div>Loading ...</div> won't go throw*/
    ).catch(err =>{
        setPending(false)
        console.log(setError(err.message))})
    },[])///if the value between [] changes, the useEffect will be act
return (
    <>
    <div className="home">
    {Pending && <div>Loading ...</div>}
    {Error && <div>{error}</div>}
    {blogs &&  <BlogList source={blogs} title="all blogs's"  /> }
    <button onClick={()=>setName('luigi')}>Change Name</button>
    <p>{name}</p>
    </div>
    </>
);
};

export default Home;
