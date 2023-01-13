// @ts-nocheck
// const dog = {
//   name: "Thief",
//   legs: 4,
//   color: "brown",
//   age: 6,
//   bark: () => {
//     return "woof woof";
//   },
// };

// dog.breed = "";
// dog.getDogInfo = () => {};
// console.log(dog);

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// let mostSkillsUser;
// let maxSkillCount = 0;

// const newArr = names.map((name) => {
//   let arrSkills = users[name].skills;
//   let skillsLength = arrSkills.length;
//   return skillsLength;
// });
// console.log(newArr);
// let mostSkillsPerson = Math.max(...newArr);
// console.log(`most skills person is ${}`);

// for (const user in users) {
//   let userSkillLength = users[user].skills.length;
//   if (userSkillLength > maxSkillCount) {
//     maxSkillCount = userSkillLength;
//     users[user].name = user;
//     mostSkillsUser = { ...users[user], name: user };
//     mostSkillsUser = users[user];
//   }
// }

// let loggedInArr = [];
// for (const user in users) {
//   let loggedIn = users[user].isLoggedIn;
//   if (loggedIn) {
//     loggedInArr.push(loggedIn);
//   }
// }

// let newPoints = [];
// for (const user in users) {
//   let maxPoints = users[user].points;
//   if (maxPoints === 50) {
//     newPoints.push(user);
//   }
// }

// let mernStackUsers = [];
// for (const user in users) {
//   let mernSkills = users[user].skills;
//   if (
//     mernSkills.includes("MongoDB") &&
//     mernSkills.includes("Express") &&
//     mernSkills.includes("React") &&
//     mernSkills.includes("Node")
//   ) {
//     mernStackUsers.push(user);
//   }
// }

// let newUsers = Object.assign(
//   {
//     Yunus: {
//       email: "yns@yns.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap"],
//       age: 28,
//       isLoggedIn: false,
//       points: 45,
//     },
//   },
//   users
// );

// const countries = [
//   {
//     name: "Turkey",
//     capital: "Ankara",
//     populations: 82000000,
//     languages: ["Turkish"],
//   },
//   {
//     name: "USA",
//     capital: "Washington D.C",
//     populations: 300000000,
//     languages: ["English", "Spanish"],
//   },
// ];
// const personAccount = {
//   firstName: "John",
//   lastName: "Doe",
//   incomes: [
//     {
//       description: "Salary",
//       amount: 30000,
//     },
//     {
//       description: "Freelance Work",
//       amount: 20000,
//     },
//   ],
//   expenses: [
//     {
//       description: "rent",
//       amount: 10000,
//     },
//     {
//       description: "bills",
//       amount: 15000,
//     },
//   ],
//   totalIncome: () => {
//     let total = 0;
//     personAccount.incomes.forEach((income) => {
//       total += income.amount;
//     });
//     return total;
//   },
//   totalExpense: () => {
//     let total = 0;
//     personAccount.expenses.forEach((expense) => {
//       total += expense.amount;
//     });
//     return total;
//   },
//   accountInfo: () => {
//     console.log(`name: ${personAccount.firstName} ${personAccount.lastName}`);
//     console.log(`Total Income: ${personAccount.totalIncome()}`);
//     console.log(`Total Expense: ${personAccount.totalExpense()}`);
//     console.log(`Account Balance: ${personAccount.accountBalance()}`);
//   },
//   addIncome: (desc, amount) => {
//     personAccount.incomes.push({ desc, amount });
//   },
//   addExpense: (desc, amount) => {
//     personAccount.expenses.push({ desc, amount });
//   },
//   accountBalance: () => {
//     return personAccount.totalIncome() - personAccount.totalExpense();
//   },
// };

// personAccount.addIncome("home", 5000);
// personAccount.addExpense("gym", 3000);
// for (const country in countries) {
//   console.log(`Country Name: ${countries[country].name}`);
//   console.log(`Capital: ${countries[country].capital}`);
//   console.log(`Population: ${countries[country].populations}`);
//   console.log(`languages: ${countries[country].languages}`);
//   console.log(`-----------------------`);
// }
// let keys = Object.keys(newUsers);
// let values = Object.values(newUsers);
// console.log(newPoints);
// console.log(loggedInArr.length);
// console.log(mernStackUsers);
// console.log(mostSkillsUser);
// console.log(newUsers);
// console.log(keys);
// console.log(values);
// personAccount.accountInfo();

