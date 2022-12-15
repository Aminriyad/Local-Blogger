const BlogList = ({source,title,Deleter}) => {

// const blogs =props.source;
// const title = props.title;

    return (
        <>
            <div className="blog-list">
                <h2>{title}</h2>
                {source.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2> {blog.title} </h2> <p> Written by {blog.author} </p>
                        <button onClick={()=>Deleter(blog.id)}>Delete Blog</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BlogList;
