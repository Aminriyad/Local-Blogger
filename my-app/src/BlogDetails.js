import { useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BLogDetails = () => {
    let  {id}= useParams();
    const {Data:blogs,error,Pending} = useFetch("http://localhost:8000/blogs"+id)
    return (
        <div className="blog-details">
            {Pending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by{blogs.author}</p>
                    <div>{blogs.body}</div>
                </article>
            )}
                    </div>
        );
}

export default BLogDetails;