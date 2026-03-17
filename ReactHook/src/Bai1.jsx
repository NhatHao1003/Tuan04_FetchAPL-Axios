import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Bai1() {
  const [user, setUser] = useState({name :'Noname', email : 'mail@', age : 0});
    function handleChange(event) {
        const {name, value} = event.target;
        setUser({...user, [name] : value})
    }

  return (
    <>
        <div>
            <p>Name</p>
            <input type="text" name='name' value={user.name} onChange={handleChange} />
            <p>Email</p>
            <input type="text" name='email' value={user.email} onChange={handleChange} />
            <p>Age</p>
            <input type="text" name='age' value={user.age} onChange={handleChange} />
        </div>
        
        <div>
            <h3>User data:</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age:  {user.age}</p>
        </div>
      
      
    </>
  )
}

export default Bai1