import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ApiFetching = () => {

    const [users, setUsers] = useState([]);
    const [isloading, setIsloading] = useState(false)
    const [error, seterror] = useState(null)



    const fetchUsers = async () => {
        setIsloading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.error(error);
            seterror(error.message);
        }
        finally{
            setIsloading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    if(isloading) return <h2>Loading...</h2>
    if(error) return <h2 style={{color:"red"}}>{error}</h2>   

    return (
        <div>
            <h2>User List</h2>
            <ol>
                {users.map((u) => (
                    <>
                    <li key={u.id}>{u.name}- website- {u.website}</li>
                    </>
                ))}
            </ol>
        </div>
    );
}

export default ApiFetching