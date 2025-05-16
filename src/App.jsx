import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // create a state variable named team and set initial state to []
  const [team, setTeam] = useState([]);

  //Create a new state variable named money and set the initial state to 100
  const [money, setMoney] = useState(100);

  //Create a new state variable named zombieFighters and set the initial state to the following array of objects
  const [zombieFighters, setZombieFighters] = useState([
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]);
  
  // Create a regular variable named totalStrength and calculate the team strength using reduce() method
  const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0);
  
  // Create a variable for the total agility of your team using the reduce() method
  const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0);

  // Create a function named handleAddFighter()
  const handleAddFighter = (fighter) => {
    // if there's not enough money, prevent purchase
    if (money < fighter.price) {
      console.log("You don't have enough money!");
      return;
    }

  // add the fighter to the team
  setTeam([...team, fighter]);

  // remove the fighter from the menu and update the zombieFighters
  setZombieFighters((fighters) => fighters.filter((f) => f.id !== fighter.id));

  // subtract the character's price from current money
  setMoney((money) => money - fighter.price);
}


  return (
    <>
    <h1>Zombie Warriors</h1>
    <div>
      <h2>My Money: ${money}</h2>
    </div>
    <ul>
      {zombieFighters.map((fighter) => (
        <li key={fighter.id}>
          <img src={fighter.img} />
          <h2>{fighter.name}</h2>
          <p>Price: ${fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddFighter(fighter)}>Add Fighter</button>
        </li>
      ))}
    </ul>
    
    <div className='team-details'>
      <h2>My Team</h2>
      <h3>Total Team Strength: {totalStrength}</h3>
      <h3>Total Team Agility: {totalAgility}</h3>
    </div>
    
    {team.length === 0 ? ( 
      <p>Please choose and add your fighters!</p>
    ) : (
      <ul>
        {team.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
          </li>
        ))}
      </ul>
    )}
    </>
  )
}

export default App;
