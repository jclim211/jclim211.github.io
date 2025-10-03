/* Task 6 - API call */
function get_all_drinks() {
  console.log("[START] get_all_drinks()");

  const api_endpoint_url = "http://is216/DrinksAPI/api/drink/read.php"; // local file

  axios
    .get(api_endpoint_url)
    .then((response) => {
      console.log("Axios call completed successfully!");

      let section_results = document.getElementById("results");

      // Build a string of Bootstrap cards
      let result_str = ``;
      let drinks_array = response.data.records; // Array of drink objects
      console.log(drinks_array); // Array of drink objects

      // Task 4 - Display Drinks
      //   Each drink is a Bootstrap card
      // Replace all the hard-coded strings with actual values as read from the JSON file
      for (let drink of drinks_array) {
        drink_name = drink.name;
        drink_category = drink.category;
        drink_alcoholic = drink.alcoholic;
        drink_photo_url = drink.photo_url;
        result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="/DrinksAPI/${drink_photo_url}" 
                             class="card-img-top"
                             alt="${drink_name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink_name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink_category} • ${drink_alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
      }

      // Inject the cards into the #results section
      section_results.innerHTML = result_str;
    })
    .catch((error) => {
      console.log(error.message);

      // Task 5 - Data can't be loaded, display alert
      //   "Failed to load drinks data."
      // YOUR CODE GOES HERE
      let section_alerts = document.getElementById("alerts");
      section_alerts.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Failed to load drinks data.
            </div>
        `;
    });

  console.log("[END] get_all_drinks()");
}

/* Task 7 - Category Dropdown Menu */
function populate_category_dropdown() {
  console.log("[START] populate_category_dropdown()");

  const api_endpoint_url = "http://is216/DrinksAPI/api/drink/category.php"; // API endpoint

  axios
    .get(api_endpoint_url)
    .then((response) => {
      console.log("Axios call completed successfully!");
      let select_category = document.getElementById("category");
      //select_category.innerHTML = ""; // Clear existing options
      let categories_array = response.data.records;
      console.log(categories_array); // Array of category objects

      // Populate the dropdown with category options
      for (let category of categories_array) {
        let option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select_category.appendChild(option);
      }
    })
    .catch((error) => {
      console.log(error.message);
    });

  console.log("[END] populate_category_dropdown()");
}

/* Task 8 - Category Dropdown Event Listener */

//     // YOUR CODE GOES HERE
document.getElementById("category").addEventListener("change", function () {
  console.log("Category changed to: " + this.value);
  // You can add code here to filter the drinks based on the selected category
  if (this.value == "") {
    get_all_drinks(); // Show all drinks if "All" is selected
  } else {
    console.log(this.value);
    // Fetch and display drinks of the selected category
    const api_endpoint_url = `http://is216/DrinksAPI/api/drink/search.php?c=${this.value}`;
    console.log(api_endpoint_url);
    axios
      .get(api_endpoint_url)
      .then((response) => {
        let section_results = document.getElementById("results");
        let result_str = ``;
        let drinks_array = response.data.records;
        for (let drink of drinks_array) {
          drink_name = drink.name;
          drink_category = drink.category;
          drink_alcoholic = drink.alcoholic;
          drink_photo_url = drink.photo_url;
          result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="/DrinksAPI/${drink_photo_url}" 
                             class="card-img-top"
                             alt="${drink_name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink_name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink_category} • ${drink_alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }
        section_results.innerHTML = result_str;
      })
      .catch((error) => {
        console.log(error.message);

        // Task 5 - Data can't be loaded, display alert
        //   "Failed to load drinks data."
        // YOUR CODE GOES HERE
        let section_alerts = document.getElementById("alerts");
        section_alerts.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Failed to load drinks data.
            </div>
        `;
      });
  }
});

/* Task 9 - Alcoholic Dropdown Event Listener */
document.getElementById("alcoholic").addEventListener("change", function () {
  console.log("Alcoholic changed to: " + this.value);
  // You can add code here to filter the drinks based on the selected category
  if (this.value == "") {
    get_all_drinks(); // Show all drinks if "All" is selected
  } else {
    console.log(this.value);
    // Fetch and display drinks of the selected category
    const api_endpoint_url = `http://is216/DrinksAPI/api/drink/search.php?a=${this.value}`;
    console.log(api_endpoint_url);
    axios
      .get(api_endpoint_url)
      .then((response) => {
        let section_results = document.getElementById("results");
        let result_str = ``;
        let drinks_array = response.data.records;
        for (let drink of drinks_array) {
          drink_name = drink.name;
          drink_category = drink.category;
          drink_alcoholic = drink.alcoholic;
          drink_photo_url = drink.photo_url;
          result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="/DrinksAPI/${drink_photo_url}" 
                             class="card-img-top"
                             alt="${drink_name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink_name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink_category} • ${drink_alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }
        section_results.innerHTML = result_str;
      })
      .catch((error) => {
        console.log(error.message);

        // Task 5 - Data can't be loaded, display alert
        //   "Failed to load drinks data."
        // YOUR CODE GOES HERE
        let section_alerts = document.getElementById("alerts");
        section_alerts.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Failed to load drinks data.
            </div>
        `;
      });
  }
});
/* Task 10 - Name search input Event Listener */

// DO NOT MODIFY THE BELOW LINES
get_all_drinks();
populate_category_dropdown();
