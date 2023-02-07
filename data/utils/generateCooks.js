const { faker } = require("@faker-js/faker/locale/mk");
const fs = require("fs");

const cuisines = [
  { label: "вегетаријанска", value: "vegetarian" },
  { label: "веганска", value: "vegan" },
  { label: "кинеска", value: "chinese" },
  { label: "индијска", value: "indian" },
  { label: "мексиканска", value: "mexican" },
  { label: "италијанска", value: "italian" },
];

const cities = [
  { label: "битола", value: "bitola" },
  { label: "скопје", value: "skopje" },
  { label: "охрид", value: "ohrid" },
  { label: "прилeп", value: "prilep" },
  { label: "куманово", value: "kumanovo" },
  { label: "струга", value: "struga" },
  { label: "кавадарци", value: "kavadarci" },
  { label: "тетово", value: "tetovo" },
];

const getRandomIntegerInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

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
  const randomGender = faker.name.sexType();

  const randomImageURL = `/assets/people/${randomGender}/${getRandomIntegerInclusive(
    1,
    25
  )}.jpg`;

  const randomCity = { ...selectRandomElementsFromArray(cities, 1) };

  const cook = {
    id: faker.datatype.uuid(),
    date_created: faker.date.past(),
    gender: randomGender,
    first_name: faker.name.firstName(randomGender),
    last_name: faker.name.lastName(randomGender),
    cuisines: [...selectRandomElementsFromArray(cuisines, 3)],
    city: randomCity["0"],
    image_url: randomImageURL,
    rating: getRandomIntegerInclusive(2, 5),
    isBadge: faker.datatype.boolean(),
  };

  cooks.push(cook);
}

const cooksStringified = JSON.stringify(cooks);

fs.writeFileSync("../cooks.json", cooksStringified, "utf-8");
