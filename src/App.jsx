import './App.css'
import './index.css'
import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  
  function handleClick(){
    // click function
  }
  
  const featuredPup = puppies.find((pup) => pup.id === featPupId) //finds the pup.id that matches the selected featPupId
  console.log(featuredPup);
  
  return (
      <div className='App'>
       {
        puppies.map((puppy) => {
          return (
            <div className='puppiesList'>
          <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
            </p>
            </div>
          );
        })}
        { featPupId && (
          <div className='featuredPuppy'>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>  
          </div>
        )}
      </div>
  );
}

export default App
