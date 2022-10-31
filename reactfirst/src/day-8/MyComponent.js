import React,{useState,useEffect} from "react";
// import users from "./myapi";

export function MyComponent(){

    const [error,setError] =useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const[items, setItems] = useState([]);

useEffect(() =>
{
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(
        (result) =>{
            setIsLoaded(true);
            setItems(result)
        },
        (error)=>{
            setIsLoaded(true);
            setError(error);
        }
    )
},[])

if(error){
    return <div>Error :{error.message}</div> 
}else if (!isLoaded) {
    return <div>Loading...</div>;
}
else{
    return(
        <div>
            <table>
                {items.map(item=>
                    <li>{item.id}
                        {item.name}
                    </li>)}
                </table>
        </div>
    )
}

}