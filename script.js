const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function searchHandler(e) {
  if (e.target.value.length === 0) {
    suggestions.innerHTML = "";
  }
  let inputVal = e.target.value.toLowerCase();
  search(inputVal);
}

function search(str) {
  if (str === "") {
    return;
  }
  const lowerCaseFruitsArr = fruits.map((word) => word.toLowerCase());

  const results = lowerCaseFruitsArr.filter((fruit) => {
    return fruit.includes(str);
  });
  const topResults = results.slice(0, 10);
  showSuggestions(topResults, str);
}

function showSuggestions(results) {
  suggestions.innerHTML = "";
  results.forEach((fruit) => {
    let newLi = document.createElement("li");
    newLi.innerText = fruit;

    suggestions.append(newLi);
  });
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  suggestions.innerHTML = "";
}

input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);