const func = (number) => number ** 2;

const cube = (cb, number) => {
  return cb(number) * number;
};

console.log(cube(func, 3));

const a = (num1) => {
  const b = (num2) => {
    const c = (num3) => {
      return num1 + num2 + num3;
    };
    return c;
  };
  return b;
};

console.log(a(5)(4)(3));

const nums = [1, 3, 5, 7, 9];

let total = 0;
let calculate = (number) => {
  total += number;
};
// nums.forEach((number) => { // high order function
//   total += number;
// });

// nums.forEach(calculate); // hem üstteki hem bu kullanım doğru.
console.log(total);

const sayHello = () => console.log("hello!");

let total2 = 0;
const sumNums = (num) => {
  num += 2;
  total2 += num;
  console.log(total2);
};
// const interval = setInterval(() => sumNums(0), 2000);
// setInterval(() => sumNums(0), 2000);

//  const timeout = setTimeout(() => {
//   clearInterval(interval);
//   console.log("işlem iptal edildi!");
// }, 4000);

// setTimeout(() => {
//     clearTimeout(timeout)
//     console.log('timeout işlemi iptal edildi. interval devam edecek..');
// },3000)

let words = ["turkey", "Spain", "FRANce"];

words.forEach((word) => console.log(word.toUpperCase()));

let nums2 = [1, 2, 3, 4, 5];

let a3 = nums2.map((num, index) => {
  if (num > 2) {
    console.log(num);
  }
  return num;
});

console.log(nums.every((num) => typeof num === "number"));

//---------------------------------------------------------

/* foreach(): diziyi gezip işlem yapmak için kullanılır.
   map(): array veya objeleri gezip işlem yapmak için kullanılır ve yeni bir array veya obje döndürür.
   filter(): istediğimiz koşullara uygun elemanları döndürür.
   reduce(): dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere dönüştürür. Metodun dönüş değeri, ilk parametresi olan accumulator'da saklanır. */

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const callback = (country) => {
  console.log(country);
};

countries.forEach((country) => console.log(country));
console.log("\n");
countries.forEach(callback);
console.log("\n");
names.forEach((name) => console.log(name));
console.log("\n");
numbers.forEach((number) => console.log(number));
console.log("\n");
const uppercase = countries.map((country) => country.toUpperCase());
console.log(uppercase);
console.log("\n");

const countryLength = countries.map((country) => country.length);
console.log(countryLength);
console.log("\n");
const squareNumbers = numbers.map((number) => Math.pow(number, 2));
console.log(squareNumbers);
console.log("\n");
const uppercaseNames = names.map((name) => name.toUpperCase());
console.log(uppercaseNames);
console.log("\n");
const prices = products.map((product) => product.price);
console.log(prices);
console.log("\n");
const lands = countries.filter((country) => country.includes("land"));
console.log(lands);
console.log("\n");
const sixCharacter = countries.filter((country) => country.length === 6); // use ES6 arrow function
// const sixCharacter2 = countries.filter(function (country) { // alternative
//   return country.length === 6;
// });
console.log(sixCharacter);
console.log("\n");
const sixOrMore = countries.filter((country) => country.length >= 6);
console.log(sixOrMore);
console.log("\n");
const startsWithE = countries.filter((country) => country.startsWith("E"));
console.log(startsWithE);
console.log("\n");
const onlyPrice = products.filter(
  (product) => typeof product.price === "number" && product.price
);
console.log(onlyPrice);
console.log("\n");
const justPrice = products
  .filter((product) => typeof product.price === "number" && product.price)
  .map((product) => product.price);
console.log(justPrice);

const getStringLists = (array) => {
  let newArr = array.filter((item) => typeof item === "string" && item);
  return newArr;
};

console.log(getStringLists(["str1", 2, "str2"]));
console.log("\n");
const numSums = numbers.reduce((prevVal, currentVal) => {
  return prevVal + currentVal;
}, 0);
console.log(numSums);
console.log("\n");

const sentence = countries.reduce((acc, country, index) => {
  return acc + country;
}, "");
console.log(sentence);
console.log("\n");

const myProducts = [
  {
    name: "Macbook Pro",
    brand: "Apple",
    price: 1,
  },
  {
    name: "JBL Flip 5 Pro",
    brand: "Harman Kardon",
    price: 2,
  },
  {
    name: "Harman KArdon Aura Studio 2",
    brand: "Harman Kardon",
    price: 3,
  },
  {
    name: "Huawei GT-WATCH2 Pro",
    brand: "Huawei",
    price: 4,
  },
  {
    name: "Huawei Matebook pro d16",
    brand: "Huawei",
    price: 5,
  },
];

