import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";
const Home = () => {

const {Data:blogs,error,Pending} = useFetch("https://localhost:8000")
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
