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

function search(str) {
  // TODO
  if (str === "") {
    return [];
  }
  let lowerCaseFruitsArr = [];
  fruits.forEach((word) => {
    lowerCaseFruitsArr.push(word.toLowerCase());
  });
  let results = lowerCaseFruitsArr.filter((fruit) => {
    return fruit.includes(str);
  });
  let topResults = results.slice(0, 10);
  let resultsSet = new Set();
  topResults.map((result) => resultsSet.add(result));
  showSuggestions(resultsSet, str);
}

function searchHandler(e) {
  // TODO
  if (e.target.value.length === 0) {
    suggestions.innerHTML = "";
  }
  if (e.target.value !== " ") {
    let inputVal = e.target.value.toLowerCase();
    let resultsArray = search(inputVal);
    return resultsArray;
  }
}

function showSuggestions(results, inputVal) {
  // TODO
  suggestions.innerHTML = "";
  results.forEach((fruit) => {
    let newLi = document.createElement("li");
    newLi.innerText = fruit;

    suggestions.append(newLi);
  });
}

function useSuggestion(e) {
  // TODO
  input.value = e.target.innerText;
  suggestions.innerHTML = "";
}

input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);