// let group = "brand";
// let groupBy = myProducts.reduce((acc, product) => {
//   let key = product[group]; // gezerek her bir brand değerini buluyor.
//   console.log(acc);
//   if (!acc[key]) { // toplayıcıda bu keye ait bir değer var mı ? yoksa boş dizi oluştur.
//     acc[key] = [];
//   }
//   acc[key].push(product);
//   return acc;
// }, {});

// console.log(groupBy);

const groupBy = (array, property) => {
  return array.reduce((acc, product) => {
    let key = product[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(product);
    return acc;
  }, {});
};

console.log(groupBy(myProducts, "brand"));

// const getEvenNumbsPow = numbers.filter(number => number % 2===0).map(number => Math.pow(number,2));
// console.log(getEvenNumbsPow);
// const getEvenNumbsPowReducer = numbers.reduce((acc, number) => {
//   if (number % 2 === 0) {
//     acc.push(Math.pow(number, 2));
//   }
//   return acc;
// }, []);

// console.log(getEvenNumbsPowReducer);

const getConcatenateCountry = countries.reduce((acc, country, index) => {
  if (index === countries.length - 1) {
    return `${acc} and ${country} are North Europan Countries`;
  } else if (index === countries.length - 2) {
    return `${acc} ${country},`;
  } else {
    return `${acc},${country},`;
  }
});

console.log(getConcatenateCountry);

/* some(): Bazı elemanların tek bir açıdan benzer olup olmadğını kontrol eder. Tek biri bile şartı sağlasa değer true döner. Sağlamazsa false döner.
  every(): Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol eder. Mesela verilen dizideki sayıların hepsinin number tipinde olması gerek. Bunun için every kullanılabilir. Boolean döndürür.
*/

const checkNamesWithSome = names.some((name) => name.length > 7);
console.log(checkNamesWithSome);
const checkNamesContain = countries.every((country) =>
  country.includes("land")
);
console.log(checkNamesContain);

/*
    find():verilen bir koşula uyan ilk elemanı döndürür.
    findIndex(): verilen bir koşula uyan ilk elemanın index değerini döndürür.
*/

const countryLetter = countries.find((country) => country.length === 6);
console.log(countryLetter);
console.log("\n");
const countryLetterIndex = countries.findIndex(
  (country) => country.length === 6
);
console.log(countryLetterIndex);
console.log("\n");
const countryLetterIndexNorway = countries.findIndex(
  (country) => country === "Norway"
);
console.log(countryLetterIndexNorway);
console.log("\n");
const countryLetterIndexRussia = countries.findIndex(
  (country) => country === "Russia"
);
console.log(countryLetterIndexRussia);
console.log("\n");

const totalPrice = products
  .filter((product) => typeof product.price === "number")
  .map((product) => product.price)
  .reduce((acc, price) => {
    return acc + price;
  }, 0);
console.log(totalPrice);
console.log("\n");

const totalPriceCall = (products) => {
  let totalPrice = products
    .filter((product) => typeof product.price === "number")
    .map((product) => product.price)
    .reduce((acc, price) => {
      return acc + price;
    }, 0);
  return totalPrice;
};

console.log(totalPriceCall(myProducts));
console.log("\n");

let letters = countries.filter((country) =>
  country.toLocaleLowerCase().endsWith("land")
);
console.log(letters);
const groupByCountries = (array) => {
  let newArr = array.reduce((acc, country) => {
    if (country.toLocaleLowerCase().endsWith("land")) {
      acc.push({ island: country });
    } else if (country.toLocaleLowerCase().includes("en")) {
      acc.push({ land: country });
    }
    return acc;
  }, []);
  return newArr;
};

console.log(groupByCountries(countries));

function firstLetterFrequency(countries) {
  const frequency = {};
  const result = [];
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const firstLetter = country[0];
    if (frequency[firstLetter]) {
      frequency[firstLetter]++;
    } else {
      frequency[firstLetter] = 1;
    }
  }
  for (const letter in frequency) {
    result.push({ letter: letter, frequency: frequency[letter] });
  }
  return result;
}
console.log(firstLetterFrequency(countries));