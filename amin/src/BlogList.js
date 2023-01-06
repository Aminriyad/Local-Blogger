import { Link } from "react-router-dom";


const BlogList = ({source,Title}) => {

// const blog =props.source;
// const title = props.title;

    return (
        <>
            <div className="blog-list">
                <h2>{Title}</h2>
                {source.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                        <h2> {blog.Title} </h2> <p> Written by {blog.Author} </p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BlogList;
