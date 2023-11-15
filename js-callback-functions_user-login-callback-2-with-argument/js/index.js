console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!


const welcomeUser = userName => console.log(`Welcome Jane Doe! You are logged in now.`);

function welcomeUser(userName) {
  console.log(`Welcome Jane Doe! You are logged in now.`);
}


welcomeUser();


// Método 1: Usando la palabra clave "function"
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}

// Método 2: Usando una función anónima
function handleUserLogin(callback) {
  // Supongamos que 'Jane Doe' es el usuario para este ejemplo
  const userName = 'Jane Doe';
  callback(userName);
}

// Llamando a handleUserLogin y pasando showWelcomeMessage como el callback (Método 1)
handleUserLogin(showWelcomeMessage);

// Llamando a handleUserLogin y pasando una función anónima como el callback (Método 2)
handleUserLogin(function (userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
});
