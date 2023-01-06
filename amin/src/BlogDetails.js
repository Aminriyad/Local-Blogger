import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BLogDetails = () => {
    const { id } = useParams()
    const {Data:blog,error,Pending} = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()
            const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        //   delete our current is of the page that we are in and delete it 
        //   from the database so we dont see it in the main page.
        // "which was imported from the database"
        }).then(() => {
        history.push("/")
        })
    }
    return (<>
    <h1>Your Page Number is {id}</h1>
    <div className="blog-details">
            {Pending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.Title}</h2>
                    <p>Written by {blog.Author}</p>
                    <div>{blog.Body}</div>
                    <div>{blog.Time}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
                    </div>
        </>

        );
}

export default BLogDetails;