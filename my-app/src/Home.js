import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
const [blogs, setblogs] = useState([
    {title: "titleone",body: "bodyone",author: "authorone",id: 1},
    {title: "titletwo",body: "bodytwo",author: "authortwo",id: 2},
    {title: "titlethree",body: "bodythree",author: "authorthree",id: 3,}
]);

const [name , setName] = useState("mario")
const Deleter = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setblogs(newBlogs)
}
useEffect(()=>{
    console.log("kyjtdiyt")
    console.log(blogs)

},[name])//if the value between [] changes, the useEffect will be act
return (
    <>
    <div className="home">
    <BlogList source={blogs} title="all blogs's" Deleter={Deleter}/>
    <button onClick={()=>setName('luigi')}>Change Name</button>
    <p>{name}</p>
    </div>
    </>
);
};

export default Home;
