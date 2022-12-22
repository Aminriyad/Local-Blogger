import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";
const Home = () => {

const {Data:blogs, Pending, error} = useFetch("http://localhost:1111/blogs");
return (
    <>
    <div className="home">
    {Pending && <div>Loading ...</div>}
    {Error && <div>{error}</div>}
    {blogs &&  <BlogList source={blogs} title="all blogs's"  /> }
    </div>
    </>
);
};

export default Home;
