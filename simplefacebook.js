var database = [
	{
		username: "abubakar",
		password: "supersecre"
	}
];

var newsfeed = [
	{
		username: "Ann",
		timeline: "Can't wait to start coding some JS!"
	},
	{
		username: "Ali",
		timeline: "Checking in at a 10 today!"
	},
	{
		username: "Jacob",
		timeline: "Tired from college. Need like a week off! XD"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function singIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed)
    } else {
        alert("Please enter a correct username and/or password!")
    }
}

singIn(userNamePrompt, passwordPrompt); 