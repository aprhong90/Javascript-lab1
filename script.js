const firstName = "April";
const age = 31;
const birthday = "April 12";
const pineapplePizza = "true";
const lifeEvents = [
  "I was born in Seoul, South Korea.",
  "I have one sibling",
  "I have a pup.",
  "I came to America in 2016.",
];

if (pineapplePizza) {
  console.log(
    `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    ` My name is ${firstName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

const hours = 50;
const wage = 10;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5 It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

if (hours <= 40) {
  const pay = hours * wage;
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `your paycheck comes out to ${
      hours * wage
    }. It will take ${weeks} weeks to make $1,000,000`
  );
} else {
  const pay = wage * 40 + (hours - 40) * (wage * 1.5);
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `your paycheck comes out to ${pay}. It will take ${weeks} weeks to make $1,000,000`
  );
}
