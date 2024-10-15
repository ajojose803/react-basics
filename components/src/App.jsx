import './index.css'
import ProfileCard from './profileCard';

export default function App() {
  const users = [
    { name: "Leanne Graham", email: "leannegraham@gmail.com", id: 1 },
    { name: "Edwin Howell", email: "ervinhowell@gmail.com", id: 2 },
  ]
  return (

    <div className="App">
      <ProfileCard
        users={users} />

    </div>
  );
}