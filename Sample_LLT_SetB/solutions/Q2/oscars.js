/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2022

*/


// When the webpage loads
function display_default() {

    console.log("[START] display_default")

    // By default, display all winners (over all decades)
    call_api_get_winners_all()

    console.log("[END] display_default")

}


function call_api_get_winners_all() {

    console.log("[START] call_api_get_winners_all")


    // API endpoint
    // Relative URL
    let url = "krazyoscars/winner/read.php"

    axios.get(url)
        .then(response => {
            console.log(response.data)

            display_decade_list(response.data)
            display_winners(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })


    console.log("[END] call_api_get_winners_all")
}


function display_decade_list(json_obj) {

    console.log("[START] display_decade_list")


    let winner_array = json_obj.records

    let digit_array = []

    // Display winners as cards
    for (let winner of winner_array) {

        let movie_year = winner.movie.year
        // let first_three_digits = movie_year.substring(0, 3) // e.g. 1994 --> 199
        let first_three_digits = Math.floor(movie_year / 10);
        digit_array.push(first_three_digits)
    }

    // Remove duplicate years
    let answer = digit_array.reduce(countDuplicates, {})

    const decadeListDiv = document.getElementById("decade_list")
    decadeListDiv.replaceChildren()

    let counter = 0
    for (const [key, value] of Object.entries(answer)) {

        let new_year_str = key + "0"

        // Create button element
        const button = document.createElement("button")
        button.type = "button"
        button.className = "dropdown-item"
        button.onclick = () => show_winners(new_year_str)

        // Create text node for year
        button.appendChild(document.createTextNode(new_year_str))

        // Create span for badge
        const span = document.createElement("span")
        span.className = "badge rounded-pill bg-warning text-dark"
        span.textContent = value
        button.appendChild(span)

        decadeListDiv.appendChild(button)

        counter++
    }

    console.log("[END] display_decade_list")

}

function countDuplicates(obj, num) {
    obj[num] = (++obj[num] || 1)
    return obj
}


function show_winners(decade) {

    console.log("[show_winners()] Start")

    // Call API
    call_api_get_winners_by_decade(decade)

    console.log("[show_winners()] End")

}


function call_api_get_winners_by_decade(decade) {

    console.log("[START] call_api_get_winners_by_decade")


    // API endpoint
    // Relative URL

    axios.get("krazyoscars/winner/search.php", {
        params: {
            d: decade
        }
    })
        .then(response => {
            console.log(response.data)

            display_winners(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })


    console.log("[END] call_api_get_winners_by_decade")
}


function display_winners(json_obj) {

    console.log("[START] display_winners")

    let winner_array = json_obj.records

    const winnerCardsDiv = document.getElementById("winner_cards")
    winnerCardsDiv.replaceChildren()

    // Create main row container
    const rowDiv = document.createElement("div")
    rowDiv.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"

    // Display winners as cards
    for (let winner of winner_array) {

        // Create column
        const colDiv = document.createElement("div")
        colDiv.className = "col"

        // Create card
        const card = document.createElement("div")
        card.className = "card"

        // Create image
        const img = document.createElement("img")
        img.className = "card-img-top"
        img.src = "krazyoscars/images/" + winner.others.image
        img.alt = winner.bio.name
        card.appendChild(img)

        // Create card body
        const cardBody = document.createElement("div")
        cardBody.className = "card-body"

        // Create title
        const title = document.createElement("h5")
        title.className = "card-title"
        title.textContent = winner.bio.name
        cardBody.appendChild(title)

        // Create paragraph
        const paragraph = document.createElement("p")
        paragraph.className = "card-text"

        // Create bold span for movie title and year
        const boldSpan = document.createElement("span")
        boldSpan.style.fontWeight = "bold"
        boldSpan.textContent = winner.movie.title + " (" + winner.movie.year + ")"
        paragraph.appendChild(boldSpan)

        // Create line break
        paragraph.appendChild(document.createElement("br"))

        // Create italic span for description
        const italicSpan = document.createElement("span")
        italicSpan.style.fontStyle = "italic"
        italicSpan.textContent = winner.movie.description
        paragraph.appendChild(italicSpan)

        cardBody.appendChild(paragraph)
        card.appendChild(cardBody)
        colDiv.appendChild(card)
        rowDiv.appendChild(colDiv)
    }

    winnerCardsDiv.appendChild(rowDiv)

    console.log("[END] display_winners")

}