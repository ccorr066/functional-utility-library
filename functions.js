// freecodecamp reference

function includes(input1) {
   // A1:
   // A2:
   // R:
}
// freecodecamp reference

function some(input1) {
   // A1:
   // A2:
   // R:
}
// freecodecamp reference
function checkPositive(arr) {
   return arr.every((value) => value > 0);
}
checkPositive([1, 2, 3, -4, 5]);

function checkNums(value) {
   // A1:
   // R:
   return value.every((nums) => nums > 0);
}

// freecodecamp reference

function SSN(input1) {
   // A1: takes in what the user is inputing
   // R: 9 numbers for a social security. it includes a -
   console.log(input1);
   let ssn1 = String(input1);
   let ssn = ssn1.split("");
   ssn.splice(3, 0, "-");
   ssn.splice(6, 0, "-");
   let final = ssn.join("");
   return final;
}

// freecodecamp reference

function splitify(str) {
   return str.split(/\W/);
}
splitify("Hello World,I-am code");

function chopItUp(encode) {
   // A1: encode is the user input
   // R: what the user types out and being separated by commas.
   return encode.split("");
}

// freecodecamp reference
var watchList = [
   {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      Plot:
         "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      Language: "English, Japanese, French",
      Country: "USA, UK",
      Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "1,446,708",
      imdbID: "tt1375666",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot:
         "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "910,366",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer:
         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      Plot:
         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      Language: "English, Mandarin",
      Country: "USA, UK",
      Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Metascore: "82",
      imdbRating: "9.0",
      imdbVotes: "1,652,832",
      imdbID: "tt0468569",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Batman Begins",
      Year: "2005",
      Rated: "PG-13",
      Released: "15 Jun 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure",
      Director: "Christopher Nolan",
      Writer:
         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      Plot:
         "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      Language: "English, Urdu, Mandarin",
      Country: "USA, UK",
      Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      Metascore: "70",
      imdbRating: "8.3",
      imdbVotes: "972,584",
      imdbID: "tt0372784",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot:
         "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "876,575",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
   },
];

var ratings = watchList.map((movie) => {
   let title = movie.Title;
   let rating = movie.imdbRating;
   console.log("this one", title, rating);
   let movieSummary = {
      title: title,
      rating: rating,
   };
   return movieSummary;
});

console.log(JSON.stringify(ratings));

function musicThatInfluence() {
   // A1:
   // A2:
   // R:
}
let albumMasterPiece = [
   {
      arist: "Eminem",
      album: "Slim Shady lp",
      genre: "Hip-Hop",
   },
   {
      arist: "Metallica",
      album: " Master of Puppets",
      genre: "Heavy Metal",
   },
   {
      arist: "Michael Jackson",
      album: "Thriller",
      genre: "Pop",
   },
   {
      arist: "Bob Marley",
      album: "Exodus",
      genre: "Reggae",
   },
];
// freecodecamp reference
function nonMutatingConcat(original, attach) {
   return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

function keepTogetherConcat(first, second) {
   // A1: place two arguments so the user can type what they like
   // R: what the user typed in both input boxes
   return first.concat(second);
}

// freecodecamp reference
function nonMutatingSplice(cities) {
   return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

function changeTheArraySlice(cultureFood) {
   // A1:
   // R:
   return food.slice(0, cultureFood);
}
let food = [
   "NicaDishes",
   "ThaiDishes",
   "HonduranDishes",
   "CubanDishes",
   "PeruvianDishes",
];

// freecodecamp reference
function sliceArray(anim, beginSlice, endSlice) {
   return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

function sliceList(beginSlice, endSlice) {
   // A1: an array of strings is listed
   // R: user favorite sport and function will slice how many letters they want
   return sports.slice(beginSlice, endSlice);
}
let sports = ["basketball", "football", "baseball", "hockey"];
// freecodecamp reference
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
   let newArray = [];
   s.forEach((elem) => {
      if (callback(elem) === true) {
         newArray.push(elem);
      }
   });
   return newArray;
};

let new_s = s.myFilter(function (item) {
   return item % 2 === 1;
});

function getNumbersBiggerThan5(numbers) {
   //  use forEach() instead of a filter()
   // A1: an array of numbers
   // R: a new array of numbers all greater or equal to five
   let filteredNumbers = [];
   numbers.forEach((number) => {
      if (number >= 5) {
         filteredNumbers.push(number);
      }
   });
   return filteredNumbers;
}
