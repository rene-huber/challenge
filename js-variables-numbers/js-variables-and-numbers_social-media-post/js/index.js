console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "Social Media Post";
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let likes = 10; 
const user = "User123";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log("Title", title);
console.log("Text", text);
console.log("Likes", likes);
console.log("User", user);
console.log("Reported", isReported)

likes++; 
console.log("Add likes:", likes);
// --^-- write your code here --^--
