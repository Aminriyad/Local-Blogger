//act like I'm not here
const Capitals = ({source,title}) => {
    return (
        <>
        <div className="blog-list">
            <h1>{title}</h1>
            {source.map(city =>
                <div key={city.id}>
                    <h1>{city.name}</h1>
                    <p> the capital is {city.capital}</p>
                </div>)}
            </div>
            </>
    );}

export default Capitals;

// useEffect(()=>{
//     fetch("http://localhost:8000/capitals")
//     .then(res => {if(!res.ok){throw Error("cant get data for ya")}
//     /*
//     1. notice that it only works if you change blogs ot blogss not the number
//     2. throw Error("cant get data for ya") shows only if fetching was successful (right local host, wrong name like blogss )
//     but inside the object they couldn't find blogss so the throw go throught
//     3. respone, res, is only if the data searched for is there, success in fetching is neccasery, otherway massege will be "failed to fetch"*/
//     return res.json();})
//     .then(dater => {
//         console.log(dater);
//         setcaps(dater) ;
//         setPending(false);
//         setError(null)}
//     /*
//     1. console.log(data), return the data to the console,
//     2. setblogs(data), makings blogs = whatever the fuck fetch("http://localhost:1111/blogs") retruns,
//     3. setPending(false) will make it a falsy value and <div>Loading ...</div> won't go throw*/
//     ).catch(err =>{
//         setPending(false)
//         console.log(setError(err.message))})
//     },[])///if the value between [] changes, the useEffect will be act

//     {caps && <Capitals source={caps} title="all capitals"/>}
//     import Capitals from "./caps";
// const [caps, setcaps] = useState(null);