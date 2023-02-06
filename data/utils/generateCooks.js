const { faker } = require("@faker-js/faker/locale/mk");
const fs = require("fs");

const cuisines = [
  "vegetarian",
  "vegan",
  "chinese",
  "indian",
  "mexican",
  "italian",
];

const cities = [
  "bitola",
  "skopje",
  "ohrid",
  "prilep",
  "kumanovo",
  "struga",
  "kavadarci",
  "tetovo",
];

function getRandomIntegerInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const selectRandomElementsFromArray = (arrayElements = [], repeatTimes = 1) => {
  const randomIntegerFromArrayLength = () =>
    Math.floor(Math.random() * arrayElements.length);

  const randomlySelectedElements = [];

  const selectRandomUniqueElement = () => {
    const randomlySelected = arrayElements[randomIntegerFromArrayLength()];

    if (randomlySelectedElements.indexOf(randomlySelected) === -1) {
      randomlySelectedElements.push(randomlySelected);
    } else {
      selectRandomUniqueElement();
    }
  };

  for (let i = 0; i < repeatTimes; i++) {
    selectRandomUniqueElement();
  }

  return randomlySelectedElements;
};

const cooks = [];

for (let i = 0; i < 40; i++) {
  const cook = {
    id: faker.datatype.uuid(),
    dateCreated: faker.date.past(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    cuisines: [...selectRandomElementsFromArray(cuisines, 4)],
    city: [...selectRandomElementsFromArray(cities, 1)].join(""),
    image_url: faker.image.avatar(),
    rating: getRandomIntegerInclusive(2, 5),
  };

  cooks.push(cook);
}

const cooksStringified = JSON.stringify(cooks);

fs.writeFileSync("../cooks.json", cooksStringified, "utf-8");
