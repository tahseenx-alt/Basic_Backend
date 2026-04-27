// Callback 

function greeting(name ,age){
    console.log(`Welcome ${name} : ${age} `);
   saygoodbye();
}

function saygoodbye(){
    console.log("See you again good bye ");
}

greeting("Alic",56)

// Arrow Function

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));

// Destructuring
// we use Destructuring when we need a specific ones from ones.
const colors = ["red", "blue", "green"];

// The first variable gets the first item, second gets the second...
const [firstColor, secondColor ,...restcolor] = colors;

console.log(firstColor);  // "red"
console.log(secondColor); // "blue"
console.log(restcolor); // green
// A function returning an object
function getStock() {
  return { id: 101, price: 500, symbol: "AAPL" };
}

// Unpack only what you need right at the start
const { price } = getStock();

console.log(price); // 500

// Spread 
//1.with array
const fruit = ["Apple","WaterMelon","Grapes"]
const veggies = ["Potato","Onion","Chilli"]

const food = [...fruit,...veggies]

console.log(food);

//2.object

const user = {user:"tahseen",age:36}

const updateUser = {
    ...user,
    city:"Banglore",
}
console.log(updateUser);


// try catch
