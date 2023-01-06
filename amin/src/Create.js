import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [Title, setTitle] = useState("");
    const [Body, setBody] = useState("");
    const [Author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false)
    const  [Time, setTime]=useState(new Date().toLocaleString())
    const history = useHistory();
    const handleSubmit = (e) => {
    // setTime(JSON.stringify(Date.toLocaleString()))
    e.preventDefault();
    const blog = {Title , Body, Author,Time};
    setIsPending(true)
    fetch("http://localhost:8000/blogs" ,{
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(blog)
}).then(() => {
    console.log("new one added successfully");
    setIsPending(true);
    history.push("/")//send the User to the main page of the website or "www.amin.com/""
})//to close the .then
}//to close the function handleSubmit

    return (
    <div className="create">
        <h2>Hi There</h2>
        <form  onSubmit={handleSubmit} >
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
            <textarea required
            value={Author}
            onChange={(e)=>setAuthor(e.target.value)}
            ></textarea>
            {/* <select
            value={Author}
            onChange={(value) => setAuthor(value.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select> */}
            {!isPending && <button>add blog</button>}
            {isPending && <button disabled>Adding Blog.....</button>}
            <p>{Title}</p>
            <p>{Body}</p>
            <p>{Author}</p>

        </form>
        </div>
        );
}

export default Create;