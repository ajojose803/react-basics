import { useState } from 'react'
import useFetch from './useFetch';
import './index.css'


export default function ProfileCard() {
    const [id, setId] = useState(1);
    const { data: user, isPending, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(user)

    const handleIncrement = () => {
        if (id < 10) {
            setId(id + 1)
        } else {
            setId(10);
        }
    }

    function handleDecrement(){
        if(id > 1) {
            setId( id - 1)
        } else {
            setId(1);
        }
    }
    return (
        <div className="profileCardContainer">
            {isPending && <div> loading...</div>}
            {error && <div> {error} </div>}
            {user && (
                <div className="profile_card" key={user.id}>
                    <h1> {id}</h1>
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <div className="buttonContainer">
                        <button onClick={handleIncrement}> +</button>
                        <button onClick={handleDecrement}>-</button>
                    </div>
                </div>
            )}

        </div>
    )
}