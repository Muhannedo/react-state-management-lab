import { useState } from "react";
import "./App.css";

const App = () => {
  // Display the list of zombieFighters by mapping the array into the UI of App.jsx. (We've provided some helpful CSS assuming you use a ul and lis)
  //
  // Each character should have an image, name, price, strength, and agility.
  // Each character's UI should also have an Add button to add them to your team.
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  // Initialize a new state variable named totalStrength. Set its initial value to 0
  const [totalStrength, setTotalStrength] = useState(0);
  // Start by defining a state variable named totalAgility, initializing it at 0.
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://img.freepik.com/premium-vector/zombie-apocalypse-survivor-vector-white-background_889056-55741.jpg",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://i.pinimg.com/236x/7f/2c/d4/7f2cd4b7a2b04874eb8a410ad2b8ec43.jpg",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ];
  // Create a function named handleAddFighter that takes a fighter as an argument.
  // The function should check if the player has enough money to buy the fighter.
  // If the player has enough money, add the fighter to the team and update the money, totalStrength, and totalAgility.
  // If the player doesn't have enough money, log "Not enough money" to the console.
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
    } else {
      console.log("Not enough money");
    }
  };
  // Create a function named handleRemoveFighter that takes an index as an argument.
  // The function should remove the fighter at the given index from the team array.
  // The function should also update the money, totalStrength, and totalAgility by subtracting the removed fighter's price, strength, and agility.
  const handleRemoveFighter = (index) => {
    const removedFighter = team[index];
    setTeam(team.filter((fighter, i) => i !== index));
    setMoney(money + removedFighter.price);
    setTotalStrength(totalStrength - removedFighter.strength);
    setTotalAgility(totalAgility - removedFighter.agility);
  };

  return (
    <>
      <h1>Zombie Fighter</h1>
      <div>
        <h2>Money: ${money}</h2>
        <h2>Total Team Strength: {totalStrength}</h2>
        <h2>Total Team Agility: {totalAgility}</h2>
        <h3>Zombie Fighters</h3>
        <ul>
          {zombieFighters.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt={fighter.name} />
              <p>Name: {fighter.name}</p>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
        <h3>Your Team</h3>
        {team.length === 0 ? (
          <p>Pick some team members! and KILL those Zombies </p>
        ) : (
          <ul>
            {team.map((fighter, index) => (
              <li key={index}>
                <img src={fighter.img} alt={fighter.name} />
                <p>Name: {fighter.name}</p>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
