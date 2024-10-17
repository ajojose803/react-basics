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

    function handleDecrement() {
        if (id > 1) {
            setId(id - 1)
        } else {
            setId(1);
        }
    }
    return (
        <div className="bg-gray-100 flex flex-row justify-center">
            {isPending && <div> loading...</div>}
            {error && <div> {error} </div>}
            {user && (
                <div className="" key={user.id}>
                    <h1 className=' mt-5 font-sans text-2xl font-bold flex justify-center'> {id}</h1>
                    <div className=' py-10 mt-5 bg-emerald-600 '>
                        <h1 className='text-slate-100 font-sans text-4xl  font-bold flex justify-center'>{user.name}</h1>
                        <p className='font-mono text-base flex justify-center' >Email: {user.email}</p>
                    </div>
                    <div className=" mt-5 flex flex-col">
                        <button className=" mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-screen"
                            onClick={handleIncrement}> +</button>
                        <button className=" mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-screen"
                            onClick={handleDecrement}>-</button>
                    </div>
                </div>
            )}

        </div>
    )
}