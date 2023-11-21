console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
  
    
  } catch (error) {
    console.log(error);
    
  }
}

fetchData(url);
