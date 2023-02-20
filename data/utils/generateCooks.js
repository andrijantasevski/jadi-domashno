const { faker } = require("@faker-js/faker/locale/mk");
const fs = require("fs");
const pc = require("picocolors");

console.log(pc.yellow("Script started!"));
console.log(pc.blue("Generating cooks..."));

const cuisines = [
  { label: "вегетаријанска", value: "vegetarian" },
  { label: "веганска", value: "vegan" },
  { label: "азијска", value: "asian" },
  { label: "бургери", value: "burger" },
  { label: "италијанска", value: "italian" },
  { label: "салати", value: "salad" },
  { label: "пица", value: "pizza" },
];

const mainCuisines = [
  "Вегетаријанска храна",
  "Веганска храна",
  "Азијска храна",
  "Бургери",
  "Италијанска храна",
  "Салати",
  "Пици",
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

const availability = [
  { label: "Достапно веднаш", value: "immediately" },
  { label: "Достапно утре", value: "tomorrow" },
  { label: "Достапно по порачка", value: "order" },
];

const deliveryType = [
  { label: "Со достава", value: "delivery" },
  { label: "Со подигање", value: "pickup" },
];

const allergens = [
  { label: "Јатки", value: "nuts" },
  {
    label: "Јајца",
    value: "eggs",
  },
  {
    label: "Риба",
    value: "fish",
  },
  {
    label: "Глутен",
    value: "gluten",
  },
  {
    label: "Соја",
    value: "soy",
  },
  {
    label: "Лактоза",
    value: "lactose",
  },
];

const mealsData = [
  {
    name: "Фалафел врап",
    cuisine: ["vegetarian", "vegan"],
    image: "/assets/food/falafel.jpg",
  },
  {
    name: "Вегански пилешки врап",
    cuisine: ["vegetarian", "vegan"],
    image: "/assets/food/vegan-chicken-wrap.jpg",
  },
  {
    name: "Вегански пилешки бургер",
    cuisine: ["vegetarian", "vegan", "burger"],
    image: "/assets/food/vegan-chicken-burger.jpg",
  },
  {
    name: "Вегански чиз бургер",
    cuisine: ["vegetarian", "vegan", "burger"],
    image: "/assets/food/vegan-cheeseburger.jpg",
  },
  {
    name: "Вегански бијонд бургер",
    cuisine: ["vegetarian", "vegan", "burger"],
    image: "/assets/food/vegan-beyond-burger.jpg",
  },
  {
    name: "Крцкав вегански бургер",
    cuisine: ["vegetarian", "vegan", "burger"],
    image: "/assets/food/vegan-crunchy-burger.jpg",
  },
  {
    name: "Фалафел салата",
    cuisine: ["vegetarian", "vegan", "salad"],
    image: "/assets/food/falafel-salad.jpg",
  },
  {
    name: "Веганска пилешки салата",
    cuisine: ["vegetarian", "vegan", "salad"],
    image: "/assets/food/vegan-chicken-salad.jpg",
  },
  {
    name: "Фалефел бокс",
    cuisine: ["vegetarian", "vegan"],
    image: "/assets/food/falafel-box.jpg",
  },
  {
    name: "Вегански медаљони",
    cuisine: ["vegetarian", "vegan"],
    image: "/assets/food/vegan-nuggets.jpg",
  },
  {
    name: "Џеј пад таи",
    cuisine: ["asian", "vegan", "vegetarian"],
    image: "/assets/food/vegan-jay-pad-thai.jpg",
  },
  {
    name: "Сарасвати домашно кари",
    cuisine: ["asian", "vegan", "vegetarian", "indian"],
    image: "/assets/food/vegan-saraswati-curry.jpg",
  },
  {
    name: "Ферментирана палачинка од леќа",
    cuisine: ["asian", "vegan", "vegetarian"],
    image: "/assets/food/vegan-lentil-pancake.jpg",
  },
  {
    name: "Њоки со тартуфи",
    cuisine: ["vegan", "vegetarian"],
    image: "/assets/food/vegan-gnocchi-with-truffles.jpg",
  },
  {
    name: "Веганско болоњезе",
    cuisine: ["vegan", "vegetarian", "italian"],
    image: "/assets/food/vegan-bolognese.jpg",
  },
  {
    name: "Веганска пица маргарита",
    cuisine: ["vegan", "vegetarian", "italian"],
    image: "/assets/food/vegan-margherita.jpg",
  },
  {
    name: "Веганска пица со рагу",
    cuisine: ["vegan", "vegetarian", "italian"],
    image: "/assets/food/vegan-pizza-ragu.jpg",
  },
  {
    name: "Вегански BBQ чизбургер",
    cuisine: ["vegan", "vegetarian", "burger"],
    image: "/assets/food/vegan-bbq-cheeseburger.jpg",
  },
  {
    name: "Пилешко Гимбао",
    cuisine: ["asian"],
    image: "/assets/food/chicken-gimbao.jpg",
  },
  {
    name: "Слатко кисело пилешко со ориз",
    cuisine: ["asian"],
    image: "/assets/food/sweet-and-sour-chicken.jpg",
  },
  {
    name: "Пилешки чоп суи",
    cuisine: ["asian"],
    image: "/assets/food/chicken-chop-suey.jpg",
  },
  {
    name: "Пилешко со бамбус",
    cuisine: ["asian"],
    image: "/assets/food/chicken-bamboo.jpg",
  },
  {
    name: "Пилешко со брокула",
    cuisine: ["asian"],
    image: "/assets/food/chicken-broccoli.jpg",
  },
  {
    name: "Ориз со зеленчук",
    cuisine: ["asian"],
    image: "/assets/food/rice-with-vegetables.jpg",
  },
  {
    name: "Ориз со пилешко",
    cuisine: ["asian"],
    image: "/assets/food/rice-with-chicken.jpg",
  },
  {
    name: "Шпагети чоп суи",
    cuisine: ["asian"],
    image: "/assets/food/spaghetti-chop-suey.jpg",
  },
  {
    name: "Пржени шпагети со пилешко",
    cuisine: ["asian"],
    image: "/assets/food/fried-spaghetti-chicken.jpg",
  },
  {
    name: "Пржени шпагети со ракчиња",
    cuisine: ["asian"],
    image: "/assets/food/fried-spaghetti-crabs.jpg",
  },
  {
    name: "Шефот",
    cuisine: ["burger"],
    image: "/assets/food/the-boss-burger.jpg",
  },
  {
    name: "Џек Рајан бургер",
    cuisine: ["burger"],
    image: "/assets/food/jack-ryan-burger.jpg",
  },
  {
    name: "Гнасен мек бургер",
    cuisine: ["burger"],
    image: "/assets/food/dirty-mac-burger.jpg",
  },
  {
    name: "Силвертон бургер",
    cuisine: ["burger"],
    image: "/assets/food/silverton-burger.jpg",
  },
  {
    name: "Бургер со сланина и кашкавал",
    cuisine: ["burger"],
    image: "/assets/food/bacon-cheese-burger.jpg",
  },
  {
    name: "Калифорнија класик",
    cuisine: ["burger"],
    image: "/assets/food/california-classic-burger.jpg",
  },
  {
    name: "Дабл трабл бургер",
    cuisine: ["burger"],
    image: "/assets/food/double-trouble-burger.jpg",
  },
  {
    name: "Петручели бургер",
    cuisine: ["burger"],
    image: "/assets/food/petruccelli-burger.jpg",
  },
  {
    name: "Вистински бургер",
    cuisine: ["burger"],
    image: "/assets/food/the-real-burger.jpg",
  },
  {
    name: "Вистински чизбургер",
    cuisine: ["burger"],
    image: "/assets/food/the-real-double-cheese-burger.jpg",
  },
  {
    name: "Вистински дабл чизбургер",
    cuisine: ["burger"],
    image: "/assets/food/the-real-double-cheese-burger.jpg",
  },
  {
    name: "BBQ бургер со сланина и кашкавал",
    cuisine: ["burger"],
    image: "/assets/food/bbq-bacon-cheese-burger.jpg",
  },
  {
    name: "Италијано бургер",
    cuisine: ["burger"],
    image: "/assets/food/italiano-burger.jpg",
  },
  {
    name: "Ретро бургер",
    cuisine: ["burger"],
    image: "/assets/food/retro-burger.jpg",
  },
  {
    name: "Мезе вегански бургер",
    cuisine: ["burger"],
    image: "/assets/food/meze-vegan-burger.jpg",
  },
  {
    name: "Фердинанд бургер",
    cuisine: ["burger"],
    image: "/assets/food/ferdinand-burger.jpg",
  },
  {
    name: "Бургер момент",
    cuisine: ["burger"],
    image: "/assets/food/burger-moment.jpg",
  },
  {
    name: "Бургер спиди",
    cuisine: ["burger"],
    image: "/assets/food/burger-speedy.jpg",
  },
  {
    name: "Бургер ќежуели",
    cuisine: ["burger"],
    image: "/assets/food/burger-casually.jpg",
  },
  {
    name: "Бургер слоули",
    cuisine: ["burger"],
    image: "/assets/food/burger-slowly.jpg",
  },
  {
    name: "Слатка пица",
    cuisine: ["pizza"],
    image: "/assets/food/sweet-pizza-dodo.jpg",
  },
  {
    name: "Пица со кашкавал",
    cuisine: ["pizza"],
    image: "/assets/food/cheese-pizza-dodo.jpg",
  },
  {
    name: "Пица со кашкавал",
    cuisine: ["pizza"],
    image: "/assets/food/cheese-pizza-dodo.jpg",
  },
  {
    name: "Пица со четири кашкавали",
    cuisine: ["pizza"],
    image: "/assets/food/quattro-formaggi-dodo.jpg",
  },
  {
    name: "Пица со четири кашкавали",
    cuisine: ["pizza"],
    image: "/assets/food/quattro-formaggi-dodo.jpg",
  },
  {
    name: "Пица со кашкавал и шунка",
    cuisine: ["pizza"],
    image: "/assets/food/cheese-ham-pizza-dodo.jpg",
  },
  {
    name: "Пица со кашкавал и шунка",
    cuisine: ["pizza"],
    image: "/assets/food/cheese-ham-pizza-dodo.jpg",
  },
  {
    name: "Пица чикен ранч",
    cuisine: ["pizza"],
    image: "/assets/food/chicken-ranch-pizza-dodo.jpg",
  },
  {
    name: "BBQ пица со пилешко",
    cuisine: ["pizza"],
    image: "/assets/food/chicken-bbq-pizza-dodo.jpg",
  },
  {
    name: "BBQ пица со пилешко",
    cuisine: ["pizza"],
    image: "/assets/food/chicken-bbq-pizza-dodo.jpg",
  },
  {
    name: "Пица пеперони",
    cuisine: ["pizza"],
    image: "/assets/food/pepperoni-pizza-dodo.jpg",
  },
  {
    name: "Пица пршут",
    cuisine: ["pizza"],
    image: "/assets/food/prosciutto-pizza-dodo.jpg",
  },
  {
    name: "Пица пршут",
    cuisine: ["pizza"],
    image: "/assets/food/prosciutto-pizza-dodo.jpg",
  },
  {
    name: "Пица фиеста",
    cuisine: ["pizza"],
    image: "/assets/food/pizza-fiesta-dodo.jpg",
  },
  {
    name: "Шпагети сичилиана",
    cuisine: ["italian", "vegan", "vegetarian"],
    image: "/assets/food/spaghetti-siciliana.jpg",
  },
  {
    name: "Шпагети со домати",
    cuisine: ["italian", "vegan", "vegetarian"],
    image: "/assets/food/sugo-al-pomodor-spaghetti.jpg",
  },
  {
    name: "Касарече со рагу",
    cuisine: ["italian"],
    image: "/assets/food/casarecce-alla-ragu.jpg",
  },
  {
    name: "Касарече со песто",
    cuisine: ["italian"],
    image: "/assets/food/casarecce-pesto.jpg",
  },
  {
    name: "Шпагети аматричиана",
    cuisine: ["italian"],
    image: "/assets/food/spaghetti-amattriciana.jpg",
  },
  {
    name: "Шпагети митболс оф фајер",
    cuisine: ["italian"],
    image: "/assets/food/meatballs-of-fire-spaghetti.jpg",
  },
  {
    name: "Лазања емилијана",
    cuisine: ["italian"],
    image: "/assets/food/lasagna_emiliana.jpg",
  },
  {
    name: "Лазања вегетаријана",
    cuisine: ["italian", "vegetarian"],
    image: "/assets/food/lasagna-vegetarian.jpg",
  },
  {
    name: "Домашни њоки",
    cuisine: ["italian"],
    image: "/assets/food/homemade-gnocchi.jpg",
  },
  {
    name: "Домашни њоки со тартуфи",
    cuisine: ["italian"],
    image: "/assets/food/homemade-gnocchi-truffles.jpg",
  },
  {
    name: "Домашни њоки со печурки",
    cuisine: ["italian"],
    image: "/assets/food/homemade-gnocchi-mushrooms.jpg",
  },
  {
    name: "Макарони со домати и пилешко",
    cuisine: ["italian"],
    image: "/assets/food/penne-rigate-tomatoes.jpg",
  },
  {
    name: "Шпагети карбонара",
    cuisine: ["italian"],
    image: "/assets/food/spaghetti-carbonara.jpg",
  },
  {
    name: "Шпагети со морска храна",
    cuisine: ["italian"],
    image: "/assets/food/spaghetti-seafood.jpg",
  },
  {
    name: "Шпагети со туна",
    cuisine: ["italian"],
    image: "/assets/food/spaghetti-tuna.jpg",
  },
  {
    name: "Ризото со домати",
    cuisine: ["italian"],
    image: "/assets/food/risotto-tomatoes.jpg",
  },
  {
    name: "Ризото со пилешко",
    cuisine: ["italian"],
    image: "/assets/food/risotto-chicken.jpg",
  },
  {
    name: "Ризото со печурки",
    cuisine: ["italian"],
    image: "/assets/food/risotto-mushrooms.jpg",
  },
  {
    name: "Ризото со пилешко кари",
    cuisine: ["italian"],
    image: "/assets/food/risotto-chicken-curry.jpg",
  },
  {
    name: "Салата рома",
    cuisine: ["salad"],
    image: "/assets/food/salad-roma-rex.jpg",
  },
  {
    name: "Салата цезар",
    cuisine: ["salad"],
    image: "/assets/food/salad-caesar.jpg",
  },
  {
    name: "Салата парма",
    cuisine: ["salad"],
    image: "/assets/food/salad-parma-rex.jpg",
  },
  {
    name: "Салата тоскана",
    cuisine: ["salad"],
    image: "/assets/food/salad-toscana.jpg",
  },
  {
    name: "Салата ѕвезда",
    cuisine: ["salad"],
    image: "/assets/food/salad-star-parma.jpg",
  },
  {
    name: "Салата зорба",
    cuisine: ["salad"],
    image: "/assets/food/salad-zorba.jpg",
  },
  {
    name: "Салата галеб",
    cuisine: ["salad"],
    image: "/assets/food/salad-galeb.jpg",
  },
  {
    name: "Салата алибаба",
    cuisine: ["salad"],
    image: "/assets/food/salad-alibaba.jpg",
  },
  {
    name: "Салата олимпија",
    cuisine: ["salad"],
    image: "/assets/food/salad-olimpija.jpg",
  },
  {
    name: "Салата сидро",
    cuisine: ["salad"],
    image: "/assets/food/salad-sidro.jpg",
  },
  {
    name: "Салата капрезе",
    cuisine: ["salad"],
    image: "/assets/food/salad-caprese.jpg",
  },
  {
    name: "Салата ортолана",
    cuisine: ["salad"],
    image: "/assets/food/salad-ortolana.jpg",
  },
  {
    name: "Салата наполи",
    cuisine: ["salad"],
    image: "/assets/food/salad-napoli.jpg",
  },
  {
    name: "Салата туна",
    cuisine: ["salad"],
    image: "/assets/food/salad-tuna.jpg",
  },
  {
    name: "Салата бурата",
    cuisine: ["salad"],
    image: "/assets/food/salad-burrata.jpg",
  },
  {
    name: "Салата веганска",
    cuisine: ["salad", "vegan"],
    image: "/assets/food/salad-vegan.jpg",
  },
  {
    name: "Салата парма",
    cuisine: ["salad"],
    image: "/assets/food/salad-parma.jpg",
  },
  {
    name: "Протеинска салата",
    cuisine: ["salad"],
    image: "/assets/food/salad-protein.jpg",
  },
  {
    name: "Сезонска салата",
    cuisine: ["salad"],
    image: "/assets/food/salad-season.jpg",
  },
];

const getRandomIntegerInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const selectRandomElementFromArray = (arrayElements = []) => {
  const randomIntegerFromArrayLength = () =>
    Math.floor(Math.random() * arrayElements.length);

  return arrayElements[randomIntegerFromArrayLength()];
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

  const cook = {
    id: faker.datatype.uuid(),
    date_created: faker.date.past(),
    gender: randomGender,
    first_name: faker.name.firstName(randomGender),
    last_name: faker.name.lastName(randomGender),
    cuisines: [...selectRandomElementsFromArray(cuisines, 3)],
    main_cuisine: selectRandomElementFromArray(mainCuisines),
    city: selectRandomElementFromArray(cities),
    image_url: randomImageURL,
    rating: getRandomIntegerInclusive(3, 5),
    isBadge: faker.datatype.boolean(),
    numberOfDeliveries: getRandomIntegerInclusive(10, 150),
    biography: faker.lorem.paragraphs(3),
    address: faker.address.streetAddress(),
    phone_number: faker.phone.number(),
    email: faker.internet.email(),
  };

  cooks.push(cook);
}

const cooksStringified = JSON.stringify(cooks);

fs.writeFileSync("data/cooks.json", cooksStringified, "utf-8");

// GENERATE MEALS FOR EACH COOK BASED ON THEIR CUISINES

console.log(pc.blue("Generating meals..."));

const meals = [];

cooks.forEach((cook) => {
  for (let i = 0; i < 6; i++) {
    cook.cuisines.forEach((cuisine) => {
      const recipesForCuisine = mealsData.filter((meal) =>
        meal.cuisine?.includes(cuisine.value)
      );

      let randomRecipe;

      const selectUniqueRecipeForCook = () => {
        const selectedRecipe = selectRandomElementFromArray(recipesForCuisine);

        const mealExists = meals.some(
          (meal) =>
            meal.cook_id === cook.id && meal.title === selectedRecipe.name
        );

        if (!mealExists) {
          randomRecipe = selectedRecipe;
        } else {
          selectUniqueRecipeForCook();
        }
      };

      selectUniqueRecipeForCook();

      const recipe = {
        id: faker.datatype.uuid(),
        date_created: faker.date.past(),
        title: randomRecipe ? randomRecipe.name : "",
        description: faker.lorem.paragraph(),
        image_url: randomRecipe ? randomRecipe.image : "",
        rating: getRandomIntegerInclusive(3, 5),
        cuisine: cuisine,
        availability: selectRandomElementFromArray(availability),
        price: getRandomIntegerInclusive(250, 700),
        delivery_type: selectRandomElementFromArray(deliveryType),
        day_available: getRandomIntegerInclusive(0, 28),
        allergens: selectRandomElementsFromArray(allergens, 3),
      };

      meals.push({
        ...recipe,
        cook_id: cook.id,
        cook_avatar: cook.image_url,
        city: cook.city,
      });
    });
  }
});

fs.writeFileSync("data/meals.json", JSON.stringify(meals), "utf-8");

console.log(pc.blue("Generating reviews..."));

const reviews = [];

cooks.forEach((cook) => {
  for (let i = 0; i < 10; i++) {
    const review = {
      id: faker.datatype.uuid(),
      date_created: faker.date.past(),
      rating: getRandomIntegerInclusive(3, 5),
      text: faker.lorem.paragraph(),
      cook_id: cook.id,
      cook_avatar: cook.image_url,
      city: cook.city,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
    };

    reviews.push(review);
  }
});

fs.writeFileSync("data/reviews.json", JSON.stringify(reviews), "utf-8");

console.log(pc.green("Data generated successfully!"));
