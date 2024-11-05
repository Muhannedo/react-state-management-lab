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
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQFy6hEZZ6kXe69wJ3U7cmT2jPNhvhbVuMYUa05uEP4hCGlswm",
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl-6HaUrDgdx0oHCD9LR3vuzSjJNNTm6P6g&s",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvr2L8DwdLFh_QKki51H8hcIwdm40Tw7zoA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvr2L8DwdLFh_QKki51H8hcIwdm40Tw7zoA&s",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://i.pinimg.com/736x/0b/24/c5/0b24c57eef3083ba30fce7fc41e24fdf.jpg",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TIrKoPL3C7ocvLlaZBTOqI0gUFeYJwtaTQ&s",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://i.pinimg.com/originals/06/5a/86/065a86a262dc42fc41d1989b69aa52c1.png",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://i.pinimg.com/736x/e6/c7/66/e6c766f721132fb9802e429f537866b5.jpg",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://i.pinimg.com/564x/aa/5c/c6/aa5cc63243a52b01300836ad46b197a9.jpg",
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
