console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!


const showWelcomeMessage = userName => console.log(`Welcome Jane Doe! You are logged in now.`);

function showWelcomeMessage(userName) {
  console.log(`Welcome Jane Doe! You are logged in now.`);
}


handleUserLogin(showWelcomeMessage);


// -----

handleUserLogin(function(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
});


