const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let team = players;
let team1 =[...players];
let cap1 = Object.assign({}, person);

// Example: Modifying the original players array
players.push("Tom");

// Example: Modifying the cap1 object
cap1.name = "Captain John Doe";

// Example: Modifying the team array (since it's a reference to players)
team.pop();

// Example: Modifying the team1 array (does not affect the original players array)
team1.push("Eve");

// console.log("Original players array:", players);
// console.log("Original person object:", person);
// console.log("Reference to players (team):", team);
// console.log("Copy of players (team1):", team1);
// console.log("Copy of person (cap1):", cap1);

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
