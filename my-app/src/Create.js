import { useState } from "react";

const Create = () => {
    const [Title, setTitle] = useState("");
    const [Body, setBody] = useState("");
    const [Author, setAuthor] = useState("mario");
    const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {Title , Body, Author};
    console.log(blog)
}

    return (
    <div className="create">
        <h2>Hi There</h2>
        <form onSubmit={handleSubmit} >
            <label htmlFor="">Blog title</label>
            <input type="text"
            required
            value={Title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <label>Blog Body</label>
            <textarea required
            value={Body}
            onChange={(e)=>setBody(e.target.value)}
            ></textarea>
            <label htmlFor="">Blog author</label>
            <select
            value={Author}
            onChange={(value) => setAuthor(value.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            <button>add blog</button>
            <p>{Title}</p>
            <p>{Body}</p>
            <p>{Author}</p>

        </form>
        </div>
        );
}

export default Create;