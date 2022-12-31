import { useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BLogDetails = () => {
    const { id } = useParams()

    const {Data:blog,error,Pending} = useFetch(`http://localhost:8000/blogs/${id}`)
    return (<>
    <div className="blog-details">
            {Pending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
                    </div>
        <h2>not found - page {id}</h2>
        </>

        );
}

export default BLogDetails;