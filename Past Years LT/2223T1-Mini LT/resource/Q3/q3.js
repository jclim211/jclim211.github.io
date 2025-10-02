/*
 Name: 
 Email: 
 */

// DO NOT EDIT: START
const jokeTable = document.getElementById("joke-table");
const jokeTableTbody = jokeTable.getElementsByTagName("tbody")[0];
const jokeText = document.getElementById("jokeText");
// DO NOT EDIT: END

const API_URL = "q3_getJoke.php";

function getSampleJokes() {
  // DO NOT EDIT: START
  while (jokeTableTbody.lastChild) {
    jokeTableTbody.lastChild.remove();
  }

  let serial = 1;
  // DO NOT EDIT: END

  // To be completed...
  for(joke of sampleJokes) {
    if (joke.type == "twopart"){
      let tr = document.createElement("tr");
      jokeTableTbody.appendChild(tr);

      let content = [serial++, joke.category, joke.setup, joke.delivery];

      for (item of content) {
        let td = document.createElement("td");
        td.innerHTML = item;
        tr.appendChild(td);
      }
    }
  }
}

async function getJoke() {
  // To be completed...
  let query = document.getElementById('categoriesDD').value;
  try {
    const response = await axios.get(API_URL, {params: {query: query}});
    console.log(response);
    document.getElementById("jokeText").innerText = response.data
  } catch (error) {
    console.error("Error fetching stations:", error);
  }
}
