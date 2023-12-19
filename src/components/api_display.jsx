// Create a simple React component that fetches data from an API and displays it. Assume the API endpoint is https://jsonplaceholder.typicode.com/users and the component should display a list of users with their names.
 import React,{useState,useEffect} from 'react';
 

 const UserList=()=>{

    const[user,setUser]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(false)


    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/users');
         if(!response.ok){
             throw new Error("THe Api doesnot work/ data not fetched")
         }
         const data=await response.json();
         setUser(data) 
        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false)
        }
        
       }
       fetchData()

    },[])

    if(loading){
       return <p>LOading..............................</p>
    }
    if(error){
       return  <p>Error:{error.message}</p>
    }
     return(
        <div>
            <h1>User list </h1>
           <ul>
            {user.map((user)=>(
             <li key={user.id}>{user.name}</li>
            ))}
           </ul>

        </div>
     )
 }

 export default UserList
 
