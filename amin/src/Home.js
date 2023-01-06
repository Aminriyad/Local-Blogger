import BlogList from "./BlogList";
import useFetch from "./usefetch";
const Home = () => {

const {Data:blogs,error,Pending} = useFetch("http://localhost:8000/blogs")
return (
    <>
    <div className="home">
    {Pending && <div>Loading ...</div>}
    {error && <div>{error}</div>}
    {blogs &&  <BlogList source={blogs} title="all blogs's"  /> }
    </div>
    </>
);
};

export default Home;
