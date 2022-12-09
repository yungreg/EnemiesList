/*
 *todo: create enemies array of objects
 *todo: make object in the data set use teh details in the example //! note: one is nested
 *todo: create the same logic to be bale to print the example
 */

console.log("My Enemies List!");
console.log("----------");

const EnemyList = [
  {
    FirstName: "Dick",
    LastName: "Butkus",
    Offenses: ["he's just a huge jerk", "making eye contact", "loud chewing"],
    IsReallyHated: true,
  },
  {
    FirstName: "Kyojuro",
    LastName: "Rengoku",
    Offenses: ["he was killed for no reason"],
    IsReallyHated: false,
  },
  {
    FirstName: "Akaza",
    LastName: "Ishida",
    Offenses: [
      "he killed Kyojuro",
      "he makes Tanjiro sad",
      "being a HUGE jerk, overall",
    ],
    IsReallyHated: true,
  },
  {
    FirstName: "Giyuu",
    LastName: "Tomioka",
    Offenses: [
      "his lacking confidence",
      "his frigid personality",
      "off-putting",
    ],
    IsReallyHated: false,
  },
];

//!remmber template literals
const EnemiesListed = () => {
  for (const person of EnemyList) {
    if (person.IsReallyHated) {
      console.log(
        `${person.FirstName} ${person.LastName} (Really Hate this bloke).`
      );
    } else {
      console.log(
        `${person.FirstName} ${person.LastName} (This person actually rules. Wrong List.)`
      );
    }
  }
};

EnemiesListed();
