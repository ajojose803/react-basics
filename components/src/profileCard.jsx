import './index.css'

export default function ProfileCard({ users }) {

    return (
        <div className="profileCardContainer">

        {users.map(user => (
            
            <div className="profile_card" key={user.id}>
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                </div>
            ))
        }

        </div>
    )
}