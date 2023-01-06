import { useState, useEffect } from "react";
const useFetch = (url) => { //we need to pass a url as a parameter so the custom hook can apply ot to whatever the fuck it can pass
const [Data, setData] = useState(null);//changed from blogs to Data becuase it needs to be more reusable
const [Pending, setPending ] = useState(true);
const [error, setError] = useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res => {if(!res.ok){throw Error("cant get data for ya")}
        /*
        1. notice that it only works if you change blogs ot blogss not the number
        2. throw Error("cant get data for ya") shows only if fetching was successful (right local host, wrong name like blogss )
        but inside the object they couldn't find blogss so the throw go throught
        3. respone, res, is only if the data searched for is there, success in fetching is neccasery, otherway massege will be "failed to fetch"*/
        return res.json();})
        .then(data => {
            console.log(data);
            setData(data) ;
            setPending(false);
            setError(null)}
        /*
        1. console.log(data), return the data to th console,
        2. setblogs(data), makings blogs = whatever the fuck fetch("http://localhost:1111/blogs") retruns,
        3. setPending(false) will make it a falsy value and <div>Loading ...</div> won't go throw*/
        ).catch(err =>{
            setPending(false)
            console.log(setError(err.message))})
        },[url])///if the value between [] changes, the useEffect will be act
        return({Data,Pending,error})
}

export default useFetch;